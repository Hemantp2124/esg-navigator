import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, MoreVertical, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockReports = [
  {
    id: 1,
    name: "Q4 2024 ESG Report",
    date: "2024-12-15",
    status: "completed",
    format: "PDF",
  },
  {
    id: 2,
    name: "Annual Sustainability Report 2024",
    date: "2024-11-30",
    status: "completed",
    format: "PDF",
  },
  {
    id: 3,
    name: "Q3 2024 Carbon Footprint",
    date: "2024-09-30",
    status: "completed",
    format: "PDF",
  },
  {
    id: 4,
    name: "Mid-Year ESG Assessment",
    date: "2024-06-30",
    status: "completed",
    format: "PDF",
  },
];

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Reports</h2>
          <p className="text-muted-foreground mt-1">
            Generate and manage your ESG compliance reports
          </p>
        </div>
        <Button disabled>
          <Plus className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <CardDescription>
            Choose from pre-built templates aligned with major frameworks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="cursor-pointer transition-smooth hover:shadow-md hover:border-primary">
              <CardContent className="pt-6">
                <FileText className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">CSRD Report</h3>
                <p className="text-sm text-muted-foreground">
                  Corporate Sustainability Reporting Directive format
                </p>
                <Badge variant="outline" className="mt-3">
                  EU Standard
                </Badge>
              </CardContent>
            </Card>

            <Card className="cursor-pointer transition-smooth hover:shadow-md hover:border-primary">
              <CardContent className="pt-6">
                <FileText className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold mb-1">GHG Protocol</h3>
                <p className="text-sm text-muted-foreground">
                  Greenhouse Gas Protocol standard report
                </p>
                <Badge variant="outline" className="mt-3">
                  Global Standard
                </Badge>
              </CardContent>
            </Card>

            <Card className="cursor-pointer transition-smooth hover:shadow-md hover:border-primary">
              <CardContent className="pt-6">
                <FileText className="h-8 w-8 text-success mb-3" />
                <h3 className="font-semibold mb-1">Custom Report</h3>
                <p className="text-sm text-muted-foreground">
                  Build your own report with selected metrics
                </p>
                <Badge variant="outline" className="mt-3">
                  Flexible
                </Badge>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Reports</CardTitle>
          <CardDescription>
            Previously generated reports are stored here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Format</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.name}</TableCell>
                  <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-success/10 text-success">
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{report.format}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" disabled>
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem disabled>
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
