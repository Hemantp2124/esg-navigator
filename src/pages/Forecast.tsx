import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPlaceholder } from "@/components/dashboard/ChartPlaceholder";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp } from "lucide-react";

const Forecast = () => {
  const [renewable, setRenewable] = useState([30]);
  const [transport, setTransport] = useState([50]);
  const [supplier, setSupplier] = useState([40]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Forecast & Scenario Planning</h2>
        <p className="text-muted-foreground mt-1">
          Model different scenarios to predict future emissions and ESG impact
        </p>
      </div>

      <ChartPlaceholder title="Projected Emissions (Next 12 Months)" />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Scenario Controls</CardTitle>
            <CardDescription>
              Adjust these parameters to see how changes affect your emissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Renewable Energy %</label>
                <span className="text-sm text-muted-foreground">{renewable[0]}%</span>
              </div>
              <Slider
                value={renewable}
                onValueChange={setRenewable}
                max={100}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Percentage of energy from renewable sources
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Fleet Efficiency Improvement</label>
                <span className="text-sm text-muted-foreground">{transport[0]}%</span>
              </div>
              <Slider
                value={transport}
                onValueChange={setTransport}
                max={100}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Reduction in transportation emissions
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Sustainable Supplier Adoption</label>
                <span className="text-sm text-muted-foreground">{supplier[0]}%</span>
              </div>
              <Slider
                value={supplier}
                onValueChange={setSupplier}
                max={100}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Percentage of suppliers with certified sustainability
              </p>
            </div>

            <Button className="w-full" disabled>
              Apply to Action Plan
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Forecasted Impact</CardTitle>
            <CardDescription>
              Based on your current scenario settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/20">
                <div>
                  <p className="text-sm font-medium text-success-foreground">Projected Emissions</p>
                  <p className="text-2xl font-bold text-success-foreground">1,840 tCO2e</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-success/20 text-success border-success/30">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -25%
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">ESG Score Impact</span>
                  <span className="text-sm font-medium text-success flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +12 points
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Cost Savings (Annual)</span>
                  <span className="text-sm font-medium">$145,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Implementation Timeline</span>
                  <span className="text-sm font-medium">18 months</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-semibold mb-3">Key Assumptions</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Current growth rate maintained</li>
                <li>• Grid carbon intensity decreases 2% annually</li>
                <li>• Full implementation of selected measures</li>
                <li>• No major operational changes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Forecast;
