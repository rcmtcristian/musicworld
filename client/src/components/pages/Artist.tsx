import { UserButton, useUser } from '@clerk/clerk-react'
import React, { useState } from 'react'

import TableView from '../TableView'

import Square from '@/Assets/images/si_Arrow_left_square.svg'

import Logo from '@/Assets/images/logo-mw.png'
import MusicIcon from '@/Assets/images/Music-icon-search.svg'
import ArtistIcon from '@/Assets/images/artist-icon-search.svg'
import TableIcon from '@/Assets/images/table.svg'
import GraphIcon from '@/Assets/images/graph-view.svg'

const ObtainInfo = () => {
  const { user } = useUser()

  if (!user) return null

  return (
    <div>
      <img src={user.profileImageUrl} alt="profile image" className="h-14 w-14 rounded-full" />
    </div>
  )
}

const GroupView = () => {
  return (
    <main className="artist-table-container">
      <div className="flex items-center justify-end">
        <h1 className="text-2xl font-bold">Artist</h1>
        <div className="flex items-center gap-x-4">
          <ObtainInfo />
          <UserButton />
        </div>
      </div>
    </main>
  )
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

  return (
    <main className="artist">
      <div className="flex sidebar ">
        <div
          className={` ${open ? 'w-60' : 'w-20 '} relative h-screen  p-5 pt-8 duration-300`}
          id="sidebar"
        >
          <img
            id="logo-side"
            className={`absolute cursor-pointer right-6 top-20 w-7
            ${!open && 'rotate-180'}`}
            src={Square}
            onClick={() => setOpen(!open)}
          />
          <div id="search-b" className="flex items-center gap-x-4 ">
            <img
              src={Logo}
              className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
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
                <span className="text-center">Hoodboi </span>
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
                    <img src={Menu.src} alt={Menu.title} />
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
          React.cloneElement(<TableView />, {
            key: 'TableView'
          })}
      </div>
      <footer className="sidebar-footer -mt-12 flex flex-row items-end justify-end bg-white py-3 px-5 ">
        <p>This is the footer</p>
        <p>wow</p>
      </footer>

      <div className="sidebar-footer -mt-10 px-5 ">
        <UserButton />
      </div>
    </main>
  )
}

export default Artist
