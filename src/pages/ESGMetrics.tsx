import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartPlaceholder } from "@/components/dashboard/ChartPlaceholder";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ESGMetrics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">ESG Metrics</h2>
        <p className="text-muted-foreground mt-1">
          Detailed breakdown of your environmental impact across all scopes
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="scope1">Scope 1</TabsTrigger>
          <TabsTrigger value="scope2">Scope 2</TabsTrigger>
          <TabsTrigger value="scope3">Scope 3</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  Scope 1 Emissions
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Direct emissions from owned or controlled sources</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">850 tCO2e</div>
                <Badge variant="outline" className="mt-2">35% of total</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  Scope 2 Emissions
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Indirect emissions from purchased energy</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">650 tCO2e</div>
                <Badge variant="outline" className="mt-2">27% of total</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  Scope 3 Emissions
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>All other indirect emissions in the value chain</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">950 tCO2e</div>
                <Badge variant="outline" className="mt-2">38% of total</Badge>
              </CardContent>
            </Card>
          </div>

          <ChartPlaceholder title="Emissions by Scope" showFilter />
        </TabsContent>

        <TabsContent value="scope1" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Scope 1: Direct Emissions</CardTitle>
              <CardDescription>
                Emissions from sources owned or controlled by your organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder title="Scope 1 Breakdown" showFilter={false} />
              <div className="mt-6 space-y-3">
                <p className="text-sm font-medium">Main Sources:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Company vehicles and fleet operations</li>
                  <li>• On-site fuel combustion</li>
                  <li>• Process emissions from manufacturing</li>
                  <li>• Fugitive emissions from refrigeration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scope2" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Scope 2: Energy Indirect</CardTitle>
              <CardDescription>
                Emissions from purchased electricity, heat, steam, and cooling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder title="Scope 2 Breakdown" showFilter={false} />
              <div className="mt-6 space-y-3">
                <p className="text-sm font-medium">Main Sources:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Purchased electricity for offices</li>
                  <li>• Purchased heating and cooling</li>
                  <li>• Purchased steam for processes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scope3" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Scope 3: Value Chain</CardTitle>
              <CardDescription>
                All other indirect emissions in your value chain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder title="Scope 3 Breakdown" showFilter={false} />
              <div className="mt-6 space-y-3">
                <p className="text-sm font-medium">Main Sources:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Purchased goods and services</li>
                  <li>• Business travel</li>
                  <li>• Employee commuting</li>
                  <li>• Transportation and distribution</li>
                  <li>• Waste generated in operations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methodology" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Calculation Methodology</CardTitle>
              <CardDescription>
                Standards and frameworks used for emissions calculations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">GHG Protocol</h3>
                <p className="text-sm text-muted-foreground">
                  Calculations follow the Greenhouse Gas Protocol Corporate Standard, the most widely used international accounting tool for quantifying and managing greenhouse gas emissions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Emission Factors</h3>
                <p className="text-sm text-muted-foreground">
                  We use emission factors from DEFRA (UK), EPA (US), and IEA databases, updated annually to reflect the latest scientific consensus.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Data quality scores are calculated based on source reliability, temporal correlation, geographical correlation, and technological correlation.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ESGMetrics;
