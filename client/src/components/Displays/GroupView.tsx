import { UserButton } from '@clerk/clerk-react'

function GroupView() {
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

export default GroupView
