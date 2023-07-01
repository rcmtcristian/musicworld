// /* eslint-disable promise/always-return */
// import { useEffect, useState } from 'react'

// import { Payment, columns } from '../.././app/payments/columns'

// const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
// const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET

// export const ArtistData = () => {
//   const [search, setSearch] = useState('')
//   const [relatedArtists, setRelatedArtists] = useState<
//     { name: string; images: { url: string }[]; popularity: number }[]
//   >([])
//   const [genres, setGenres] = useState([])
//   const [accesstoken, setAccessToken] = useState('')
//   const [artistImage, setArtistImage] = useState('')

//   // const data = getData()
//   const [data, setData] = useState<Payment[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getData()

//         setData(result)
//         setLoading(false)
//       } catch (error) {
//         // Handle any errors that occur during data fetching
//         console.error('Error fetching data:', error)
//       }
//     }

//     fetchData()
//   }, [])

//   useEffect(() => {
//     const getToken = async () => {
//       const authParameters = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
//       }

//       try {
//         const response = await fetch('https://accounts.spotify.com/api/token', authParameters)
//         const data = await response.json()

//         setAccessToken(data.access_token)
//         // console.log(response)
//       } catch (error) {
//         // Handle any error that occurs during the fetch request
//         // console.error('Error:', error)
//       }
//     }

//     getToken()
//   }, [])

//   async function getArtist() {
//     // console.log(`search for ${search}`)

//     // Get request using search to get artist id
//     const artistParams = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${accesstoken}`
//       }
//     }

//     console.log(`search for ${search}`)

//     // Get request using search to get artist id

//     const artistId = await fetch(
//       `https://api.spotify.com/v1/search?q=${search}&type=artist`,
//       artistParams
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         return data.artists.items[0].id
//       })

//     // console.log(artistId)

//     // Get request using artist id to get related artists
//     const relatedArtists = await fetch(
//       `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
//       artistParams
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setRelatedArtists(data.artists)
//       })

//     console.log(relatedArtists)

//     // Get request using artist id to get all the genres of the artist
//     const genres = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, artistParams)
//       .then((response) => response.json())
//       .then((data) => {
//         // return data.genres
//         setGenres(data.genres)
//       })

//     console.log(genres)

//     const artistImage = await fetch(
//       `https://api.spotify.com/v1/search?q=${search}&type=artist`,
//       artistParams
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         return data.artists.items[0].images[0].url
//       })

//     setArtistImage(artistImage)
//   }

//   async function getData(): Promise<Payment[]> {
//     // Fetch data from your API here.
//     const relatedArtist = relatedArtists.map((artist) => artist.name)
//     const relatedArtistPopularity = relatedArtists.map((artist) => artist.popularity)
//     const artistObject = [
//       {
//         id: search,
//         artist: relatedArtist,
//         image: artistImage,
//         name: search,
//         popularity: relatedArtistPopularity
//       }
//     ]

//     let existingData: Payment[] = []

//     // Retrieve the existing data from Local Storage
//     const existingDataJson = localStorage.getItem('data')

//     if (existingDataJson) {
//       existingData = JSON.parse(existingDataJson)
//     }

//     const newData = existingData.concat(artistObject) // Concatenate the existing data with the new artist object

//     // Store the updated data in Local Storage
//     localStorage.setItem('data', JSON.stringify(newData))

//     return newData
//   }

//   const handleGetData = async () => {
//     try {
//       const result = await getData()

//       setData(result)
//       setLoading(false)
//     } catch (error) {
//       console.error('Error fetching data:', error)
//     }
//   }

//   return {
//     search,
//     setSearch,
//     relatedArtists,
//     setRelatedArtists,
//     genres,
//     setGenres,
//     data,
//     loading,
//     handleGetData,
//     getArtist,
//     getData,

//   }
// }
