import TopicCard from "@/components/shared/TopicCard";
import { topics } from "@/constants/topics";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-indigo-950
        to-purple-950
        px-6
        py-14
      "
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="
          absolute
          left-1/2
          top-32
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-cyan-500/20
          blur-3xl
          "
        />

        <div
          className="
          absolute
          right-10
          top-1/3
          h-80
          w-80
          rounded-full
          bg-purple-500/20
          blur-3xl
          "
        />
        <h1 className="text-6xl font-bold text-white">⚔️ Frontend Arena</h1>

        <p className="mt-6 text-xl text-slate-300">Become a Frontend Legend.</p>

        <p className="mt-2 text-slate-400">
          Master frontend development through AI-powered battles.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </main>
  );
}
