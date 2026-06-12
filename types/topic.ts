import { LucideIcon } from "lucide-react";

export type TopicIcon =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "typescript"
  | "performance"
  | "accessibility"
  | "ai";

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: TopicIcon;
}
