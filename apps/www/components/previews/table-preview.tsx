"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

const invoices = [
  {
    invoice: "INV-001",
    status: "Paid",
    method: "Credit Card",
    amount: "$199.00",
  },
  { invoice: "INV-002", status: "Pending", method: "PayPal", amount: "$42.00" },
  {
    invoice: "INV-003",
    status: "Unpaid",
    method: "Bank Transfer",
    amount: "$320.00",
  },
  {
    invoice: "INV-004",
    status: "Paid",
    method: "Credit Card",
    amount: "$99.00",
  },
  {
    invoice: "INV-005",
    status: "Paid",
    method: "Apple Pay",
    amount: "$520.00",
  },
];

export function TablePreview() {
  return (
    <ComponentPreview label="Table">
      <div className="w-full max-w-2xl">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((row) => (
              <TableRow key={row.invoice}>
                <TableCell className="font-medium">{row.invoice}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell className="text-right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$1,180.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </ComponentPreview>
  );
}
