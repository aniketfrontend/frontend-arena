interface BattlePageProps {
  params: Promise<{
    topicId: string;
  }>;
}

export default async function BattlePage({ params }: BattlePageProps) {
  const { topicId } = await params;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <h1 className="text-5xl font-bold text-white">
        {topicId.toUpperCase()} Arena
      </h1>

      <p className="mt-4 text-slate-400">Battle screen coming soon...</p>
    </main>
  );
}
