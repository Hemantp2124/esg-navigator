import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loading } from "@/components/ui/Loading";

interface ChartPlaceholderProps {
  title: string;
  showFilter?: boolean;
  loading?: boolean;
}

export const ChartPlaceholder = ({ title, showFilter = true, loading = false }: ChartPlaceholderProps) => {
  const heights = [54, 98, 41, 91, 52, 82, 54, 70, 96, 56, 67, 78];

  if (loading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          {showFilter && (
            <Select disabled defaultValue="30d">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="q1">Q1 2024</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          )}
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center">
            <Loading size={48} />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Loading chart data...
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{title}</CardTitle>
        {showFilter && (
          <Select disabled defaultValue="30d">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="q1">Q1 2024</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        )}
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-between gap-2 p-4 bg-muted/20 rounded-lg">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-accent to-accent/60 rounded-t animate-pulse"
              style={{
                height: `${heights[i]}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Chart visualization will appear here once data is uploaded
        </div>
      </CardContent>
    </Card>
  );
};
