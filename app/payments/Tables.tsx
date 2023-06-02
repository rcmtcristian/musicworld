// // // import React from 'react'
// // // import { Payment, columns } from './columns'
// // // import { DataTable } from './data-table'

// // // async function getData(): Promise<Payment[]> {
// // //   // Fetch data from your API here.
// // //   return [
// // //     {
// // //       id: '728ed52f',
// // //       amount: 100,
// // //       status: 'pending',
// // //       email: 'm@example.com'
// // //     }
// // //     // ...
// // //   ]
// // // }

// // // export default async function Page() {
// // //   const data = await getData()

// // //   return (
// // //     <div className="container mx-auto py-10">
// // //       <DataTable columns={columns} data={data} />
// // //     </div>
// // //   )
// // // }
// // import React, { useEffect, useState } from 'react'

// // import { Payment, columns } from './columns'
// // import { DataTable } from './data-table'

// // async function getData(): Promise<Payment[]> {
// //   // Fetch data from your API here.
// //   return [
// //     {
// //       id: '728ed52f',
// //       amount: 100,
// //       status: 'pending',
// //       email: 'm@example.com'
// //     }
// //     // ...
// //   ]
// // }

// // const Page: React.FC = () => {
// //   const [data, setData] = useState<Payment[]>([])
// //   const [error, setError] = useState<string | null>(null)

// //   useEffect(() => {
// //     getData()
// //       // eslint-disable-next-line promise/always-return
// //       .then((fetchedData) => {
// //         setData(fetchedData)
// //       })
// //       .catch((error) => {
// //         setError(error.message)
// //       })
// //   }, [])

// //   if (error) {
// //     return <div>Error: {error}</div>
// //   }

// //   return (
// //     <div className="container mx-auto py-10">
// //       <DataTable columns={columns} data={data} />
// //       <button>hey</button>
// //     </div>
// //   )
// // }

// // export default Page

// import { Payment, columns } from './columns'
// import { DataTable } from './data-table'

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

// export default async function Page() {
//   const data = await getData()

//   return (
//     <div className="container mx-auto py-10">
//       <DataTable columns={columns} data={data} />
//       <h1>hey</h1>
//     </div>
//   )
// }
