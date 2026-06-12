import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Topic } from "@/types/topic";

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <Card className="cursor-pointer transition hover:scale-105">
      <CardHeader>
        <CardTitle>{topic.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{topic.description}</p>
      </CardContent>
    </Card>
  );
}
