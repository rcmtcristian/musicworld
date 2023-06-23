'use client'

import React from 'react'
import '../../client/styles/main.css'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../client/src/components/ui/table'
import { Skeleton } from '../../client/src/components/ui/skeleton'
import { Input } from '../../client/src/components/ui/input'
import { Button } from '../../client/src/components/ui/button'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Badge } from '../../client/src/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '../../client/src/components/ui/dropdown-menu'
import { DataTablePagination } from '../../client/src/components/ui/data-table-pagination'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })

  return (
    <div className="main-table h-screen rounded-md border ">
      <div className="flex items-center justify-center">
        <h1 className="artist-header">Artist List</h1>
        <img alt="" className=" h-10" src="../../client/src/assets/images/Group.svg" />
      </div>
      <div className="flex items-center py-4 px-3">
        <div className="flex justify-between  ">
          <Input
            className=" m-3 max-w-sm"
            placeholder="Filter Artist..."
            value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="ml-auto" variant="outline">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      className="capitalize"
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <section className="p-2">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="z-20 h-24 text-center" colSpan={columns.length}>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <DataTablePagination table={table} />
        <div>
          <div className=" m-3 flex justify-end space-x-4 ">
            <Button
              className="mx-4"
              disabled={!table.getCanPreviousPage()}
              variant="outline"
              onClick={() => table.previousPage()}
            >
              Previous
            </Button>

            <Button
              className="mr-2"
              disabled={!table.getCanNextPage()}
              variant="outline"
              onClick={() => table.nextPage()}
            >
              Next
            </Button>

            <div>
              <Skeleton className="h-[20px] w-[100px] rounded-full" />
              <Skeleton className="h-[20px] w-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataTable
