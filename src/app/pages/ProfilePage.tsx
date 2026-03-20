import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { useUserSafe } from "../context/UserContext";
import svgPaths from "../../imports/svg-mo1fvfhy71";
import imgAvatar from "figma:asset/906790c4d803b2b6f01b6bc1dc6703b587d8a0d9.png";
import { ActiveCourseCard, COURSE_DISPLAY } from "../components/CoursesContent";
import { useAchievementsSafe, ACHIEVEMENTS, ACHIEVEMENT_ORDER, AchievementId } from "../context/AchievementsContext";

// ─── Pencil icon (orange gradient, from Figma) ────────────────────────────────
function PencilIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]">
      <div className="absolute inset-[0.01%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.997">
          <path d={svgPaths.p30d0be00} fill="url(#pencil_grad)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="pencil_grad" x1="5.05" x2="-0.52" y1="5.14" y2="14.02">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// ─── Fire icon (yellow gradient) ─────────────────────────────────────────────
function FireStatIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]">
      <div className="absolute inset-[0_15%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7655 24.4324">
          <path d={svgPaths.p33094f0} fill="url(#fire_stat_grad)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="fire_stat_grad" x1="8.38" x2="8.38" y1="0" y2="24.4">
              <stop stopColor="#FFB121" />
              <stop offset="1" stopColor="#BB8116" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// ─── Zap icon (orange gradient) ───────────────────────────────────────────────
function ZapStatIcon() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p3b6e5180} fill="url(#zap_stat_grad)" stroke="url(#zap_stat_grad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="zap_stat_grad" x1="10.57" x2="0.9" y1="10.57" y2="24.45">
            <stop stopColor="#FF6B21" />
            <stop offset="1" stopColor="#994014" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ─── League emblem (muted) ────────────────────────────────────────────────────
function LeagueEmblemMuted() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[1.66%_0_8.84%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.515 27.745">
          <path d={svgPaths.p13af8870} fill="#555F63" />
          <path d={svgPaths.p24957840} fill="#555F63" />
        </svg>
      </div>
      <div className="absolute inset-[20.57%_26.24%_36.91%_26.24%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.73 13.18">
          <path d={svgPaths.p956c500} fill="#727E83" />
          <path d={svgPaths.p3ca05200} fill="#727E83" />
          <path d={svgPaths.p1d748300} fill="#727E83" />
          <path d={svgPaths.p2e84ea00} fill="#727E83" />
          <path d={svgPaths.p30f98500} fill="#727E83" />
          <path d={svgPaths.p306fde00} fill="#727E83" />
        </svg>
      </div>
    </div>
  );
}

// ─── Divider line ─────────────────────────────────────────────────────────────
function StatDivider() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 532 3">
          <path d="M0 1.5H532" stroke="#3D494F" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

// ─── Edit button ──────────────────────────────────────────────────────────────
function EditButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer bg-transparent border-0 p-0 outline-none">
      <PencilIcon />
      <p className="bg-clip-text font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-[transparent] whitespace-nowrap"
        style={{ backgroundImage: "linear-gradient(186.946deg, rgb(255, 107, 33) 48.665%, rgb(153, 64, 20) 112.02%)" }}>
        Редактировать
      </p>
    </button>
  );
}

// ─── Avatar edit overlay ──────────────────────────────────────────────────────
function AvatarEditOverlay({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="absolute cursor-pointer inset-0 rounded-full flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-150"
    >
      <div className="size-[24px] rounded-full bg-[#2C3539] flex items-center justify-center">
        <svg fill="none" width="12" height="12" viewBox="0 0 12 11.997">
          <path d={svgPaths.p30d0be00} fill="url(#av_pencil_grad)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="av_pencil_grad" x1="5.05" x2="-0.52" y1="5.14" y2="14.02">
              <stop stopColor="#FF6B21" />
              <stop offset="1" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// ─── Profile card ─────────────────────────────────────────────────────────────
function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Evgeniy");
  const [title, setTitle] = useState("Дизайнер мидл");
  const [editName, setEditName] = useState(name);
  const [editTitle, setEditTitle] = useState(title);
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    setEditName(name);
    setEditTitle(title);
    setIsEditing(true);
  };
  const handleSave = () => {
    setName(editName.trim() || name);
    setTitle(editTitle.trim() || title);
    setIsEditing(false);
  };
  const handleCancel = () => setIsEditing(false);

  const handleAvatarClick = () => fileInputRef.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarSrc(url);
    }
  };

  return (
    <div className="bg-[#343e42] relative rounded-[15px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[22px] relative w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {/* Left: name/title + edit */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
            {isEditing ? (
              <div className="flex flex-col gap-[10px]">
                <input
                  value={editName}
                  onChange={e => setEditName(e.target.value)}
                  className="bg-[#2c3539] border border-[#57646a] rounded-[10px] px-[12px] py-[6px] text-[#f4f5fc] font-['Roboto_Condensed:Bold',sans-serif] text-[22px] outline-none w-[260px]"
                  placeholder="Имя"
                />
                <input
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  className="bg-[#2c3539] border border-[#57646a] rounded-[10px] px-[12px] py-[6px] text-[#798589] font-['Roboto_Condensed:Medium',sans-serif] text-[16px] outline-none w-[260px]"
                  placeholder="Должность"
                />
                <div className="flex gap-[10px]">
                  <button
                    onClick={handleSave}
                    className="bg-[#ff6b21] text-[#f4f5fc] font-['Roboto_Condensed:Bold',sans-serif] text-[16px] px-[18px] py-[8px] rounded-[12px] cursor-pointer border-0 shadow-[0px_3px_0px_#c54a0a] hover:translate-y-[1px] hover:shadow-[0px_2px_0px_#c54a0a] active:translate-y-[2px] active:shadow-none transition-all duration-75"
                  >
                    Сохранить
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-[#404d52] text-[#c3c6d1] font-['Roboto_Condensed:Medium',sans-serif] text-[16px] px-[18px] py-[8px] rounded-[12px] cursor-pointer border-0 shadow-[0px_3px_0px_#1d292d] hover:translate-y-[1px] hover:shadow-[0px_2px_0px_#1d292d] active:translate-y-[2px] active:shadow-none transition-all duration-75"
                  >
                    Отмена
                  </button>
                </div>
              </div>
            ) : (
              <div className="content-stretch flex flex-col gap-[55px] items-start">
                <div className="content-stretch flex flex-col gap-[8px] items-start">
                  <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-[27.5px] text-[rgba(244,245,252,0.9)] text-[26px]">{name}</p>
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] leading-[20px] text-[#798589] text-[16px]">{title}</p>
                </div>
                <EditButton onClick={handleEdit} />
              </div>
            )}
          </div>

          {/* Right: avatar */}
          <div className="relative shrink-0 size-[126px]">
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            <div className="absolute left-0 overflow-clip rounded-full size-[126px] top-0" style={{ background: avatarSrc ? "white" : "#2C3539" }}>
              {avatarSrc ? (
                <img alt="avatar" className="absolute inset-0 size-full object-cover rounded-full" src={avatarSrc} />
              ) : (
                /* Dashed placeholder circle with plus */
                <div
                  className="absolute inset-0 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ border: "2px dashed rgba(121,133,137,0.55)" }}
                  onClick={handleAvatarClick}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 7v18M7 16h18" stroke="#798589" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>
            {/* Edit overlay on avatar */}
            <AvatarEditOverlay onClick={handleAvatarClick} />
            {/* Orange edit badge */}
            <div className="absolute bottom-[2%] right-[4%] cursor-pointer" onClick={handleAvatarClick}>
              <div className="size-[24px] rounded-full bg-[#2C3539] flex items-center justify-center shadow-[0px_2px_4px_rgba(0,0,0,0.5)]">
                <svg fill="none" width="12" height="12" viewBox="0 0 12 11.997">
                  <path d={svgPaths.p30d0be00} fill="url(#badge_pencil_grad)" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="badge_pencil_grad" x1="5.05" x2="-0.52" y1="5.14" y2="14.02">
                      <stop stopColor="#FF6B21" />
                      <stop offset="1" stopColor="#994014" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Statistics card ──────────────────────────────────────────────────────────
function StatisticsCard({ streak, xp }: { streak: number; xp: number }) {
  return (
    <div className="bg-[#343e42] relative rounded-[15px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-center justify-between px-[20px] py-[24px] relative w-full gap-[16px]">
        {/* Streak row */}
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <FireStatIcon />
            <p className="bg-clip-text font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[22px] relative shrink-0 text-[22px] text-[transparent] whitespace-nowrap"
              style={{ backgroundImage: "linear-gradient(to bottom, #FFB121, #BB8116)" }}>
              {streak}
            </p>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">Серия дней</p>
        </div>

        <StatDivider />

        {/* XP row */}
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <ZapStatIcon />
            <p className="bg-clip-text font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[22px] relative shrink-0 text-[22px] text-[transparent] whitespace-nowrap"
              style={{ backgroundImage: "linear-gradient(195.05deg, rgb(255, 107, 33) 48.665%, rgb(153, 64, 20) 112.02%)" }}>
              {xp}
            </p>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">XP</p>
        </div>

        <StatDivider />

        {/* League row */}
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <LeagueEmblemMuted />
            <p className="font-['Roboto_Condensed:ExtraBold',sans-serif] font-extrabold leading-[22px] relative shrink-0 text-[#798589] text-[22px] whitespace-nowrap">Недоступно</p>
          </div>
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#798589] text-[16px] whitespace-nowrap">Лига</p>
        </div>
      </div>
    </div>
  );
}

// ─── Achievement grid ─────────────────────────────────────────────────────────

function AchievementBadge({ id, unlockedAt }: { id: AchievementId; unlockedAt?: string }) {
  const def = ACHIEVEMENTS[id];
  const isUnlocked = !!unlockedAt;

  const dateStr = unlockedAt
    ? new Date(unlockedAt).toLocaleDateString("ru-RU", { day: "numeric", month: "short" })
    : null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: "18px 12px",
        background: isUnlocked ? "#343E42" : "#2C3438",
        borderRadius: 16,
        border: isUnlocked
          ? `1px solid ${def.color}33`
          : "1px solid rgba(255,255,255,0.04)",
        position: "relative",
        transition: "border-color 0.3s",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: isUnlocked
            ? `radial-gradient(circle at 35% 35%, ${def.color}55, ${def.colorEnd}22)`
            : "rgba(255,255,255,0.04)",
          border: isUnlocked
            ? `1.5px solid ${def.color}55`
            : "1.5px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          boxShadow: isUnlocked ? `0 4px 16px ${def.color}22` : "none",
          filter: isUnlocked ? "none" : "grayscale(1) opacity(0.25)",
          flexShrink: 0,
        }}
      >
        {def.emoji}
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 700,
          fontSize: 13,
          color: isUnlocked ? "#C3C6D1" : "#4A5558",
          textAlign: "center",
          lineHeight: 1.25,
        }}
      >
        {def.title}
      </p>

      {/* Date or locked */}
      <p
        style={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          color: isUnlocked ? def.color : "#394144",
          textAlign: "center",
        }}
      >
        {isUnlocked ? dateStr : "Заблокировано"}
      </p>

      {/* Lock icon for locked achievements */}
      {!isUnlocked && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            fontSize: 11,
            opacity: 0.25,
          }}
        >
          🔒
        </div>
      )}
    </div>
  );
}

function AchievementsGrid() {
  const ctx = useAchievementsSafe();
  const unlocked = ctx?.unlockedAchievements ?? {};

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 12,
        width: "100%",
      }}
    >
      {ACHIEVEMENT_ORDER.map((id) => (
        <AchievementBadge
          key={id}
          id={id}
          unlockedAt={unlocked[id]?.unlockedAt}
        />
      ))}
    </div>
  );
}

// ─── Section title ────────────────────────────────────────────────────────────
function SectionTitle({ text }: { text: string }) {
  return (
    <p className="font-['Roboto_Condensed:Bold',sans-serif] font-medium leading-[22px] relative shrink-0 text-[20px] text-[rgba(244,245,252,0.9)] w-full">
      {text}
    </p>
  );
}

// ─── Skeleton shimmer ─────────────────────────────────────────────────────────
function SkeletonBlock({ w = "100%", h = 20, rounded = 10 }: { w?: string | number; h?: number; rounded?: number }) {
  return (
    <div
      className="shrink-0 animate-pulse"
      style={{ width: w, height: h, borderRadius: rounded, background: "rgba(255,255,255,0.07)" }}
    />
  );
}

function ProfileSkeleton() {
  return (
    <div className="flex flex-col gap-[32px] w-full">
      {/* Profile card */}
      <div className="flex flex-col gap-[16px] w-full rounded-[24px] p-[24px]" style={{ background: "#343e42" }}>
        <div className="flex gap-[16px] items-center">
          <SkeletonBlock w={72} h={72} rounded={36} />
          <div className="flex flex-col gap-[8px] flex-1">
            <SkeletonBlock w="55%" h={20} />
            <SkeletonBlock w="38%" h={15} />
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="flex flex-col gap-[16px]">
        <SkeletonBlock w="30%" h={22} />
        <SkeletonBlock h={88} rounded={16} />
      </div>
      {/* Course */}
      <div className="flex flex-col gap-[16px]">
        <SkeletonBlock w="38%" h={22} />
        <SkeletonBlock h={120} rounded={16} />
      </div>
      {/* Achievements */}
      <div className="flex flex-col gap-[16px]">
        <SkeletonBlock w="34%" h={22} />
        <SkeletonBlock h={100} rounded={16} />
      </div>
    </div>
  );
}

// ─── Profile Page ─────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const navigate = useNavigate();
  const userCtx = useUserSafe();

  // Show skeleton while UserContext isn't ready yet (e.g. first render, hot-reload)
  if (!userCtx) {
    return (
      <Layout title="Профиль" showBack backPath="/" rightWidth="320px">
        <ProfileSkeleton />
      </Layout>
    );
  }

  const xp = userCtx.xp;
  const streak = userCtx.streak;

  const activeCourse = COURSE_DISPLAY.find(c => c.isActive)!;

  return (
    <Layout title="Профиль" showBack backPath="/" rightWidth="320px">
      {/* Profile card */}
      <ProfileCard />

      {/* Statistics */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full mt-[32px]">
        <SectionTitle text="Статистика" />
        <StatisticsCard streak={streak} xp={xp} />
      </div>

      {/* Current course — reuses the same ActiveCourseCard from CoursesContent */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full mt-[32px]">
        <SectionTitle text="Текущий курс" />
        <ActiveCourseCard course={activeCourse} />
      </div>

      {/* Achievements */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full mt-[32px] pb-[40px]">
        <SectionTitle text="Достижения" />
        <AchievementsGrid />
      </div>
    </Layout>
  );
}