"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Topic } from "@/types/topic";
import Link from "next/link";

import {
  FileCode2,
  Palette,
  Braces,
  Atom,
  BadgeInfo,
  Gauge,
  Accessibility,
  Bot,
} from "lucide-react";

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  const iconMap = {
    html: FileCode2,
    css: Palette,
    javascript: Braces,
    react: Atom,
    typescript: BadgeInfo,
    performance: Gauge,
    accessibility: Accessibility,
    ai: Bot,
  };
  const Icon = iconMap[topic.icon];

  return (
    <Link href={`/battle/${topic.id}`}>
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        transition={{ duration: 0.2 }}
      >
        <Card
          className="
        cursor-pointer
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        bg-slate-900/60
        hover:bg-slate-800/80
        "
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon className="h-8 w-8 text-cyan-400" />

              <CardTitle className="text-xl font-semibold text-white">
                {topic.title}
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-slate-300 text-base">{topic.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
