"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Lightbulb, Zap, Truck, Leaf, Building, Recycle } from "lucide-react";

const actions = [
  {
    id: 1,
    title: "Switch to LED Lighting",
    description: "Replace all traditional lighting with LED alternatives across facilities",
    impact: "high",
    cost: "low",
    timeframe: "Quick Win",
    reduction: "120 tCO2e/year",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Install Solar Panels",
    description: "Add 200kW solar array on main facility roof",
    impact: "high",
    cost: "high",
    timeframe: "Long-term",
    reduction: "180 tCO2e/year",
    icon: Zap,
  },
  {
    id: 3,
    title: "Optimize Fleet Routes",
    description: "Implement AI-powered route optimization software",
    impact: "high",
    cost: "low",
    timeframe: "Quick Win",
    reduction: "95 tCO2e/year",
    icon: Truck,
  },
  {
    id: 4,
    title: "Green Supplier Certification",
    description: "Partner with certified sustainable suppliers",
    impact: "medium",
    cost: "medium",
    timeframe: "Medium-term",
    reduction: "145 tCO2e/year",
    icon: Leaf,
  },
  {
    id: 5,
    title: "Building Insulation Upgrade",
    description: "Improve thermal efficiency of office buildings",
    impact: "medium",
    cost: "high",
    timeframe: "Long-term",
    reduction: "85 tCO2e/year",
    icon: Building,
  },
  {
    id: 6,
    title: "Waste Reduction Program",
    description: "Implement comprehensive recycling and composting",
    impact: "low",
    cost: "low",
    timeframe: "Quick Win",
    reduction: "35 tCO2e/year",
    icon: Recycle,
  },
];

const ActionPlan = () => {
  const [filter, setFilter] = useState("all");

  const filteredActions = actions.filter((action) => {
    if (filter === "all") return true;
    if (filter === "high") return action.impact === "high";
    if (filter === "low-cost") return action.cost === "low";
    if (filter === "quick") return action.timeframe === "Quick Win";
    return true;
  });

  const impactColors = {
    high: "bg-success/10 text-success border-success/20",
    medium: "bg-accent/10 text-accent border-accent/20",
    low: "bg-muted text-muted-foreground border-muted",
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Action Plan</h2>
          <p className="text-muted-foreground mt-1">
            Prioritized recommendations to reduce your environmental impact
          </p>
        </div>
      </div>

      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All Actions</TabsTrigger>
          <TabsTrigger value="high">High Impact</TabsTrigger>
          <TabsTrigger value="low-cost">Low Cost</TabsTrigger>
          <TabsTrigger value="quick">Quick Wins</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredActions.map((action) => (
          <Card key={action.id} className="transition-smooth hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <action.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{action.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {action.description}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className={impactColors[action.impact as keyof typeof impactColors]}>
                  {action.impact} impact
                </Badge>
                <Badge variant="outline">
                  {action.cost} cost
                </Badge>
                <Badge variant="outline">
                  {action.timeframe}
                </Badge>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Potential Reduction</p>
                  <p className="text-lg font-semibold text-success">{action.reduction}</p>
                </div>
                <Button variant="ghost" size="sm" className="group" disabled>
                  Details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredActions.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No actions match the selected filter</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ActionPlan;
