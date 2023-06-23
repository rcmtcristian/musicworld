import { UserButton } from '@clerk/clerk-react'

const HeaderCounter = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-[2] flex flex-row items-end    header-counter ">
      <div className="mx-auto max-w-7xl justify-end px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center  ">
          <div className="flex items-center ">
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a
                  className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white"
                  href="#"
                >
                  Total Artist/songs: 300
                </a>
              </div>
            </div>
            {/* <div className="shrink-0 items-center">
            <UserButton />
            </div> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Add your additional elements here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderCounter
