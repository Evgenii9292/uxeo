import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { useUserSafe } from "../context/UserContext";
import svgPaths from "../../imports/svg-mo1fvfhy71";
import imgAvatar from "figma:asset/906790c4d803b2b6f01b6bc1dc6703b587d8a0d9.png";
import { ActiveCourseCard, COURSE_DISPLAY } from "../components/CoursesContent";
import { useAchievementsSafe, ACHIEVEMENTS, ACHIEVEMENT_ORDER, AchievementId } from "../context/AchievementsContext";
import { getLeague } from "./LeaguePage";

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

// ─── Fire icon (matches AppHeader) ───────────────────────────────────────────
function FireStatIcon() {
  return (
    <img
      src="/fire-icon.svg"
      width={22}
      height={24}
      style={{ filter: "brightness(0) saturate(100%) invert(72%) sepia(76%) saturate(751%) hue-rotate(357deg) brightness(102%)", flexShrink: 0 }}
    />
  );
}

// ─── Zap icon (matches AppHeader) ────────────────────────────────────────────
function ZapStatIcon() {
  return (
    <img
      src="/zap-icon.svg"
      width={22}
      height={22}
      style={{ filter: "brightness(0) saturate(100%) invert(49%) sepia(79%) saturate(1117%) hue-rotate(348deg) brightness(103%)", flexShrink: 0 }}
    />
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

// ─── Image resize helper (handles large iPhone HEIC/JPEG files) ───────────────
function resizeImageToDataUrl(file: File, maxSize = 400, quality = 0.88): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (ev) => {
      try {
        const srcDataUrl = ev.target?.result as string;
        const img = new Image();
        img.onerror = () => resolve(srcDataUrl); // fallback: store original
        img.onload = () => {
          try {
            const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
            const w = Math.round(img.width * scale) || maxSize;
            const h = Math.round(img.height * scale) || maxSize;
            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            if (!ctx) { resolve(srcDataUrl); return; }
            ctx.drawImage(img, 0, 0, w, h);
            const result = canvas.toDataURL('image/jpeg', quality);
            resolve(result);
          } catch {
            resolve(srcDataUrl); // fallback if canvas fails
          }
        };
        img.src = srcDataUrl;
      } catch (e) {
        reject(e);
      }
    };
    reader.readAsDataURL(file);
  });
}

// ─── Avatar picker ────────────────────────────────────────────────────────────
const PROFILE_NAME_KEY  = "uxeo-profile-name";
const PROFILE_TITLE_KEY = "uxeo-profile-title";
const PROFILE_AVATAR_KEY = "uxeo-profile-avatar";

// Illustrated DiceBear avatar collection (notionists style)
const DICEBEAR_SEEDS = [
  'alex', 'maria', 'dan', 'kate', 'mike', 'anna', 'vlad', 'olga',
  'max', 'nina', 'igor', 'lena', 'artem', 'julia', 'boris', 'vera',
  'dima', 'tanya', 'sergei', 'natasha', 'andrei', 'ksenia', 'roman', 'sveta',
];
const PICKER_PHOTOS = DICEBEAR_SEEDS.map(
  s => `https://api.dicebear.com/9.x/notionists/svg?seed=${s}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
);

function AvatarPickerModal({ current, onSelect, onClose }: {
  current?: string;
  onSelect: (url: string) => void;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: "#2C3538", borderRadius: 20, padding: 24, width: 320, maxHeight: "80vh", overflow: "auto" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <p style={{ fontFamily: "Roboto Condensed, sans-serif", fontWeight: 700, fontSize: 18, color: "#F4F5FC", margin: 0 }}>
            Выбрать аватар
          </p>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#798589", cursor: "pointer", fontSize: 22, lineHeight: 1, padding: 0 }}>✕</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {PICKER_PHOTOS.map(url => (
            <button
              key={url}
              onClick={() => { onSelect(url); onClose(); }}
              style={{
                padding: 0,
                border: current === url ? "3px solid #FF6B21" : "3px solid transparent",
                borderRadius: "50%",
                cursor: "pointer",
                background: "none",
                overflow: "hidden",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}
            >
              <img src={url} width={60} height={60} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", display: "block" }} loading="lazy" />
            </button>
          ))}
        </div>
        <p style={{ fontFamily: "Roboto Condensed, sans-serif", fontSize: 13, color: "#798589", textAlign: "center", marginTop: 12, marginBottom: 0 }}>
          или{" "}
          <label style={{ color: "#FF6B21", cursor: "pointer", textDecoration: "underline" }}>
            загрузить своё фото
            <input type="file" accept="image/*,image/heic,image/heif" style={{ display: "none" }} onChange={async e => {
              const file = e.target.files?.[0];
              if (!file) return;
              const isHeic = file.type === 'image/heic' || file.type === 'image/heif'
                || /\.(heic|heif)$/i.test(file.name);
              if (isHeic) {
                alert('Формат не поддерживается. Доступные форматы: JPG, PNG, GIF, WebP.');
                e.target.value = '';
                return;
              }
              try {
                const dataUrl = await resizeImageToDataUrl(file);
                onSelect(dataUrl);
                onClose();
              } catch (err) {
                console.error('avatar upload error:', err);
                alert('Не удалось загрузить фото. Попробуйте другой файл или формат.');
              }
              e.target.value = '';
            }} />
          </label>
        </p>
      </div>
    </div>
  );
}

function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem(PROFILE_NAME_KEY);
    if (saved) return saved;
    // First time — persist default so LeaguePage can read it
    localStorage.setItem(PROFILE_NAME_KEY, "Evgeniy");
    return "Evgeniy";
  });
  const [title, setTitle] = useState(() => {
    const saved = localStorage.getItem(PROFILE_TITLE_KEY);
    if (saved) return saved;
    localStorage.setItem(PROFILE_TITLE_KEY, "Дизайнер мидл");
    return "Дизайнер мидл";
  });
  const [editName, setEditName] = useState(name);
  const [editTitle, setEditTitle] = useState(title);
  const [avatarSrc, setAvatarSrc] = useState<string | null>(() => localStorage.getItem(PROFILE_AVATAR_KEY));
  const [showPicker, setShowPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarSelect = (url: string) => {
    setAvatarSrc(url);
    localStorage.setItem(PROFILE_AVATAR_KEY, url);
  };

  const handleEdit = () => {
    setEditName(name);
    setEditTitle(title);
    setIsEditing(true);
  };
  const handleSave = () => {
    const newName = editName.trim() || name;
    const newTitle = editTitle.trim() || title;
    setName(newName);
    setTitle(newTitle);
    localStorage.setItem(PROFILE_NAME_KEY, newName);
    localStorage.setItem(PROFILE_TITLE_KEY, newTitle);
    setIsEditing(false);
  };
  const handleCancel = () => setIsEditing(false);

  const handleAvatarClick = () => setShowPicker(true);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Detect HEIC/HEIF (iPhone default format) — Chrome on PC cannot decode it
    const isHeic = file.type === 'image/heic' || file.type === 'image/heif'
      || /\.(heic|heif)$/i.test(file.name);
    if (isHeic) {
      alert('Формат не поддерживается. Доступные форматы: JPG, PNG, GIF, WebP.');
      e.target.value = '';
      return;
    }
    try {
      const dataUrl = await resizeImageToDataUrl(file);
      setAvatarSrc(dataUrl);
      try { localStorage.setItem(PROFILE_AVATAR_KEY, dataUrl); } catch { /* quota exceeded */ }
    } catch {
      alert('Не удалось загрузить фото. Попробуйте другой файл или формат.');
    }
    e.target.value = '';
  };

  return (
    <>
    {showPicker && <AvatarPickerModal current={avatarSrc ?? undefined} onSelect={handleAvatarSelect} onClose={() => setShowPicker(false)} />}
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
                  className="bg-[#2c3539] border border-[#57646a] rounded-[10px] px-[12px] py-[6px] text-[#f4f5fc] font-['Roboto_Condensed:Medium',sans-serif] text-[22px] outline-none w-[260px]"
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
                    className="bg-[#ff6b21] text-[#f4f5fc] font-['Roboto_Condensed:Medium',sans-serif] text-[16px] px-[18px] py-[8px] rounded-[12px] cursor-pointer border-0 shadow-[0px_3px_0px_#c54a0a] hover:translate-y-[1px] hover:shadow-[0px_2px_0px_#c54a0a] active:translate-y-[2px] active:shadow-none transition-all duration-75"
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
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] leading-[27.5px] text-[rgba(244,245,252,0.9)] text-[26px]">{name}</p>
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] leading-[20px] text-[#798589] text-[16px]">{title}</p>
                </div>
                <EditButton onClick={handleEdit} />
              </div>
            )}
          </div>

          {/* Right: avatar */}
          <div className="relative shrink-0 size-[126px] cursor-pointer" onClick={handleAvatarClick}>
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
    {/* hidden file input for custom photo upload */}
    <input ref={fileInputRef} type="file" accept="image/*,image/heic,image/heif" className="hidden" onChange={handleFileChange} />
    </>
  );
}

// ─── Statistics card ──────────────────────────────────────────────────────────
function StatisticsCard({ streak, xp }: { streak: number; xp: number }) {
  const league = getLeague(xp);
  return (
    <div className="bg-[#343e42] relative rounded-[15px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-center justify-between px-[20px] py-[24px] relative w-full gap-[16px]">
        {/* Streak row */}
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <FireStatIcon />
            <p className="bg-clip-text font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[22px] text-[transparent] whitespace-nowrap"
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
            <p className="bg-clip-text font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[22px] text-[transparent] whitespace-nowrap"
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
            <img src={league.trophy} width={28} height={28} style={{ flexShrink: 0 }} />
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[22px] whitespace-nowrap"
              style={{ color: league.color }}>
              {league.name}
            </p>
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
    <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[20px] text-[rgba(244,245,252,0.9)] w-full">
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
      <Layout title="Профиль" rightWidth="320px">
        <ProfileSkeleton />
      </Layout>
    );
  }

  const xp = userCtx.xp;
  const streak = userCtx.streak;

  const activeCourse = COURSE_DISPLAY.find(c => c.isActive)!;

  return (
    <Layout title="Профиль" rightWidth="320px">
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