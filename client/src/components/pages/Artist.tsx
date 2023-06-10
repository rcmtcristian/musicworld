/* eslint-disable promise/always-return */
import { UserButton, UserProfile } from '@clerk/clerk-react'
import React, { useState, useEffect } from 'react'

// import { SpotifyData } from '../../../../server/controllers/spotify.js'
import { Payment, columns } from '../../../../app/payments/columns'
// import { DataTable } from '../../../../app/payments/data-table'
import TableView from '../../../../app/payments/TableView'
import { Input } from '../ui/input.js'
import { Button } from '../ui/button.js'
import { Badge } from '../ui/badge'

import MusicIcon from '@/Images/Music-icon-search.svg'
import ArtistIcon from '@/Images/artist-icon-search.svg'
import GraphIcon from '@/Images/graph-view.svg'
import Logo from '@/Images/logo-mw.png'
import Square from '@/Images/si_Arrow_left_square.svg'
import TableIcon from '@/Images/table.svg'
/**
 * The ObtainInfo function displays the user's profile image if the user is logged in.
 * @returns The `ObtainInfo` component is returning an image element with the `src` attribute set to
 * the `profileImageUrl` property of the `user` object obtained from the `useUser` hook. The `alt`
 * attribute is set to "profile image" and the image has a class of "h-14 w-14 rounded-full". If there
 * is no `user` object, the
 */

const GroupView = () => {
  return (
    <main className="artist-table-container">
      <div className="flex items-center justify-end">
        <h1 className="text-2xl font-bold">Artist</h1>
        <div className="flex items-center gap-x-4">
          {/* <ObtainInfo /> */}
          <UserButton />
        </div>
      </div>
    </main>
  )
}

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Sam Gellaitry'
    }
  ]
}

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET

function Artist() {
  const [open, setOpen] = useState(true)
  const [selectedDisplayMenu, setSelectedDisplayMenu] = useState('')
  const [selectedMusicMenu, setSelectedMusicMenu] = useState('')
  const [search, setSearch] = useState('')
  const [relatedArtists, setRelatedArtists] = useState<{ name: string, images: { url: string }[] }[]>([]);
  const [genres, setGenres] = useState([])
  const [accesstoken, setAccessToken] = useState('')

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

    // Get request to ge the similar genres
    const handleKeyDown = (event: { key: string }) => {
      // Check for the specific key you want to handle
      if (event.key === 'Enter') {
        // Perform your desired action
        getArtist()
      }
    }

    // Display those results to the user
  }

  // Get request to ge the similar genres

  // Display those results to the user

  const handleKeyDown = (event: { key: string }) => {
    // Check for the specific key you want to handle
    if (event.key === 'Enter') {
      // Perform your desired action
      getArtist()
    }
  }
  const handleSecondarySearch = (artistName: string) => {
    setSearch(artistName)
    getArtist()
  }

  return (
    <main className="artist">
      <div className="sidebar flex ">
        <div
          className={` ${open ? 'w-60' : 'w-20 '} relative h-screen  p-5 pt-8 duration-300`}
          id="sidebar"
        >
          <img
            className={`absolute right-6 top-20 w-7 cursor-pointer
            ${!open && 'rotate-180'}`}
            id="logo-side"
            src={Square}
            onClick={() => setOpen(!open)}
          />
          <div className="flex items-center gap-x-4 " id="search-b">
            <img
              className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
              src={Logo}
            />
          </div>
          <ul className=" pt-10">
            <li>
              <h1
                className={`origin-left text-xl font-medium text-white duration-200 ${
                  !open && 'scale-0'
                }`}
              >
                <span>Search Artist/Album</span>
                <Input
                  type="input"
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button onClick={getArtist}>Search</Button>
                <main className=" w-6/12">
                  {relatedArtists.map((artist, i) => {
                    return (
                      <div key={i} style={{ width: '10rem' }}>
                        <div>
                          <Badge onClick={() => handleSecondarySearch(artist.name)}>
                            {' '}
                            {artist.name}
                          </Badge>
                          <div>
                            {/* {genres.map((genre, i) => {
                              return (
                                <Badge key={i} style={{ background: 'white' }} variant="outline">
                                  {genre}
                                </Badge>
                              )
                            })} */}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </main>
              </h1>
            </li>
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
                  <img src={Square} />
                  <span className={`${!open && 'hidden'} origin-left duration-200 `}>log</span>
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
        {Number(selectedDisplayMenu) === 1 &&
          React.cloneElement(<TableView columns={columns} data={data} />, {
            key: 'TableView'
          })}
      </div>

      <footer className="sidebar-footer fixed inset-x-0 bottom-0 flex flex-row items-end justify-end bg-white py-3 px-5">
        <div className="mr-3">
          <p>This is the footer</p>
        </div>
        <UserButton />
      </footer>
    </main>
  )
}

export default Artist
