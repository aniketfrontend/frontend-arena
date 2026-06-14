import QuestionCard from "@/components/shared/QuestionCard";
import { questions } from "@/constants/questions";

type PageProps = {
  params: Promise<{
    topicId: string;
  }>;
};

export default async function BattlePage({ params }: PageProps) {
  const { topicId } = await params;

  const topicQuestions = questions.filter(
    (question) => question.topicId === topicId
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-5xl font-bold text-white">
          {topicId.toUpperCase()} Arena
        </h1>

        <p className="mb-10 text-slate-400">
          Question 1 / {topicQuestions.length}
        </p>

        {topicQuestions.length > 0 ? (
          <QuestionCard question={topicQuestions[0]} />
        ) : (
          <p className="text-slate-400">No questions available yet.</p>
        )}
      </div>
    </main>
  );
}
