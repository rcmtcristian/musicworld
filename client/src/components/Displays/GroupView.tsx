/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect } from 'react'

import { ForceGraph } from '../Group/forceGraph'

function GroupView() {
  const [data2, setData2] = useState<
    {
      mainId: string
      artist: string[]
      id: string
      image: string
      name: string
      popularity: number[]
      mainSource: number
    }[]
  >([])
  const existingDataJson = localStorage.getItem('data')

  useEffect(() => {
    if (existingDataJson) {
      const existingData = JSON.parse(existingDataJson)

      setData2(existingData)
    }
  }, [existingDataJson])

  const [structuredData, setStructuredData] = useState({
    nodes: [],
    links: []
  })

  useEffect(() => {
    if (data2 && data2.length > 0) {
      const nodesSet = new Set()
      const nodes = data2.flatMap((artist, i) => {
        const reference =
          // @ts-ignore
          i === 0 && data2[1] && typeof data2[1] === 'object' && data2[1].index !== null
            ? { id: data2[1].mainId, name: artist.name, source: data2[1].mainSource }
            : null

        // @ts-ignore
        if (!artist || typeof artist !== 'object' || artist.index === null) {
          return [] // Skip invalid artist object
        }

        const ids = (artist.id && artist.id.slice(1)) || []
        const names = (artist.artist && artist.artist.slice(1)) || []
        const sources = (artist.popularity && artist.popularity.slice(1)) || []
        const target = artist.popularity && artist.popularity[0]
        // @ts-ignore
        const nodesData = ids.map((id: string, j: number) => ({
          id,
          name: names[j],
          source: sources[j],
          target
        }))

        if (i === 0) {
          nodesData.forEach((node: { id: unknown }) => nodesSet.add(node.id))

          return [reference, ...nodesData]
        }

        const filteredNodesData = nodesData.filter(
          (node: { id: unknown }) => !nodesSet.has(node.id)
        )

        filteredNodesData.forEach((node: { id: unknown }) => nodesSet.add(node.id))

        return filteredNodesData
      })

      const links = data2.flatMap((artistData, i) => {
        // @ts-ignore
        if (!artistData || typeof artistData !== 'object' || artistData.index === null) {
          return [] // Skip invalid artistData object
        }

        const source = nodes[i] && nodes[i].id
        const targets = (artistData.id && artistData.id.slice(1)) || []

        // @ts-ignore
        return targets.map((target) => ({ target, source }))
      })

      // @ts-ignore
      setStructuredData({ nodes, links })
    }
  }, [data2])

  // console.log(structuredData)
  // console.log(data2)
  const nodeHoverTooltip = React.useCallback((node: { name: string }) => {
    return `<div>${node.name}</div>`
  }, [])

  return (
    <main className="artist-table-container">
      <div className="mobile-cover">
        <h1>Mobile View is still under developement</h1>
      </div>
      <div className="main">
        <ForceGraph
          linksData={structuredData.links}
          nodeHoverTooltip={nodeHoverTooltip}
          nodesData={structuredData.nodes}
        />
      </div>
    </main>
  )
}

export default GroupView

// // const structuredData = {
// //   nodes: data2.flatMap((artist, i) => {
// //     const ids = artist.id.slice(1)
// //     const names = artist.artist.slice(1)
// //     const source = artist.popularity.slice(1)
// //     const targets = artist.popularity[0]

// //     return ids.map((id, j) => ({
// //       id,
// //       name: names[j],
// //       source: source[j],
// //       targets
// //     }))
// //   }),
// //   links: data2.flatMap((artistData, i) => {
// //     const source = artistData.popularity[0]
// //     const targets = artistData.popularity.slice(1)

// //     return targets.map((target) => ({ source, target }))
// //   })
// // }
// const [data, setData] = useState({
//   nodes: [
//     {
//       id: 1,
//       name: 'Andy',
//       gender: 'male'
//     },
//     {
//       id: 2,
//       name: 'Betty',
//       gender: 'female'
//     }
//     // {
//     //   id: 3,
//     //   name: 'Cate',
//     //   gender: 'female'
//     // },
//     // {
//     //   id: 4,
//     //   name: 'Dave',
//     //   gender: 'male'
//     // },
//     // {
//     //   id: 5,
//     //   name: 'Ellen',
//     //   gender: 'female'
//     // },
//     // {
//     //   id: 6,
//     //   name: 'Fiona',
//     //   gender: 'female'
//     // },
//     // {
//     //   id: 7,
//     //   name: 'Garry',
//     //   gender: 'male'
//     // },
//     // {
//     //   id: 8,
//     //   name: 'Holly',
//     //   gender: 'female'
//     // },
//     // {
//     //   id: 9,
//     //   name: 'Iris',
//     //   gender: 'female'
//     // },
//     // {
//     //   id: 10,
//     //   name: 'Jane',
//     //   gender: 'female'
//     // }
//   ],
//   links: [
//     {
//       source: 1,
//       target: 2
//     }
//     // {
//     //   source: 1,
//     //   target: 1
//     // },
//     // {
//     //   source: 1,
//     //   target: 6
//     // },

//     // {
//     //   source: 2,
//     //   target: 3
//     // },
//     // {
//     //   source: 2,
//     //   target: 7
//     // },
//     // {
//     //   source: 3,
//     //   target: 4
//     // },
//     // {
//     //   source: 8,
//     //   target: 3
//     // },
//     // {
//     //   source: 4,
//     //   target: 5
//     // },
//     // {
//     //   source: 4,
//     //   target: 9
//     // },
//     // {
//     //   source: 5,
//     //   target: 10
//     // }
//   ]
// })
