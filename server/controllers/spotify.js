import { useState } from 'react'

const CLIENT_ID = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_REACT_APP_CLIENT_SECRET

// export function SpotifyData() {
//   const [accesstoken, setAccessToken] = useState('')

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
//         // console.log(data.access_token);
//       } catch (error) {
//         // Handle any error that occurs during the fetch request
//         console.error('Error:', error)
//       }
//     }

//     getToken()
//   }, [])
// }

export const SpotifyData = async () => {
  const [accessToken, setAccessToken] = useState('')

  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', authParameters)
    const data = await response.json()

    setAccessToken(data.access_token)
    // console.log(data.access_token);
  } catch (error) {
    // Handle any error that occurs during the fetch request
  }

  const artistParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  }

  return artistParams // Export the artistParams object
}
