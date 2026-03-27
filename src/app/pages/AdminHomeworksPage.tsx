import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

const ADMIN_PIN = "uxeo2024";

const TEXT_TITLE = "font-['Roboto_Condensed:Medium',sans-serif] font-medium";
const TEXT_BODY = "font-['Roboto_Condensed:Regular',sans-serif] font-normal";

type ReviewStatus = "pending" | "reviewed" | "rejected";
type AdminTab = "homeworks" | "challenges";
type ColId = "user" | "title" | "link" | "status" | "date" | "actions";

interface AdminSubmission {
  id: string;
  user_id: string;
  title: string;
  figma_link: string;
  status: ReviewStatus;
  comment: string;
  image_url?: string;
  created_at: string;
}

const ALL_COLUMNS: { id: ColId; label: string }[] = [
  { id: "user", label: "Пользователь" },
  { id: "title", label: "Задание" },
  { id: "link", label: "Ссылка Figma" },
  { id: "status", label: "Статус" },
  { id: "date", label: "Дата" },
  { id: "actions", label: "Действия" },
];

const STATUS_CONFIG = {
  pending: { label: "На проверке", color: "#FFA500" },
  reviewed: { label: "Готово", color: "#00D043" },
  rejected: { label: "Переделать", color: "#FF5D39" },
};

function StatusBadge({ status }: { status: ReviewStatus }) {
  const { label, color } = STATUS_CONFIG[status];
  return (
    <div
      className="px-[12px] py-[6px] rounded-full inline-flex items-center justify-center"
      style={{ backgroundColor: `${color}20`, border: `1px solid ${color}` }}
    >
      <span className={`${TEXT_BODY} text-[13px]`} style={{ color }}>{label}</span>
    </div>
  );
}

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-[16px] py-[10px] rounded-[12px] transition-colors cursor-pointer"
      style={{
        background: active ? "#404d52" : "#323d41",
        border: active ? "1px solid rgba(244,245,252,0.15)" : "1px solid transparent",
      }}
    >
      <span className={`${TEXT_TITLE} text-[14px]`} style={{ color: active ? "#f4f5fc" : "#798589" }}>{label}</span>
    </button>
  );
}

export default function AdminHomeworksPage() {
  const navigate = useNavigate();
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("admin-authed") === "1");
  const [activeTab, setActiveTab] = useState<AdminTab>("homeworks");
  const [homeworks, setHomeworks] = useState<AdminSubmission[]>([]);
  const [challenges, setChallenges] = useState<AdminSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<Record<string, string>>({});
  const [imageUrls, setImageUrls] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<Record<string, boolean>>({});
  const [colOrder, setColOrder] = useState<ColId[]>(ALL_COLUMNS.map((c) => c.id));
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const dragCol = useRef<ColId | null>(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const sortByDateDesc = (items: AdminSubmission[]) =>
    [...items].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const [homeworksRes, challengesRes] = await Promise.all([
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/homework/all`, {
          headers: { Authorization: `Bearer ${publicAnonKey}` },
        }),
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/challenge/all`, {
          headers: { Authorization: `Bearer ${publicAnonKey}` },
        }),
      ]);

      const homeworksData = await homeworksRes.json().catch(() => ({}));
      const challengesData = await challengesRes.json().catch(() => ({}));

      if (!homeworksRes.ok) throw new Error(homeworksData.error || "Failed to fetch homeworks");
      if (!challengesRes.ok) throw new Error(challengesData.error || "Failed to fetch challenges");

      setHomeworks(sortByDateDesc((homeworksData.homeworks || []).map((item: any) => ({
        id: String(item.id),
        user_id: item.user_id,
        title: item.lesson_name,
        figma_link: item.figma_link,
        status: item.status,
        comment: item.comment ?? "",
        image_url: item.image_url ?? "",
        created_at: item.created_at,
      }))));

      setChallenges(sortByDateDesc((challengesData.challenges || []).map((item: any) => ({
        id: String(item.id),
        user_id: item.user_id,
        title: item.challenge_name,
        figma_link: item.figma_link,
        status: item.status,
        comment: item.comment ?? "",
        image_url: item.image_url ?? "",
        created_at: item.created_at,
      }))));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authed) fetchAll();
  }, [authed]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentItems = activeTab === "homeworks" ? homeworks : challenges;
  const currentLabel = activeTab === "homeworks" ? "Домашние работы" : "Вызовы";
  const currentEmptyLabel = activeTab === "homeworks" ? "Пока нет отправленных домашних работ" : "Пока нет отправленных вызовов";
  const storageBucket = activeTab === "homeworks" ? "homeworks" : "challenge-screenshots";
  const statusEndpointBase = activeTab === "homeworks" ? "homework" : "challenge";

  const setCurrentItems = (updater: (prev: AdminSubmission[]) => AdminSubmission[]) => {
    if (activeTab === "homeworks") {
      setHomeworks(updater);
    } else {
      setChallenges(updater);
    }
  };

  const uploadImage = async (itemId: string, file: File) => {
    setUploading((p) => ({ ...p, [itemId]: true }));
    try {
      const ext = file.name.split(".").pop() ?? "jpg";
      const path = `screenshots/${itemId}/${Date.now()}.${ext}`;
      const res = await fetch(
        `https://${projectId}.supabase.co/storage/v1/object/${storageBucket}/${path}`,
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
        setImageUrls((p) => ({
          ...p,
          [itemId]: `https://${projectId}.supabase.co/storage/v1/object/public/${storageBucket}/${path}`,
        }));
      } else {
        const reader = new FileReader();
        reader.onload = (e) => setImageUrls((p) => ({ ...p, [itemId]: e.target?.result as string }));
        reader.readAsDataURL(file);
      }
    } catch {
      const reader = new FileReader();
      reader.onload = (e) => setImageUrls((p) => ({ ...p, [itemId]: e.target?.result as string }));
      reader.readAsDataURL(file);
    } finally {
      setUploading((p) => ({ ...p, [itemId]: false }));
    }
  };

  const deleteSubmission = async (itemId: string) => {
    if (!confirm("Удалить эту работу? Это действие нельзя отменить.")) return;
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/${statusEndpointBase}/${itemId}`,
        { method: "DELETE", headers: { Authorization: `Bearer ${publicAnonKey}` } }
      );
      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.error || "Failed");
      }
      setCurrentItems((prev) => prev.filter((item) => item.id !== itemId));
    } catch (err) {
      alert(`Ошибка удаления: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  const updateStatus = async (itemId: string, newStatus: ReviewStatus) => {
    const existing = currentItems.find((item) => item.id === itemId);
    const comment = comments[itemId] !== undefined ? comments[itemId] : existing?.comment ?? "";
    const image_url = imageUrls[itemId] ?? existing?.image_url ?? "";

    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/${statusEndpointBase}/${itemId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ status: newStatus, comment, image_url }),
        }
      );
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(payload.error || "Failed");

      setCurrentItems((prev) =>
        prev.map((item) =>
          item.id === itemId ? { ...item, status: newStatus, comment, image_url } : item
        )
      );
      setComments((prev) => {
        const next = { ...prev };
        delete next[itemId];
        return next;
      });
      setImageUrls((prev) => {
        const next = { ...prev };
        delete next[itemId];
        return next;
      });
    } catch (err) {
      alert(`Ошибка: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  const onDragStart = (colId: ColId) => {
    dragCol.current = colId;
  };

  const onDragOver = (e: React.DragEvent, colId: ColId) => {
    e.preventDefault();
    if (!dragCol.current || dragCol.current === colId) return;
    setColOrder((prev) => {
      const next = [...prev];
      const from = next.indexOf(dragCol.current!);
      const to = next.indexOf(colId);
      next.splice(from, 1);
      next.splice(to, 0, dragCol.current!);
      return next;
    });
  };

  const onDragEnd = () => {
    dragCol.current = null;
  };

  const renderCell = (colId: ColId, item: AdminSubmission) => {
    switch (colId) {
      case "user":
        return <td key={colId} className={`${TEXT_BODY} text-[#f4f5fc] text-[13px] px-[16px] py-[16px] max-w-[120px] break-all align-top`}>{item.user_id}</td>;
      case "title":
        return <td key={colId} className={`${TEXT_BODY} text-[#f4f5fc] text-[13px] px-[16px] py-[16px] align-top`}>{item.title}</td>;
      case "link":
        return (
          <td key={colId} className="px-[16px] py-[16px] align-top">
            <a href={item.figma_link} target="_blank" rel="noopener noreferrer" className={`${TEXT_BODY} text-[#5eb3ff] text-[13px] hover:underline`}>
              Открыть
            </a>
          </td>
        );
      case "status":
        return <td key={colId} className="px-[16px] py-[16px] align-top"><StatusBadge status={item.status} /></td>;
      case "date":
        return (
          <td key={colId} className={`${TEXT_BODY} text-[rgba(244,245,252,0.6)] text-[12px] px-[16px] py-[16px] align-top whitespace-nowrap`}>
            {new Date(item.created_at).toLocaleDateString("ru-RU", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </td>
        );
      case "actions":
        return (
          <td key={colId} className="px-[16px] py-[16px] min-w-[240px] align-top">
            <textarea
              value={comments[item.id] !== undefined ? comments[item.id] : item.comment ?? ""}
              onChange={(e) => setComments((p) => ({ ...p, [item.id]: e.target.value }))}
              placeholder="Комментарий для студента..."
              rows={2}
              className={`${TEXT_BODY} w-full text-[12px] text-[#f4f5fc] bg-[rgba(255,255,255,0.06)] border border-[rgba(244,245,252,0.12)] rounded-[8px] px-[10px] py-[8px] resize-none outline-none focus:border-[rgba(244,245,252,0.3)] mb-[8px]`}
              style={{ color: "rgba(244,245,252,0.8)", caretColor: "rgba(244,245,252,0.8)" }}
            />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={(el) => { fileInputRefs.current[item.id] = el; }}
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (f) await uploadImage(item.id, f);
                e.target.value = "";
              }}
            />
            {(imageUrls[item.id] || item.image_url) && (
              <div className="mb-[8px] relative inline-block">
                <img
                  src={imageUrls[item.id] || item.image_url}
                  alt="Скриншот"
                  className="rounded-[8px] object-cover block"
                  style={{ maxHeight: 64, maxWidth: "100%", width: "auto" }}
                />
                {imageUrls[item.id] && (
                  <button
                    onClick={() => setImageUrls((p) => {
                      const next = { ...p };
                      delete next[item.id];
                      return next;
                    })}
                    className="absolute top-[4px] right-[4px] bg-[rgba(0,0,0,0.7)] rounded-full w-[18px] h-[18px] flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-white text-[10px]">✕</span>
                  </button>
                )}
              </div>
            )}
            <button
              onClick={() => fileInputRefs.current[item.id]?.click()}
              className="flex items-center gap-[6px] px-[10px] py-[5px] rounded-[8px] mb-[8px] cursor-pointer w-full"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px dashed rgba(244,245,252,0.2)" }}
              disabled={uploading[item.id]}
            >
              <span className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[11px]`}>
                {uploading[item.id] ? "Загрузка..." : "📎 Прикрепить скриншот"}
              </span>
            </button>
            <div className="flex flex-wrap gap-[6px]">
              {item.status !== "reviewed" && (
                <button onClick={() => updateStatus(item.id, "reviewed")} className="px-[10px] py-[5px] rounded-[7px] bg-[#00D043] hover:bg-[#00b839] cursor-pointer transition-colors">
                  <span className={`${TEXT_BODY} text-white text-[11px]`}>✓ Одобрить</span>
                </button>
              )}
              {item.status !== "rejected" && (
                <button onClick={() => updateStatus(item.id, "rejected")} className="px-[10px] py-[5px] rounded-[7px] bg-[#FF5D39] hover:bg-[#e54d2a] cursor-pointer transition-colors">
                  <span className={`${TEXT_BODY} text-white text-[11px]`}>✕ Вернуть</span>
                </button>
              )}
              {item.status !== "pending" && (
                <button onClick={() => updateStatus(item.id, "pending")} className="px-[10px] py-[5px] rounded-[7px] bg-[#FFA500] hover:bg-[#e69500] cursor-pointer transition-colors">
                  <span className={`${TEXT_BODY} text-white text-[11px]`}>⟲</span>
                </button>
              )}
              <button
                onClick={() => deleteSubmission(item.id)}
                className="px-[10px] py-[5px] rounded-[7px] cursor-pointer transition-colors ml-auto"
                style={{ background: "rgba(255,93,57,0.12)", border: "1px solid rgba(255,93,57,0.3)" }}
              >
                <span className={`${TEXT_BODY} text-[#FF5D39] text-[11px]`}>🗑 Удалить</span>
              </button>
            </div>
          </td>
        );
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, background: "#343E42", borderRadius: 20, padding: "40px 48px", minWidth: 320 }}>
          <p className={`${TEXT_TITLE} text-[#f4f5fc] text-[24px]`}>Админ-панель</p>
          <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[14px]`}>Введите PIN-код</p>
          <input
            type="password"
            value={pinInput}
            onChange={(e) => { setPinInput(e.target.value); setPinError(false); }}
            onKeyDown={(e) => {
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
              width: "100%",
              height: 48,
              borderRadius: 12,
              border: pinError ? "1px solid #FF5D39" : "1px solid rgba(244,245,252,0.15)",
              background: "rgba(255,255,255,0.06)",
              color: "#f4f5fc",
              fontSize: 18,
              textAlign: "center",
              letterSpacing: "0.2em",
              outline: "none",
              padding: "0 16px",
              fontFamily: "Roboto Condensed, sans-serif",
            }}
          />
          {pinError && <p className={`${TEXT_BODY} text-[#FF5D39] text-[13px]`}>Неверный PIN-код</p>}
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
              width: "100%",
              height: 48,
              borderRadius: 12,
              border: "none",
              background: "linear-gradient(135deg, #FF6B21, #994014)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
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
        <button onClick={fetchAll} className="px-[32px] py-[16px] rounded-[15px] bg-[#ff6b21] cursor-pointer">
          <span className={`${TEXT_BODY} text-[#f4f5fc] text-[18px]`}>Повторить</span>
        </button>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto" style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)", padding: isMobile ? "20px 16px" : "40px" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className={`flex ${isMobile ? "flex-col gap-[12px]" : "items-center justify-between"} mb-[24px]`}>
          <div className="flex items-center gap-[16px] flex-wrap">
            <button onClick={() => navigate("/")} className="cursor-pointer hover:opacity-70 transition-opacity">
              <span className={`${TEXT_BODY} text-[#f4f5fc] text-[16px]`}>← Назад</span>
            </button>
            <h1 className={`${TEXT_TITLE} text-[#f4f5fc] ${isMobile ? "text-[20px]" : "text-[28px]"}`}>Админка проверок</h1>
          </div>
          <button onClick={fetchAll} className="px-[20px] py-[10px] rounded-[12px] bg-[#404d52] cursor-pointer hover:bg-[#4d5d64] transition-colors self-start">
            <span className={`${TEXT_BODY} text-[#f4f5fc] text-[14px]`}>Обновить</span>
          </button>
        </div>

        <div className="flex gap-[10px] mb-[20px]">
          <TabButton active={activeTab === "homeworks"} label="Домашки" onClick={() => setActiveTab("homeworks")} />
          <TabButton active={activeTab === "challenges"} label="Вызовы" onClick={() => setActiveTab("challenges")} />
        </div>

        <div className={`grid gap-[12px] mb-[24px] ${isMobile ? "grid-cols-2" : "grid-cols-4"}`}>
          {[
            { label: "Всего", value: currentItems.length, color: "#f4f5fc" },
            { label: "На проверке", value: currentItems.filter((item) => item.status === "pending").length, color: "#FFA500" },
            { label: "Проверено", value: currentItems.filter((item) => item.status === "reviewed").length, color: "#00D043" },
            { label: "Отклонено", value: currentItems.filter((item) => item.status === "rejected").length, color: "#FF5D39" },
          ].map((s) => (
            <div key={s.label} className="bg-[#404d52] rounded-[14px] px-[20px] py-[14px]">
              <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.6)] text-[12px] mb-[6px]`}>{s.label}</p>
              <p className={`${TEXT_TITLE} text-[24px]`} style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        {currentItems.length === 0 ? (
          <div className="bg-[#404d52] rounded-[15px] p-[40px] text-center">
            <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[18px]`}>{currentEmptyLabel}</p>
          </div>
        ) : isMobile ? (
          <div className="flex flex-col gap-[12px]">
            {currentItems.map((item) => (
              <div key={item.id} className="bg-[#404d52] rounded-[15px] p-[16px] flex flex-col gap-[12px]">
                <div className="flex items-start justify-between gap-[8px]">
                  <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                    <p className={`${TEXT_TITLE} text-[#f4f5fc] text-[15px] truncate`}>{item.title}</p>
                    <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.4)] text-[11px] truncate`}>{item.user_id}</p>
                  </div>
                  <StatusBadge status={item.status} />
                </div>
                <div className="flex items-center justify-between">
                  <a href={item.figma_link} target="_blank" rel="noopener noreferrer" className={`${TEXT_BODY} text-[#5eb3ff] text-[13px] hover:underline`}>Открыть Figma →</a>
                  <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.4)] text-[11px]`}>
                    {new Date(item.created_at).toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" })}
                  </p>
                </div>
                <textarea
                  value={comments[item.id] !== undefined ? comments[item.id] : item.comment ?? ""}
                  onChange={(e) => setComments((p) => ({ ...p, [item.id]: e.target.value }))}
                  placeholder="Комментарий..."
                  rows={2}
                  className={`${TEXT_BODY} w-full text-[13px] text-[#f4f5fc] bg-[rgba(255,255,255,0.06)] border border-[rgba(244,245,252,0.12)] rounded-[8px] px-[10px] py-[8px] resize-none outline-none`}
                />
                {(imageUrls[item.id] || item.image_url) && (
                  <div className="relative inline-block">
                    <img src={imageUrls[item.id] || item.image_url} alt="" className="rounded-[8px] object-cover" style={{ maxHeight: 80, width: "auto" }} />
                    {imageUrls[item.id] && (
                      <button
                        onClick={() => setImageUrls((p) => {
                          const next = { ...p };
                          delete next[item.id];
                          return next;
                        })}
                        className="absolute top-[4px] right-[4px] bg-[rgba(0,0,0,0.7)] rounded-full w-[18px] h-[18px] flex items-center justify-center cursor-pointer"
                      >
                        <span className="text-white text-[10px]">✕</span>
                      </button>
                    )}
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={(el) => { fileInputRefs.current[item.id] = el; }}
                  onChange={async (e) => {
                    const f = e.target.files?.[0];
                    if (f) await uploadImage(item.id, f);
                    e.target.value = "";
                  }}
                />
                <div className="flex flex-wrap gap-[6px]">
                  <button
                    onClick={() => fileInputRefs.current[item.id]?.click()}
                    className="px-[10px] py-[5px] rounded-[7px] cursor-pointer flex-1"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px dashed rgba(244,245,252,0.2)" }}
                    disabled={uploading[item.id]}
                  >
                    <span className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[11px]`}>{uploading[item.id] ? "Загрузка..." : "📎 Скриншот"}</span>
                  </button>
                  {item.status !== "reviewed" && <button onClick={() => updateStatus(item.id, "reviewed")} className="px-[10px] py-[5px] rounded-[7px] bg-[#00D043] cursor-pointer"><span className={`${TEXT_BODY} text-white text-[11px]`}>✓</span></button>}
                  {item.status !== "rejected" && <button onClick={() => updateStatus(item.id, "rejected")} className="px-[10px] py-[5px] rounded-[7px] bg-[#FF5D39] cursor-pointer"><span className={`${TEXT_BODY} text-white text-[11px]`}>✕</span></button>}
                  {item.status !== "pending" && <button onClick={() => updateStatus(item.id, "pending")} className="px-[10px] py-[5px] rounded-[7px] bg-[#FFA500] cursor-pointer"><span className={`${TEXT_BODY} text-white text-[11px]`}>⟲</span></button>}
                  <button onClick={() => deleteSubmission(item.id)} className="px-[10px] py-[5px] rounded-[7px] cursor-pointer" style={{ background: "rgba(255,93,57,0.12)", border: "1px solid rgba(255,93,57,0.3)" }}>
                    <span className={`${TEXT_BODY} text-[#FF5D39] text-[11px]`}>🗑</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#404d52] rounded-[15px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#38444a]">
                    {colOrder.map((colId) => {
                      const col = ALL_COLUMNS.find((c) => c.id === colId)!;
                      return (
                        <th
                          key={colId}
                          draggable
                          onDragStart={() => onDragStart(colId)}
                          onDragOver={(e) => onDragOver(e, colId)}
                          onDragEnd={onDragEnd}
                          className={`${TEXT_TITLE} text-[#f4f5fc] text-[14px] text-left px-[16px] py-[14px] select-none cursor-grab active:cursor-grabbing`}
                          style={{ whiteSpace: "nowrap" }}
                          title="Перетащите для смены порядка"
                        >
                          <span className="flex items-center gap-[6px]">
                            <span className="text-[rgba(244,245,252,0.3)] text-[10px]">⠿</span>
                            {col.label}
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr key={item.id} className="border-t border-[rgba(244,245,252,0.08)] hover:bg-[rgba(255,255,255,0.02)]">
                      {colOrder.map((colId) => renderCell(colId, item))}
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
