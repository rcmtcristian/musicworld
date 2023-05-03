import { UserButton } from '@clerk/clerk-react'
import { useState } from 'react'

function Artist() {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Group view', src: 'graph-view' },
    { title: 'table view ', src: 'table-2' },
    { title: 'Toggle Artist', src: 'artist-icon-search', gap: true },
    { title: 'Toggle Music ', src: 'Music-icon-search' }
    // { title: 'Search', src: 'Search' },
    // { title: 'Analytics', src: 'Chart' },
    // { title: 'Files ', src: 'Folder', gap: true },
    // { title: 'Setting', src: 'Setting' }
    // { title: 'UserButton', component: <UserButton /> }
  ]

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
            src="client\src\assets\images\si_Arrow_left_square.svg"
            onClick={() => setOpen(!open)}
          />
          <div id="search-b" className="flex items-center gap-x-4 ">
            <img
              src="client\src\assets\images\logo-mw.png"
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

            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300 
              ${Menu.gap ? 'mt-9' : 'mt-2'}  `}
              >
                <img src={`client/src/assets/images/${Menu.src}.svg`} />
                <span className={`${!open && 'hidden'} origin-left duration-200 `}>
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
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
