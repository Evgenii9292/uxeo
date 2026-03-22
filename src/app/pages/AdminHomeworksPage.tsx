import { useState, useEffect, useRef } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { useNavigate } from "react-router";

const ADMIN_PIN = "uxeo2024";

const TEXT_TITLE = "font-['Roboto_Condensed:Medium',sans-serif] font-medium";
const TEXT_BODY = "font-['Roboto_Condensed:Regular',sans-serif] font-normal";

interface Homework {
  id: string;
  lesson_name: string;
  user_id: string;
  figma_link: string;
  status: "pending" | "reviewed" | "rejected";
  comment: string;
  image_url?: string;
  created_at: string;
}

function StatusBadge({ status }: { status: Homework["status"] }) {
  const statusConfig = {
    pending: { label: "На проверке", color: "#FFA500" },
    reviewed: { label: "Готово", color: "#00D043" },
    rejected: { label: "Переделать", color: "#FF5D39" },
  };

  const config = statusConfig[status];

  return (
    <div
      className="px-[16px] py-[8px] rounded-full inline-flex items-center justify-center"
      style={{ backgroundColor: config.color + "20", border: `1px solid ${config.color}` }}
    >
      <span className={`${TEXT_BODY} text-[14px]`} style={{ color: config.color }}>
        {config.label}
      </span>
    </div>
  );
}

export default function AdminHomeworksPage() {
  const navigate = useNavigate();
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("admin-authed") === "1");
  const [homeworks, setHomeworks] = useState<Homework[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Draft comments keyed by homework id
  const [comments, setComments] = useState<Record<string, string>>({});
  // Uploaded image URLs keyed by homework id
  const [imageUrls, setImageUrls] = useState<Record<string, string>>({});
  // Upload progress keyed by homework id
  const [uploading, setUploading] = useState<Record<string, boolean>>({});
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const fetchHomeworks = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/homework/all`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch homeworks");
      }

      // Sort by date, newest first
      const sorted = (data.homeworks || []).sort(
        (a: Homework, b: Homework) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setHomeworks(sorted);
    } catch (err) {
      console.error("Error fetching homeworks:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authed) return;
    fetchHomeworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  const uploadImage = async (homeworkId: string, file: File) => {
    setUploading(prev => ({ ...prev, [homeworkId]: true }));
    try {
      const ext = file.name.split(".").pop() ?? "jpg";
      const path = `screenshots/${homeworkId}/${Date.now()}.${ext}`;
      const res = await fetch(
        `https://${projectId}.supabase.co/storage/v1/object/homeworks/${path}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
            "Content-Type": file.type,
            "x-upsert": "true",
          },
          body: file,
        }
      );
      if (res.ok) {
        const publicUrl = `https://${projectId}.supabase.co/storage/v1/object/public/homeworks/${path}`;
        setImageUrls(prev => ({ ...prev, [homeworkId]: publicUrl }));
      } else {
        // Fallback: read as base64 data URL (stores inline)
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target?.result as string;
          setImageUrls(prev => ({ ...prev, [homeworkId]: dataUrl }));
        };
        reader.readAsDataURL(file);
      }
    } catch {
      // Fallback to base64
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setImageUrls(prev => ({ ...prev, [homeworkId]: dataUrl }));
      };
      reader.readAsDataURL(file);
    } finally {
      setUploading(prev => ({ ...prev, [homeworkId]: false }));
    }
  };

  const updateStatus = async (homeworkId: string, newStatus: Homework["status"]) => {
    // If admin typed a new comment, use it; otherwise preserve the existing comment from server
    const existingHw = homeworks.find(h => h.id === homeworkId);
    const comment = comments[homeworkId] !== undefined ? comments[homeworkId] : (existingHw?.comment ?? "");
    const image_url = imageUrls[homeworkId] ?? existingHw?.image_url ?? "";
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/homework/${homeworkId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ status: newStatus, comment, image_url }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update status");
      }

      // Update local state
      setHomeworks((prev) =>
        prev.map((hw) => (hw.id === homeworkId ? { ...hw, status: newStatus, comment, image_url } : hw))
      );
      // Clear draft comment and image for this homework
      setComments((prev) => { const next = { ...prev }; delete next[homeworkId]; return next; });
      setImageUrls((prev) => { const next = { ...prev }; delete next[homeworkId]; return next; });
    } catch (err) {
      console.error("Error updating status:", err);
      alert(`Ошибка обновления: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  // ── PIN gate ──────────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}
      >
        <div
          style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 24,
            background: "#343E42", borderRadius: 20, padding: "40px 48px",
            minWidth: 320,
          }}
        >
          <p className={`${TEXT_TITLE} text-[#f4f5fc] text-[24px]`}>Админ-панель</p>
          <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[14px]`}>Введите PIN-код</p>
          <input
            type="password"
            value={pinInput}
            onChange={e => { setPinInput(e.target.value); setPinError(false); }}
            onKeyDown={e => {
              if (e.key === "Enter") {
                if (pinInput === ADMIN_PIN) {
                  sessionStorage.setItem("admin-authed", "1");
                  setAuthed(true);
                } else {
                  setPinError(true);
                }
              }
            }}
            placeholder="••••••••"
            autoFocus
            style={{
              width: "100%", height: 48, borderRadius: 12, border: pinError ? "1px solid #FF5D39" : "1px solid rgba(244,245,252,0.15)",
              background: "rgba(255,255,255,0.06)", color: "#f4f5fc", fontSize: 18,
              textAlign: "center", letterSpacing: "0.2em", outline: "none", padding: "0 16px",
              fontFamily: "Roboto Condensed, sans-serif",
            }}
          />
          {pinError && (
            <p className={`${TEXT_BODY} text-[#FF5D39] text-[13px]`}>Неверный PIN-код</p>
          )}
          <button
            onClick={() => {
              if (pinInput === ADMIN_PIN) {
                sessionStorage.setItem("admin-authed", "1");
                setAuthed(true);
              } else {
                setPinError(true);
              }
            }}
            style={{
              width: "100%", height: 48, borderRadius: 12, border: "none",
              background: "linear-gradient(135deg, #FF6B21, #994014)",
              color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer",
              fontFamily: "Roboto Condensed, sans-serif",
            }}
          >
            Войти
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center" style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}>
        <p className={`${TEXT_BODY} text-[#f4f5fc] text-[24px]`}>Загрузка...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-[20px]" style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}>
        <p className={`${TEXT_BODY} text-[#ff5d39] text-[24px]`}>Ошибка: {error}</p>
        <button
          onClick={fetchHomeworks}
          className="px-[32px] py-[16px] rounded-[15px] bg-[#ff6b21] cursor-pointer"
        >
          <span className={`${TEXT_BODY} text-[#f4f5fc] text-[18px]`}>Повторить</span>
        </button>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-[40px]" style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}>
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-[40px]">
          <div className="flex items-center gap-[20px]">
            <button
              onClick={() => navigate("/")}
              className="cursor-pointer flex items-center gap-[10px] hover:opacity-70 transition-opacity"
            >
              <span className={`${TEXT_BODY} text-[#f4f5fc] text-[18px]`}>← Назад</span>
            </button>
            <h1 className={`${TEXT_TITLE} text-[#f4f5fc] text-[32px]`}>
              Админ-панель: Домашние работы
            </h1>
          </div>
          <button
            onClick={fetchHomeworks}
            className="px-[24px] py-[12px] rounded-[12px] bg-[#404d52] cursor-pointer hover:bg-[#4d5d64] transition-colors"
          >
            <span className={`${TEXT_BODY} text-[#f4f5fc] text-[16px]`}>Обновить</span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-[20px] mb-[30px]">
          <div className="bg-[#404d52] rounded-[15px] px-[24px] py-[16px] flex-1">
            <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.6)] text-[14px] mb-[8px]`}>Всего работ</p>
            <p className={`${TEXT_TITLE} text-[#f4f5fc] text-[28px]`}>{homeworks.length}</p>
          </div>
          <div className="bg-[#404d52] rounded-[15px] px-[24px] py-[16px] flex-1">
            <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.6)] text-[14px] mb-[8px]`}>На проверке</p>
            <p className={`${TEXT_TITLE} text-[#FFA500] text-[28px]`}>
              {homeworks.filter((hw) => hw.status === "pending").length}
            </p>
          </div>
          <div className="bg-[#404d52] rounded-[15px] px-[24px] py-[16px] flex-1">
            <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.6)] text-[14px] mb-[8px]`}>Проверено</p>
            <p className={`${TEXT_TITLE} text-[#00D043] text-[28px]`}>
              {homeworks.filter((hw) => hw.status === "reviewed").length}
            </p>
          </div>
          <div className="bg-[#404d52] rounded-[15px] px-[24px] py-[16px] flex-1">
            <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.6)] text-[14px] mb-[8px]`}>Отклонено</p>
            <p className={`${TEXT_TITLE} text-[#FF5D39] text-[28px]`}>
              {homeworks.filter((hw) => hw.status === "rejected").length}
            </p>
          </div>
        </div>

        {/* Table */}
        {homeworks.length === 0 ? (
          <div className="bg-[#404d52] rounded-[15px] p-[40px] text-center">
            <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[18px]`}>
              Пока нет отправленных работ
            </p>
          </div>
        ) : (
          <div className="bg-[#404d52] rounded-[15px] overflow-hidden">
            <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#38444a]">
                  <th className={`${TEXT_TITLE} text-[#f4f5fc] text-[16px] text-left px-[24px] py-[16px]`}>
                    Пользователь
                  </th>
                  <th className={`${TEXT_TITLE} text-[#f4f5fc] text-[16px] text-left px-[24px] py-[16px]`}>
                    Урок
                  </th>
                  <th className={`${TEXT_TITLE} text-[#f4f5fc] text-[16px] text-left px-[24px] py-[16px]`}>
                    Ссылка Figma
                  </th>
                  <th className={`${TEXT_TITLE} text-[#f4f5fc] text-[16px] text-left px-[24px] py-[16px]`}>
                    Статус
                  </th>
                  <th className={`${TEXT_TITLE} text-[#f4f5fc] text-[16px] text-left px-[24px] py-[16px]`}>
                    Дата
                  </th>
                  <th className={`${TEXT_TITLE} text-[#f4f5fc] text-[16px] text-left px-[24px] py-[16px]`}>
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody>
                {homeworks.map((hw) => (
                  <tr key={hw.id} className="border-t border-[rgba(244,245,252,0.1)]">
                    <td className={`${TEXT_BODY} text-[#f4f5fc] text-[14px] px-[24px] py-[20px] max-w-[140px] break-all`}>
                      {hw.user_id}
                    </td>
                    <td className={`${TEXT_BODY} text-[#f4f5fc] text-[14px] px-[24px] py-[20px]`}>
                      {hw.lesson_name}
                    </td>
                    <td className="px-[24px] py-[20px]">
                      <a
                        href={hw.figma_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${TEXT_BODY} text-[#5eb3ff] text-[14px] hover:underline`}
                      >
                        Открыть
                      </a>
                    </td>
                    <td className="px-[24px] py-[20px]">
                      <StatusBadge status={hw.status} />
                    </td>
                    <td className={`${TEXT_BODY} text-[rgba(244,245,252,0.7)] text-[14px] px-[24px] py-[20px]`}>
                      {new Date(hw.created_at).toLocaleDateString("ru-RU", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-[24px] py-[20px] min-w-[260px]">
                      {/* Draft comment textarea — pre-filled with existing comment if present */}
                      <textarea
                        value={comments[hw.id] !== undefined ? comments[hw.id] : (hw.comment ?? "")}
                        onChange={(e) => setComments((prev) => ({ ...prev, [hw.id]: e.target.value }))}
                        placeholder="Комментарий для студента..."
                        rows={2}
                        className={`${TEXT_BODY} w-full text-[13px] text-[#f4f5fc] bg-[rgba(255,255,255,0.06)] border border-[rgba(244,245,252,0.12)] rounded-[8px] px-[10px] py-[8px] resize-none outline-none focus:border-[rgba(244,245,252,0.3)] placeholder-[#798589] mb-[10px]`}
                      />
                      {/* Image upload */}
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        ref={(el) => { fileInputRefs.current[hw.id] = el; }}
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) await uploadImage(hw.id, file);
                          e.target.value = "";
                        }}
                      />
                      {/* Show existing or newly uploaded image */}
                      {(imageUrls[hw.id] || hw.image_url) && (
                        <div className="mb-[10px] relative inline-block">
                          <img
                            src={imageUrls[hw.id] || hw.image_url}
                            alt="Скриншот"
                            className="rounded-[8px] object-cover block"
                            style={{ maxHeight: 72, maxWidth: "100%", width: "auto" }}
                          />
                          {imageUrls[hw.id] && (
                            <button
                              onClick={() => setImageUrls(prev => { const next = { ...prev }; delete next[hw.id]; return next; })}
                              className="absolute top-[6px] right-[6px] bg-[rgba(0,0,0,0.7)] rounded-full w-[22px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[rgba(0,0,0,0.9)] border-none"
                              title="Удалить скриншот"
                            >
                              <span className={`${TEXT_BODY} text-white text-[12px]`}>✕</span>
                            </button>
                          )}
                        </div>
                      )}
                      <button
                        onClick={() => fileInputRefs.current[hw.id]?.click()}
                        className="flex items-center gap-[6px] px-[10px] py-[6px] rounded-[8px] mb-[10px] cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px dashed rgba(244,245,252,0.2)" }}
                        disabled={uploading[hw.id]}
                      >
                        <span className={`${TEXT_BODY} text-[rgba(244,245,252,0.6)] text-[12px]`}>
                          {uploading[hw.id] ? "Загрузка..." : "📎 Прикрепить скриншот"}
                        </span>
                      </button>
                      <div className="flex gap-[8px]">
                        {hw.status !== "reviewed" && (
                          <button
                            onClick={() => updateStatus(hw.id, "reviewed")}
                            className="px-[12px] py-[6px] rounded-[8px] bg-[#00D043] hover:bg-[#00b839] cursor-pointer transition-colors"
                            title="Одобрить"
                          >
                            <span className={`${TEXT_BODY} text-white text-[12px]`}>✓ Одобрить</span>
                          </button>
                        )}
                        {hw.status !== "rejected" && (
                          <button
                            onClick={() => updateStatus(hw.id, "rejected")}
                            className="px-[12px] py-[6px] rounded-[8px] bg-[#FF5D39] hover:bg-[#e54d2a] cursor-pointer transition-colors"
                            title="Отклонить"
                          >
                            <span className={`${TEXT_BODY} text-white text-[12px]`}>✕ Вернуть</span>
                          </button>
                        )}
                        {hw.status !== "pending" && (
                          <button
                            onClick={() => updateStatus(hw.id, "pending")}
                            className="px-[12px] py-[6px] rounded-[8px] bg-[#FFA500] hover:bg-[#e69500] cursor-pointer transition-colors"
                            title="Вернуть на проверку"
                          >
                            <span className={`${TEXT_BODY} text-white text-[12px]`}>⟲</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}