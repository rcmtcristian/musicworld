import { UserButton } from '@clerk/clerk-react'
import React, { useState, useEffect } from 'react'

import { Payment, columns } from '../../../../app/payments/columns'
// import { DataTable } from '../../../../app/payments/data-table'
import TableView from '../../../../app/payments/TableView'

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

// const ObtainInfo = () => {
//   const { user } = useUser()

//   if (!user) return null

//   return (
//     <div>
//       <img src={user.profileImageUrl} alt="profile image" className="h-14 w-14 rounded-full" />
//     </div>
//   )
// }

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
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Pallas Athene'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Sleep Token'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Sam Gellaitry'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Pallas Athene'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Sleep Token'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Sam Gellaitry'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Pallas Athene'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Sleep Token'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'Schrome sparkss'
    },
    // ...
  ]
}

function Artist() {
  const [open, setOpen] = useState(true)
  const [selectedDisplayMenu, setSelectedDisplayMenu] = useState('')
  const [selectedMusicMenu, setSelectedMusicMenu] = useState('')

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

  if (loading) {
    return <div>Loading...</div> // Display a loading state while fetching data
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
                <input type="text" />
                {/* <span className="text-center">Hoodboi </span> */}
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
        <div className="footer-content">
          <p>This is the footer</p>
          <p>wow</p>
        </div>
      </footer>

      <div className="sidebar-footer -mt-10 px-5 ">
        <UserButton />
      </div>
    </main>
  )
}

export default Artist
