'use client'

import React from 'react'
import '../../client/styles/main.css'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
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
import { Badge } from '../../client/src/components/ui/badge'
import { Button } from '../../client/src/components/ui/button'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters
    }
  })

  return (
    <div className="main-table h-screen rounded-md border ">
      <div className="flex items-center justify-end">
        <h1 className="artist-header">Artist List</h1>
        {/* <img alt="" className=" h-10" src="../../client/src/assets/images/Group.svg" /> */}
      </div>
      <div className="flex items-center py-4 px-3">
        <Input
          className="max-w-sm "
          placeholder="Filter Artist..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
        />
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
              {/* <Badge variant="secondary">Secondary</Badge> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataTable
