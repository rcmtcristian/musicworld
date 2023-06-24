/* eslint-disable no-console */
/* eslint-disable promise/always-return */

import { UserButton } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'

// import { SpotifyData } from '../../../../server/controllers/spotify.js'
import { Payment, columns } from '../../../../app/payments/columns'
// import { DataTable } from '../../../../app/payments/data-table'
import TableView from '../../../../app/payments/TableView'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button.js'
import { Input } from '../ui/input.js'
import GroupView from '../Displays/GroupView'
import HeaderCounter from '../ui/HeaderCounter'

import MusicIcon from '@/Images/Music-icon-search.svg'
import ArtistIcon from '@/Images/artist-icon-search.svg'
import GraphIcon from '@/Images/graph-view.svg'
import Logo from '@/Images/logo-mw.png'
import Square from '@/Images/sidebar-arrow.svg'
import TableIcon from '@/Images/table.svg'
/**
 * The ObtainInfo function displays the user's profile image if the user is logged in.
 * @returns The `ObtainInfo` component is returning an image element with the `src` attribute set to
 * the `profileImageUrl` property of the `user` object obtained from the `useUser` hook. The `alt`
 * attribute is set to "profile image" and the image has a class of "h-14 w-14 rounded-full". If there
 * is no `user` object, the
 */

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET

function Artist() {
  const [open, setOpen] = useState(true)
  const [selectedDisplayMenu, setSelectedDisplayMenu] = useState('')
  const [selectedMusicMenu, setSelectedMusicMenu] = useState('')
  const [search, setSearch] = useState('')
  const [relatedArtists, setRelatedArtists] = useState<
    { name: string; images: { url: string }[] }[]
  >([])
  const [genres, setGenres] = useState([])
  const [accesstoken, setAccessToken] = useState('')
  const [artistImage, setArtistImage] = useState('')

  const MenuDisplay = [
    { title: 'Group view', src: GraphIcon, gap: true, component: GroupView },
    { title: 'Table view', src: TableIcon, component: TableView }
  ]

  const MenuMusic = [
    { title: 'Toggle Artist', src: ArtistIcon, gap: true },
    { title: 'Toggle Music ', src: MusicIcon }
  ]

  const handleClickDisplay = (index: number | null) => {
    setSelectedDisplayMenu(index !== null ? index.toString() : '')
  }

  const handleClickMusic = (index: number | null) => {
    setSelectedMusicMenu(index !== null ? index.toString() : '')
  }

  // const data = getData()
  const [data, setData] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData()

        setData(result)
        setLoading(false)
      } catch (error) {
        // Handle any errors that occur during data fetching
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const getToken = async () => {
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
        // console.log(response)
      } catch (error) {
        // Handle any error that occurs during the fetch request
        // console.error('Error:', error)
      }
    }

    getToken()
  }, [])

  if (loading) {
    return <div>Loading...</div> // Display a loading state while fetching data
  }

  async function getArtist() {
    console.log(`search for ${search}`)

    // Get request using search to get artist id
    const artistParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accesstoken}`
      }
    }

    console.log(`search for ${search}`)

    // Get request using search to get artist id

    const artistId = await fetch(
      `https://api.spotify.com/v1/search?q=${search}&type=artist`,
      artistParams
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id
      })

    console.log(artistId)

    // Get request using artist id to get related artists
    const relatedArtists = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
      artistParams
    )
      .then((response) => response.json())
      .then((data) => {
        setRelatedArtists(data.artists)
      })

    console.log(relatedArtists)

    // Get request using artist id to get all the genres of the artist
    const genres = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, artistParams)
      .then((response) => response.json())
      .then((data) => {
        // return data.genres
        setGenres(data.genres)
      })

    console.log(genres)

    const artistImage = await fetch(
      `https://api.spotify.com/v1/search?q=${search}&type=artist`,
      artistParams
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].images[0].url
      })

    setArtistImage(artistImage)
  }

  async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    const relatedArtist = relatedArtists.map((artist) => artist.name)
    const artistObject = [
      {
        id: search,
        artist: relatedArtist,
        image: artistImage,
        name: search
      }
    ]

    let existingData: Payment[] = []

    // Retrieve the existing data from Local Storage
    const existingDataJson = localStorage.getItem('data')

    if (existingDataJson) {
      existingData = JSON.parse(existingDataJson)
    }

    const newData = existingData.concat(artistObject) // Concatenate the existing data with the new artist object

    // Store the updated data in Local Storage
    localStorage.setItem('data', JSON.stringify(newData))

    return newData
  }

  const handleGetData = async () => {
    try {
      const result = await getData()

      setData(result)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleKeyDown = (event: { key: string }) => {
    // Check for the specific key you want to handle
    if (event.key === 'Enter') {
      // Perform your desired action
      getArtist()
      handleGetData()
    }
  }
  const handleSearchButton = () => {
    getArtist()
    handleGetData()
    console.log('called 1')
  }
  const handleSecondarySearch = (artistName: string) => {
    setSearch(artistName)
    getArtist()
    handleGetData()
    console.log('called 2')
  }

  function clearData() {
    localStorage.removeItem('data')
    handleGetData()
  }

  return (
    <main className="artist">
      <div className="sidebar flex ">
        <div
          className={` ${open ? 'w-60' : 'w-20 '} relative h-screen  p-5 pt-8 duration-300`}
          id="sidebar"
        >
          <img
            className={`absolute -right-3.5 top-20 w-7 cursor-pointer
            ${!open && 'rotate-180'}`}
            id="logo-side"
            src={Square}
            onClick={() => setOpen(!open)}
          />
          <div
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className={` ${
              open ? 'w-60' : 'w-[40] '
            } bg-paleArt sidebar-top-section border-brown flex items-center gap-x-4 border-b-2`}
            id="search-b"
          >
            <section
              className={`origin-left text-xl font-medium text-white duration-200 ${
                !open && 'scale-0 '
              }`}
            >
              <Input
                className="b-2 border-brown mb-3 border-b-4 bg-transparent text-white placeholder:text-white placeholder:text-opacity-50 focus:border-b-2  focus:outline-none"
                placeholder="Search Artist/Genre"
                type="input"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className="flex justify-between">
                <Button className="bg-brown" onClick={handleSearchButton}>
                  Search
                </Button>
                <Button className="bg-brown " onClick={() => clearData()}>
                  Clear
                </Button>
              </div>

              <main className="mt-3">
                <div className="flex flex-wrap">
                  {relatedArtists.map((artist, i) => (
                    <div key={i} className=" ">
                      <Badge
                        className="flex flex-wrap text-xs"
                        onClick={() => handleSecondarySearch(artist.name)}
                      >
                        {artist.name}
                      </Badge>
                    </div>
                  ))}
                </div>
              </main>
            </section>
          </div>
          <ul className=" pt-10">
            <div>
              <ul>
                {MenuDisplay.map((Menu, index) => (
                  <li
                    key={index}
                    className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300
      ${Menu.gap ? 'mt-9' : 'mt-2'}
      ${selectedDisplayMenu === index.toString() ? 'icon-accent invert' : ''}
    `}
                    onClick={() => handleClickDisplay(index)}
                  >
                    <img alt={Menu.title} src={Menu.src} />
                    <span className={`${!open && 'hidden'} origin-left duration-200 `}>
                      {Menu.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul>
                {MenuMusic.map((Menu, index) => (
                  <li
                    key={index}
                    className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300
                    ${Menu.gap ? 'mt-9' : 'mt-2'}
                    ${selectedMusicMenu === index.toString() ? 'icon-accent invert' : ''}
                    `}
                    onClick={() => handleClickMusic(index)}
                  >
                    <img src={Menu.src} />
                    <span className={`${!open && 'hidden'} origin-left duration-200 `}>
                      {Menu.title}
                    </span>
                  </li>
                ))}
              </ul>
              <ul>
                <li className="mt-9 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300">
                  <UserButton />
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>

      <div>
        {Number(selectedDisplayMenu) === 0 &&
          React.cloneElement(<GroupView />, {
            key: 'GroupView'
          })}
      </div>
      <div>
        {/* {Number(selectedDisplayMenu) === 1 &&
          React.cloneElement(<TableView columns={columns} data={data} />, {
            key: 'TableView'
          })} */}
        <TableView columns={columns} data={data} />
      </div>

      <HeaderCounter />
    </main>
  )
}

export default Artist
