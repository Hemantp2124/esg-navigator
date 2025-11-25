import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileSpreadsheet, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DataUpload = () => {
  const [fileUploaded, setFileUploaded] = useState(false);

  const mockColumns = [
    "Date", "Category", "Amount", "Unit", "Location", "Supplier"
  ];

  const mockMapping = [
    { source: "Date", target: "date" },
    { source: "Category", target: "emission_category" },
    { source: "Amount", target: "quantity" },
    { source: "Unit", target: "unit" },
    { source: "Location", target: "facility" },
    { source: "Supplier", target: "vendor_name" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Upload Your Data</h2>
        <p className="text-muted-foreground mt-1">
          Import your emissions data from spreadsheets to get started
        </p>
      </div>

      {!fileUploaded ? (
        <Card>
          <CardHeader>
            <CardTitle>Upload File</CardTitle>
            <CardDescription>
              Supported formats: CSV, XLSX, XLS. Maximum file size: 10MB
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setFileUploaded(true)}
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Drag and drop your file here</p>
              <p className="text-sm text-muted-foreground mb-4">or</p>
              <Button variant="outline">Select File</Button>
            </div>

            <Alert className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No data uploaded yet — drag a spreadsheet to begin. Your data will be automatically mapped to our ESG framework.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-success" />
                emissions_data.xlsx
              </CardTitle>
              <CardDescription>
                1,247 rows • Uploaded just now
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Map Your Columns</CardTitle>
              <CardDescription>
                Match your data columns to our ESG fields
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Your Column</TableHead>
                    <TableHead>Maps To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockMapping.map((mapping, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{mapping.source}</TableCell>
                      <TableCell>
                        <Select defaultValue={mapping.target} disabled>
                          <SelectTrigger className="w-48">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="date">Date</SelectItem>
                            <SelectItem value="emission_category">Emission Category</SelectItem>
                            <SelectItem value="quantity">Quantity</SelectItem>
                            <SelectItem value="unit">Unit</SelectItem>
                            <SelectItem value="facility">Facility</SelectItem>
                            <SelectItem value="vendor_name">Vendor Name</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" onClick={() => setFileUploaded(false)}>
                  Cancel
                </Button>
                <Button disabled>
                  Continue to Processing
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default DataUpload;
