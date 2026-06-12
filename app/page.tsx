import TopicCard from "@/components/shared/TopicCard";
import { topics } from "@/constants/topics";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold">⚔️ Frontend Arena</h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Become a Frontend Legend.
        </p>

        <p className="mt-2 text-muted-foreground">
          Master HTML, CSS, JavaScript and React through AI-powered battles.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </main>
  );
}
