// ─── Roadmap Types ────────────────────────────────────────────────────────────

export type LessonStatus = "completed" | "current" | "locked";

export interface Lesson {
  id: number;
  lessonId: string;
  quizId?: string;
  title: string;
  description: string;
  status: LessonStatus;
  progress: number;
  totalQuestions: number;
  xpReward: number;
  moduleId: number;
  moduleName: string;
}

/** Visual state derived from lesson data */
export type NodeState = "completed" | "partial" | "current" | "locked";

/** Position of a node on the roadmap canvas */
export interface RoadmapLayoutNode {
  id: number;
  x: number;
  y: number;
}