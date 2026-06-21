"use client";

import {
  type Column,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/cn";
import { Button } from "./button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  /** Enable client-side sorting for sortable columns */
  enableSorting?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
  enableSorting = true,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: enableSorting ? { sorting } : undefined,
    onSortingChange: enableSorting ? setSorting : undefined,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
  });

  return (
    <div className={cn("w-full space-y-4", className)}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="whitespace-nowrap">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-current/55"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

/** Sortable column header control */
export function dataTableSortHeader<TData, TValue>(
  label: string,
  column: Column<TData, TValue>,
) {
  const sorted = column.getIsSorted();
  return (
    <Button
      type="button"
      variant="glass"
      size="sm"
      className="-ml-3 h-8 gap-1 border-0 bg-transparent px-2 shadow-none hover:bg-black/[0.05] dark:hover:bg-white/10"
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      {label}
      {sorted === "desc" ? (
        <ArrowDown className="size-3.5" />
      ) : sorted === "asc" ? (
        <ArrowUp className="size-3.5" />
      ) : (
        <ChevronsUpDown className="size-3.5 opacity-50" />
      )}
    </Button>
  );
}

export type { ColumnDef };
