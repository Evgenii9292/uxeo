import { useState, useEffect } from "react";
import { useUserSafe } from "../context/UserContext";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { useNavigate } from "react-router";

const TEXT_TITLE = "font-['Roboto_Condensed:Bold',sans-serif] font-semibold";
const TEXT_BODY = "font-['Roboto_Condensed:Regular',sans-serif] font-normal";

interface Homework {
  id: string;
  lesson_name: string;
  user_id: string;
  figma_link: string;
  status: "pending" | "reviewed" | "rejected";
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
  const userData = useUserSafe();
  const navigate = useNavigate();
  const [homeworks, setHomeworks] = useState<Homework[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check admin access
  const isAdmin = userData?.email === "pavlov-evgenii@list.ru";

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
    if (!isAdmin && !loading) {
      navigate("/");
      return;
    }

    if (!isAdmin) return;

    fetchHomeworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, navigate]);

  const updateStatus = async (homeworkId: string, newStatus: Homework["status"]) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d627d1b0/homework/${homeworkId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update status");
      }

      // Update local state
      setHomeworks((prev) =>
        prev.map((hw) => (hw.id === homeworkId ? { ...hw, status: newStatus } : hw))
      );
    } catch (err) {
      console.error("Error updating status:", err);
      alert(`Ошибка обновления: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(165.05deg, rgb(44,52,56) 14.367%, rgb(46,57,62) 147.74%)" }}>
        <p className={`${TEXT_BODY} text-[#f4f5fc] text-[24px]`}>Загрузка...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-[20px]" style={{ background: "linear-gradient(165.05deg, rgb(44,52,56) 14.367%, rgb(46,57,62) 147.74%)" }}>
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
    <div className="min-h-screen p-[40px]" style={{ background: "linear-gradient(165.05deg, rgb(44,52,56) 14.367%, rgb(46,57,62) 147.74%)" }}>
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
                    <td className={`${TEXT_BODY} text-[#f4f5fc] text-[14px] px-[24px] py-[20px]`}>
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
                    <td className="px-[24px] py-[20px]">
                      <div className="flex gap-[8px]">
                        {hw.status !== "reviewed" && (
                          <button
                            onClick={() => updateStatus(hw.id, "reviewed")}
                            className="px-[12px] py-[6px] rounded-[8px] bg-[#00D043] hover:bg-[#00b839] cursor-pointer transition-colors"
                            title="Одобрить"
                          >
                            <span className={`${TEXT_BODY} text-white text-[12px]`}>✓</span>
                          </button>
                        )}
                        {hw.status !== "rejected" && (
                          <button
                            onClick={() => updateStatus(hw.id, "rejected")}
                            className="px-[12px] py-[6px] rounded-[8px] bg-[#FF5D39] hover:bg-[#e54d2a] cursor-pointer transition-colors"
                            title="Отклонить"
                          >
                            <span className={`${TEXT_BODY} text-white text-[12px]`}>✕</span>
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
        )}
      </div>
    </div>
  );
}