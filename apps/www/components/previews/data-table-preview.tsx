"use client";

import { type ColumnDef, DataTable, dataTableSortHeader } from "glasswave";
import { useMemo } from "react";
import { ComponentPreview } from "@/components/component-preview";

type Row = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  amount: string;
};

export function DataTablePreview() {
  const data: Row[] = useMemo(
    () => [
      {
        id: "1",
        name: "Olivia Martin",
        email: "olivia@mail.com",
        role: "Owner",
        status: "Active",
        amount: "$1,999.00",
      },
      {
        id: "2",
        name: "Jackson Lee",
        email: "jackson@mail.com",
        role: "Member",
        status: "Active",
        amount: "$39.00",
      },
      {
        id: "3",
        name: "Isabella Nguyen",
        email: "isabella@mail.com",
        role: "Member",
        status: "Pending",
        amount: "$299.00",
      },
      {
        id: "4",
        name: "William Kim",
        email: "will@mail.com",
        role: "Admin",
        status: "Active",
        amount: "$99.00",
      },
      {
        id: "5",
        name: "Sofia Davis",
        email: "sofia@mail.com",
        role: "Member",
        status: "Inactive",
        amount: "$0.00",
      },
      {
        id: "6",
        name: "Liam Brown",
        email: "liam@mail.com",
        role: "Member",
        status: "Active",
        amount: "$149.00",
      },
      {
        id: "7",
        name: "Emma Wilson",
        email: "emma@mail.com",
        role: "Admin",
        status: "Pending",
        amount: "$520.00",
      },
    ],
    [],
  );

  const columns: ColumnDef<Row>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => dataTableSortHeader("Name", column),
      },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "role", header: "Role" },
      {
        accessorKey: "status",
        header: ({ column }) => dataTableSortHeader("Status", column),
      },
      {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => (
          <div className="text-right font-medium">{row.getValue("amount")}</div>
        ),
      },
    ],
    [],
  );

  return (
    <ComponentPreview label="Data Table">
      <div className="w-full max-w-3xl">
        <DataTable columns={columns} data={data} />
      </div>
    </ComponentPreview>
  );
}
