import { KPICard } from "@/components/dashboard/KPICard";
import { ChartPlaceholder } from "@/components/dashboard/ChartPlaceholder";
import { ActionSuggestionCard } from "@/components/dashboard/ActionSuggestionCard";
import { Activity, TrendingDown, PieChart, Zap, Lightbulb, Truck, Leaf, Factory } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Emissions"
          value="2,450 tCO2e"
          change="-12% from last quarter"
          icon={Activity}
          trend="down"
        />
        <KPICard
          title="ESG Score"
          value="72/100"
          change="+8 points this year"
          icon={PieChart}
          trend="up"
        />
        <KPICard
          title="Scope 1 Emissions"
          value="850 tCO2e"
          change="Direct operations"
          icon={Factory}
          trend="neutral"
        />
        <KPICard
          title="Carbon Intensity"
          value="0.42 tCO2e"
          change="Per unit output"
          icon={TrendingDown}
          trend="down"
        />
      </div>

      {/* Main Chart */}
      <ChartPlaceholder title="Emissions Over Time" />

      {/* Top Contributors Section */}
      <Card>
        <CardHeader>
          <CardTitle>Top Emission Contributors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { category: "Transportation", impact: 45, value: "1,102 tCO2e" },
              { category: "Energy Consumption", impact: 30, value: "735 tCO2e" },
              { category: "Supply Chain", impact: 15, value: "367 tCO2e" },
              { category: "Waste Management", impact: 10, value: "245 tCO2e" },
            ].map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-muted-foreground">{item.value}</span>
                </div>
                <Progress value={item.impact} className="h-2" />
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            These values are placeholders — once data is uploaded, they become live insights.
          </p>
        </CardContent>
      </Card>

      {/* Action Suggestions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recommended Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ActionSuggestionCard
            title="Switch to LED Lighting"
            description="Reduce energy consumption by 40% in office spaces"
            impact="high"
            icon={Lightbulb}
          />
          <ActionSuggestionCard
            title="Optimize Fleet Routes"
            description="Cut transportation emissions through route planning"
            impact="high"
            icon={Truck}
          />
          <ActionSuggestionCard
            title="Renewable Energy Contract"
            description="Switch to 100% renewable energy supplier"
            impact="medium"
            icon={Zap}
          />
          <ActionSuggestionCard
            title="Green Supplier Program"
            description="Partner with certified sustainable suppliers"
            impact="medium"
            icon={Leaf}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
