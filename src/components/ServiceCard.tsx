import { Card, CardContent } from "@/components/ui/card";

export default function ServiceCard({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType | string;
}) {
  return (
    <Card className="text-white border border-gray-800 bg-gray-900/90 backdrop-blur-lg">
      <CardContent className="p-6 flex flex-col items-center space-y-4 ">
        <Icon className="text-teal-400 w-10 h-10" />
        <p className="text-white font-medium text-center text-lg">{title}</p>
      </CardContent>
    </Card>
  );
}
