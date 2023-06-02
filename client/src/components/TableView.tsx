'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../../client/src/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <div className="main-table h-screen rounded-md border">
      <div className="flex items-center justify-start">
        <img alt=""  src="../../src/assets/images/logo-mw.png" />
        <h1 className="artist-header">Artist List</h1>
      </div>
      <Table className="">
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
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="fixed bottom-0 right-0 mb-24 flex justify-end p-4">
        <div className="flex items-center justify-end space-x-2 py-4">
          <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
            Previous
          </button>
          <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataTable

// // ############################################################################################################
// import { Payment, columns } from '../../../app/payments/columns'
// import { DataTable } from '../../../app/payments/data-table'

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com'
//     }
//     // ...
//   ]
// }

// export default async function TableView() {
//   const data = await getData()

//   return (
//     <>
//     <div className="container mx-auto py-10">
//       <DataTable columns={columns} data={data} />
//     </div>
//     </>
//   )
// }

// // ############################################################################################################
// // import { useState, useEffect } from 'react'

// // import { Payment, columns } from '../../../app/payments/columns'
// // import { DataTable } from '../../../app/payments/data-table'

// // function TableView() {
// //   const [data, setData] = useState<Payment[]>([])
// //   const [error, setError] = useState<string | null>(null)

// //   useEffect(() => {
// //     getData()
// //       .then((fetchedData) => {
// //         setData(fetchedData)
// //       })
// //       .catch((error) => {
// //         setError(error.message)
// //       })
// //   }, [])

// //   async function getData(): Promise<Payment[]> {
// //     try {
// //       // Fetch data from your API here.
// //       const fetchedData = [
// //         {
// //           id: '728ed52f',
// //           amount: 100,
// //           status: 'pending',
// //           email: 'm@example.com'
// //         }
// //         // ...
// //       ]

// //       return fetchedData
// //     } catch (error) {
// //       throw new Error('Failed to fetch data')
// //     }
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>
// //   }

// //   return (
// //     <div className="container mx-auto py-10">
// //       <DataTable columns={columns} data={data} />
// //     </div>
// //   )
// // }

// // export default TableView

// // import { useState, useEffect } from 'react'

// // import { Payment, columns } from '../../../app/payments/columns'
// // import { DataTable } from '../../../app/payments/data-table'

// // function TableView() {
// //   const [data, setData] = useState<Payment[]>([])
// //   const [error, setError] = useState<string | null>(null)

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const fetchedData = await getData()

// //         setData(fetchedData)
// //       } catch (error) {
// //         setError('Failed to fetch data')
// //       }
// //     }

// //     fetchData()
// //   }, [])

// //   async function getData(): Promise<Payment[]> {
// //     // Fetch data from your API here.
// //     return [
// //       {
// //         id: '728ed52f',
// //         amount: 100,
// //         status: 'pending',
// //         email: 'm@example.com'
// //       }
// //       // ...
// //     ]
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>
// //   }

// //   return (
// //     <div>
// //       <DataTable columns={columns} data={data} />
// //     </div>
// //   )
// // }

// // export default TableView
