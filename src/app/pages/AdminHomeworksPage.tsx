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

const STATUS_CONFIG = {
  pending:  { label: "На проверке", color: "#FFA500" },
  reviewed: { label: "Готово",       color: "#00D043" },
  rejected: { label: "Переделать",   color: "#FF5D39" },
};

function StatusBadge({ status }: { status: Homework["status"] }) {
  const { label, color } = STATUS_CONFIG[status];
  return (
    <div className="px-[12px] py-[6px] rounded-full inline-flex items-center justify-center"
      style={{ backgroundColor: color + "20", border: `1px solid ${color}` }}>
      <span className={`${TEXT_BODY} text-[13px]`} style={{ color }}>{label}</span>
    </div>
  );
}

// ── Column definitions ─────────────────────────────────────────────────────────

type ColId = "user" | "lesson" | "link" | "status" | "date" | "actions";

const ALL_COLUMNS: { id: ColId; label: string }[] = [
  { id: "user",    label: "Пользователь" },
  { id: "lesson",  label: "Урок" },
  { id: "link",    label: "Ссылка Figma" },
  { id: "status",  label: "Статус" },
  { id: "date",    label: "Дата" },
  { id: "actions", label: "Действия" },
];

export default function AdminHomeworksPage() {
  const navigate = useNavigate();
  const [pinInput, setPinInput]   = useState("");
  const [pinError, setPinError]   = useState(false);
  const [authed, setAuthed]       = useState(() => sessionStorage.getItem("admin-authed") === "1");
  const [homeworks, setHomeworks] = useState<Homework[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);
  const [comments, setComments]   = useState<Record<string, string>>({});
  const [imageUrls, setImageUrls] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<Record<string, boolean>>({});
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Column order state
  const [colOrder, setColOrder] = useState<ColId[]>(ALL_COLUMNS.map(c => c.id));
  const dragCol = useRef<ColId | null>(null);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const fetchHomeworks = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/homework/all`,
        { headers: { Authorization: `Bearer ${publicAnonKey}` } }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch");
      setHomeworks((data.homeworks || []).sort(
        (a: Homework, b: Homework) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { if (authed) fetchHomeworks(); }, [authed]); // eslint-disable-line

  const uploadImage = async (hwId: string, file: File) => {
    setUploading(p => ({ ...p, [hwId]: true }));
    try {
      const ext  = file.name.split(".").pop() ?? "jpg";
      const path = `screenshots/${hwId}/${Date.now()}.${ext}`;
      const res  = await fetch(
        `https://${projectId}.supabase.co/storage/v1/object/homeworks/${path}`,
        { method: "POST", headers: { Authorization: `Bearer ${publicAnonKey}`, "Content-Type": file.type, "x-upsert": "true" }, body: file }
      );
      if (res.ok) {
        setImageUrls(p => ({ ...p, [hwId]: `https://${projectId}.supabase.co/storage/v1/object/public/homeworks/${path}` }));
      } else {
        const reader = new FileReader();
        reader.onload = e => setImageUrls(p => ({ ...p, [hwId]: e.target?.result as string }));
        reader.readAsDataURL(file);
      }
    } catch {
      const reader = new FileReader();
      reader.onload = e => setImageUrls(p => ({ ...p, [hwId]: e.target?.result as string }));
      reader.readAsDataURL(file);
    } finally {
      setUploading(p => ({ ...p, [hwId]: false }));
    }
  };

  const deleteHomework = async (hwId: string) => {
    if (!confirm("Удалить эту работу? Это действие нельзя отменить.")) return;
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/homework/${hwId}`,
        { method: "DELETE", headers: { Authorization: `Bearer ${publicAnonKey}` } }
      );
      if (!res.ok) {
        let msg = "Failed";
        try { const d = await res.json(); msg = d.error || msg; }
        catch { msg = await res.text().catch(() => msg); }
        throw new Error(msg);
      }
      setHomeworks(p => p.filter(h => h.id !== hwId));
    } catch (err) {
      alert(`Ошибка удаления: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  const updateStatus = async (hwId: string, newStatus: Homework["status"]) => {
    const existing = homeworks.find(h => h.id === hwId);
    const comment  = comments[hwId] !== undefined ? comments[hwId] : (existing?.comment ?? "");
    const image_url = imageUrls[hwId] ?? existing?.image_url ?? "";
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/homework/${hwId}/status`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${publicAnonKey}` },
          body: JSON.stringify({ status: newStatus, comment, image_url }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setHomeworks(p => p.map(h => h.id === hwId ? { ...h, status: newStatus, comment, image_url } : h));
      setComments(p  => { const n = { ...p }; delete n[hwId]; return n; });
      setImageUrls(p => { const n = { ...p }; delete n[hwId]; return n; });
    } catch (err) {
      alert(`Ошибка: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  // ── Column drag handlers ───────────────────────────────────────────────────
  const onDragStart = (colId: ColId) => { dragCol.current = colId; };
  const onDragOver  = (e: React.DragEvent, colId: ColId) => {
    e.preventDefault();
    if (!dragCol.current || dragCol.current === colId) return;
    setColOrder(prev => {
      const next = [...prev];
      const from = next.indexOf(dragCol.current!);
      const to   = next.indexOf(colId);
      next.splice(from, 1);
      next.splice(to, 0, dragCol.current!);
      return next;
    });
  };
  const onDragEnd = () => { dragCol.current = null; };

  // ── Cell renderer ──────────────────────────────────────────────────────────
  const renderCell = (colId: ColId, hw: Homework) => {
    switch (colId) {
      case "user":
        return <td key={colId} className={`${TEXT_BODY} text-[#f4f5fc] text-[13px] px-[16px] py-[16px] max-w-[120px] break-all align-top`}>{hw.user_id}</td>;
      case "lesson":
        return <td key={colId} className={`${TEXT_BODY} text-[#f4f5fc] text-[13px] px-[16px] py-[16px] align-top`}>{hw.lesson_name}</td>;
      case "link":
        return (
          <td key={colId} className="px-[16px] py-[16px] align-top">
            <a href={hw.figma_link} target="_blank" rel="noopener noreferrer"
              className={`${TEXT_BODY} text-[#5eb3ff] text-[13px] hover:underline`}>Открыть</a>
          </td>
        );
      case "status":
        return <td key={colId} className="px-[16px] py-[16px] align-top"><StatusBadge status={hw.status} /></td>;
      case "date":
        return (
          <td key={colId} className={`${TEXT_BODY} text-[rgba(244,245,252,0.6)] text-[12px] px-[16px] py-[16px] align-top whitespace-nowrap`}>
            {new Date(hw.created_at).toLocaleDateString("ru-RU", { day:"2-digit", month:"2-digit", year:"numeric", hour:"2-digit", minute:"2-digit" })}
          </td>
        );
      case "actions":
        return (
          <td key={colId} className="px-[16px] py-[16px] min-w-[240px] align-top">
            <textarea
              value={comments[hw.id] !== undefined ? comments[hw.id] : (hw.comment ?? "")}
              onChange={e => setComments(p => ({ ...p, [hw.id]: e.target.value }))}
              placeholder="Комментарий для студента..."
              rows={2}
              className={`${TEXT_BODY} w-full text-[12px] text-[#f4f5fc] bg-[rgba(255,255,255,0.06)] border border-[rgba(244,245,252,0.12)] rounded-[8px] px-[10px] py-[8px] resize-none outline-none focus:border-[rgba(244,245,252,0.3)] mb-[8px]`}
              style={{ color: "rgba(244,245,252,0.8)", caretColor: "rgba(244,245,252,0.8)" }}
            />
            <input type="file" accept="image/*" style={{ display: "none" }}
              ref={el => { fileInputRefs.current[hw.id] = el; }}
              onChange={async e => { const f = e.target.files?.[0]; if (f) await uploadImage(hw.id, f); e.target.value = ""; }}
            />
            {(imageUrls[hw.id] || hw.image_url) && (
              <div className="mb-[8px] relative inline-block">
                <img src={imageUrls[hw.id] || hw.image_url} alt="Скриншот"
                  className="rounded-[8px] object-cover block" style={{ maxHeight: 64, maxWidth: "100%", width: "auto" }} />
                {imageUrls[hw.id] && (
                  <button onClick={() => setImageUrls(p => { const n = { ...p }; delete n[hw.id]; return n; })}
                    className="absolute top-[4px] right-[4px] bg-[rgba(0,0,0,0.7)] rounded-full w-[18px] h-[18px] flex items-center justify-center cursor-pointer">
                    <span className="text-white text-[10px]">✕</span>
                  </button>
                )}
              </div>
            )}
            <button onClick={() => fileInputRefs.current[hw.id]?.click()}
              className="flex items-center gap-[6px] px-[10px] py-[5px] rounded-[8px] mb-[8px] cursor-pointer w-full"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px dashed rgba(244,245,252,0.2)" }}
              disabled={uploading[hw.id]}>
              <span className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[11px]`}>
                {uploading[hw.id] ? "Загрузка..." : "📎 Прикрепить скриншот"}
              </span>
            </button>
            <div className="flex flex-wrap gap-[6px]">
              {hw.status !== "reviewed" && (
                <button onClick={() => updateStatus(hw.id, "reviewed")}
                  className="px-[10px] py-[5px] rounded-[7px] bg-[#00D043] hover:bg-[#00b839] cursor-pointer transition-colors">
                  <span className={`${TEXT_BODY} text-white text-[11px]`}>✓ Одобрить</span>
                </button>
              )}
              {hw.status !== "rejected" && (
                <button onClick={() => updateStatus(hw.id, "rejected")}
                  className="px-[10px] py-[5px] rounded-[7px] bg-[#FF5D39] hover:bg-[#e54d2a] cursor-pointer transition-colors">
                  <span className={`${TEXT_BODY} text-white text-[11px]`}>✕ Вернуть</span>
                </button>
              )}
              {hw.status !== "pending" && (
                <button onClick={() => updateStatus(hw.id, "pending")}
                  className="px-[10px] py-[5px] rounded-[7px] bg-[#FFA500] hover:bg-[#e69500] cursor-pointer transition-colors">
                  <span className={`${TEXT_BODY} text-white text-[11px]`}>⟲</span>
                </button>
              )}
              <button onClick={() => deleteHomework(hw.id)}
                className="px-[10px] py-[5px] rounded-[7px] cursor-pointer transition-colors ml-auto"
                style={{ background: "rgba(255,93,57,0.12)", border: "1px solid rgba(255,93,57,0.3)" }}>
                <span className={`${TEXT_BODY} text-[#FF5D39] text-[11px]`}>🗑 Удалить</span>
              </button>
            </div>
          </td>
        );
    }
  };

  // ── PIN gate ──────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:24, background:"#343E42", borderRadius:20, padding:"40px 48px", minWidth:320 }}>
          <p className={`${TEXT_TITLE} text-[#f4f5fc] text-[24px]`}>Админ-панель</p>
          <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[14px]`}>Введите PIN-код</p>
          <input type="password" value={pinInput}
            onChange={e => { setPinInput(e.target.value); setPinError(false); }}
            onKeyDown={e => { if (e.key === "Enter") { if (pinInput === ADMIN_PIN) { sessionStorage.setItem("admin-authed","1"); setAuthed(true); } else setPinError(true); } }}
            placeholder="••••••••" autoFocus
            style={{ width:"100%", height:48, borderRadius:12, border: pinError ? "1px solid #FF5D39" : "1px solid rgba(244,245,252,0.15)", background:"rgba(255,255,255,0.06)", color:"#f4f5fc", fontSize:18, textAlign:"center", letterSpacing:"0.2em", outline:"none", padding:"0 16px", fontFamily:"Roboto Condensed, sans-serif" }}
          />
          {pinError && <p className={`${TEXT_BODY} text-[#FF5D39] text-[13px]`}>Неверный PIN-код</p>}
          <button onClick={() => { if (pinInput === ADMIN_PIN) { sessionStorage.setItem("admin-authed","1"); setAuthed(true); } else setPinError(true); }}
            style={{ width:"100%", height:48, borderRadius:12, border:"none", background:"linear-gradient(135deg, #FF6B21, #994014)", color:"#fff", fontSize:16, fontWeight:700, cursor:"pointer", fontFamily:"Roboto Condensed, sans-serif" }}>
            Войти
          </button>
        </div>
      </div>
    );
  }

  if (loading) return (
    <div className="h-full flex items-center justify-center" style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}>
      <p className={`${TEXT_BODY} text-[#f4f5fc] text-[24px]`}>Загрузка...</p>
    </div>
  );

  if (error) return (
    <div className="h-full flex flex-col items-center justify-center gap-[20px]" style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)" }}>
      <p className={`${TEXT_BODY} text-[#ff5d39] text-[24px]`}>Ошибка: {error}</p>
      <button onClick={fetchHomeworks} className="px-[32px] py-[16px] rounded-[15px] bg-[#ff6b21] cursor-pointer">
        <span className={`${TEXT_BODY} text-[#f4f5fc] text-[18px]`}>Повторить</span>
      </button>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto" style={{ background: "linear-gradient(165.05deg, #282F33 14.367%, rgb(46,57,62) 147.74%)", padding: isMobile ? "20px 16px" : "40px" }}>
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className={`flex ${isMobile ? "flex-col gap-[12px]" : "items-center justify-between"} mb-[24px]`}>
          <div className="flex items-center gap-[16px]">
            <button onClick={() => navigate("/")} className="cursor-pointer hover:opacity-70 transition-opacity">
              <span className={`${TEXT_BODY} text-[#f4f5fc] text-[16px]`}>← Назад</span>
            </button>
            <h1 className={`${TEXT_TITLE} text-[#f4f5fc] ${isMobile ? "text-[20px]" : "text-[28px]"}`}>Домашние работы</h1>
          </div>
          <button onClick={fetchHomeworks} className="px-[20px] py-[10px] rounded-[12px] bg-[#404d52] cursor-pointer hover:bg-[#4d5d64] transition-colors self-start">
            <span className={`${TEXT_BODY} text-[#f4f5fc] text-[14px]`}>Обновить</span>
          </button>
        </div>

        {/* Stats */}
        <div className={`grid gap-[12px] mb-[24px] ${isMobile ? "grid-cols-2" : "grid-cols-4"}`}>
          {[
            { label: "Всего", value: homeworks.length, color: "#f4f5fc" },
            { label: "На проверке", value: homeworks.filter(h => h.status === "pending").length, color: "#FFA500" },
            { label: "Проверено", value: homeworks.filter(h => h.status === "reviewed").length, color: "#00D043" },
            { label: "Отклонено", value: homeworks.filter(h => h.status === "rejected").length, color: "#FF5D39" },
          ].map(s => (
            <div key={s.label} className="bg-[#404d52] rounded-[14px] px-[20px] py-[14px]">
              <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.6)] text-[12px] mb-[6px]`}>{s.label}</p>
              <p className={`${TEXT_TITLE} text-[24px]`} style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        {homeworks.length === 0 ? (
          <div className="bg-[#404d52] rounded-[15px] p-[40px] text-center">
            <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[18px]`}>Пока нет отправленных работ</p>
          </div>
        ) : isMobile ? (
          /* ── Mobile: cards ── */
          <div className="flex flex-col gap-[12px]">
            {homeworks.map(hw => (
              <div key={hw.id} className="bg-[#404d52] rounded-[15px] p-[16px] flex flex-col gap-[12px]">
                <div className="flex items-start justify-between gap-[8px]">
                  <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                    <p className={`${TEXT_TITLE} text-[#f4f5fc] text-[15px] truncate`}>{hw.lesson_name}</p>
                    <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.4)] text-[11px] truncate`}>{hw.user_id}</p>
                  </div>
                  <StatusBadge status={hw.status} />
                </div>
                <div className="flex items-center justify-between">
                  <a href={hw.figma_link} target="_blank" rel="noopener noreferrer"
                    className={`${TEXT_BODY} text-[#5eb3ff] text-[13px] hover:underline`}>Открыть Figma →</a>
                  <p className={`${TEXT_BODY} text-[rgba(244,245,252,0.4)] text-[11px]`}>
                    {new Date(hw.created_at).toLocaleDateString("ru-RU", { day:"2-digit", month:"2-digit", year:"numeric" })}
                  </p>
                </div>
                <textarea
                  value={comments[hw.id] !== undefined ? comments[hw.id] : (hw.comment ?? "")}
                  onChange={e => setComments(p => ({ ...p, [hw.id]: e.target.value }))}
                  placeholder="Комментарий..." rows={2}
                  className={`${TEXT_BODY} w-full text-[13px] text-[#f4f5fc] bg-[rgba(255,255,255,0.06)] border border-[rgba(244,245,252,0.12)] rounded-[8px] px-[10px] py-[8px] resize-none outline-none`}
                />
                {(imageUrls[hw.id] || hw.image_url) && (
                  <div className="relative inline-block">
                    <img src={imageUrls[hw.id] || hw.image_url} alt="" className="rounded-[8px] object-cover" style={{ maxHeight:80, width:"auto" }} />
                    {imageUrls[hw.id] && (
                      <button onClick={() => setImageUrls(p => { const n={...p}; delete n[hw.id]; return n; })}
                        className="absolute top-[4px] right-[4px] bg-[rgba(0,0,0,0.7)] rounded-full w-[18px] h-[18px] flex items-center justify-center cursor-pointer">
                        <span className="text-white text-[10px]">✕</span>
                      </button>
                    )}
                  </div>
                )}
                <input type="file" accept="image/*" style={{ display:"none" }}
                  ref={el => { fileInputRefs.current[hw.id] = el; }}
                  onChange={async e => { const f=e.target.files?.[0]; if(f) await uploadImage(hw.id,f); e.target.value=""; }}
                />
                <div className="flex flex-wrap gap-[6px]">
                  <button onClick={() => fileInputRefs.current[hw.id]?.click()}
                    className="px-[10px] py-[5px] rounded-[7px] cursor-pointer flex-1"
                    style={{ background:"rgba(255,255,255,0.06)", border:"1px dashed rgba(244,245,252,0.2)" }} disabled={uploading[hw.id]}>
                    <span className={`${TEXT_BODY} text-[rgba(244,245,252,0.5)] text-[11px]`}>{uploading[hw.id]?"Загрузка...":"📎 Скриншот"}</span>
                  </button>
                  {hw.status !== "reviewed" && (
                    <button onClick={() => updateStatus(hw.id,"reviewed")} className="px-[10px] py-[5px] rounded-[7px] bg-[#00D043] cursor-pointer">
                      <span className={`${TEXT_BODY} text-white text-[11px]`}>✓</span>
                    </button>
                  )}
                  {hw.status !== "rejected" && (
                    <button onClick={() => updateStatus(hw.id,"rejected")} className="px-[10px] py-[5px] rounded-[7px] bg-[#FF5D39] cursor-pointer">
                      <span className={`${TEXT_BODY} text-white text-[11px]`}>✕</span>
                    </button>
                  )}
                  {hw.status !== "pending" && (
                    <button onClick={() => updateStatus(hw.id,"pending")} className="px-[10px] py-[5px] rounded-[7px] bg-[#FFA500] cursor-pointer">
                      <span className={`${TEXT_BODY} text-white text-[11px]`}>⟲</span>
                    </button>
                  )}
                  <button onClick={() => deleteHomework(hw.id)}
                    className="px-[10px] py-[5px] rounded-[7px] cursor-pointer"
                    style={{ background:"rgba(255,93,57,0.12)", border:"1px solid rgba(255,93,57,0.3)" }}>
                    <span className={`${TEXT_BODY} text-[#FF5D39] text-[11px]`}>🗑</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── Desktop: draggable columns table ── */
          <div className="bg-[#404d52] rounded-[15px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#38444a]">
                    {colOrder.map(colId => {
                      const col = ALL_COLUMNS.find(c => c.id === colId)!;
                      return (
                        <th
                          key={colId}
                          draggable
                          onDragStart={() => onDragStart(colId)}
                          onDragOver={e => onDragOver(e, colId)}
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
                  {homeworks.map(hw => (
                    <tr key={hw.id} className="border-t border-[rgba(244,245,252,0.08)] hover:bg-[rgba(255,255,255,0.02)]">
                      {colOrder.map(colId => renderCell(colId, hw))}
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
