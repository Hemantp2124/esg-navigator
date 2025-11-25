import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ActionSuggestionCardProps {
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  icon: LucideIcon;
}

export const ActionSuggestionCard = ({ title, description, impact, icon: Icon }: ActionSuggestionCardProps) => {
  const impactColors = {
    high: "bg-success/10 text-success border-success/20",
    medium: "bg-accent/10 text-accent border-accent/20",
    low: "bg-muted text-muted-foreground border-muted",
  };

  return (
    <Card className="transition-smooth hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <div className="flex items-start gap-3">
          <div className="mt-1 p-2 rounded-lg bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <Badge variant="outline" className={impactColors[impact]}>
          {impact} impact
        </Badge>
      </CardHeader>
      <CardContent>
        <Button variant="ghost" size="sm" className="w-full justify-between group" disabled>
          Learn more
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
