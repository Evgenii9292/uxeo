import type { ReactNode } from "react";
import { UserProvider } from "../context/UserContext";
import { LessonProvider } from "../context/LessonContext";
import { HomeworkProvider } from "../context/HomeworkContext";
import { AchievementsProvider } from "../context/AchievementsContext";
import { AchievementOverlay } from "./AchievementUnlockedModal";
import { useNotificationWatcher } from "../hooks/useNotificationWatcher";
import { usePushPermission } from "../hooks/usePushPermission";

function NotificationWatcher() {
  useNotificationWatcher();
  return null;
}

function PushInit() {
  usePushPermission();
  return null;
}

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <AchievementsProvider>
        <LessonProvider>
          <HomeworkProvider>
            <NotificationWatcher />
            <PushInit />
            {children}
            <AchievementOverlay />
          </HomeworkProvider>
        </LessonProvider>
      </AchievementsProvider>
    </UserProvider>
  );
}
