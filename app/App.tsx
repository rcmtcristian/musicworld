import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

import Artist from '../client/src/components/pages/Artist'
import Homepage from '../client/src/components/pages/Homepage'
import Login from '../client/src/components/pages/Login'
import NoMatch from '../client/src/components/pages/NoMatch'
import Signup from '../client/src/components/pages/Signup'
// import { Payment, columns } from '../app/payments/columns'
// import { DataTable } from '../app/payments/data-table'

// import Page from './payments/Tables'

const clerk_pub_key = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY

function ClerkProviderWithRoutes() {
  const navigate = useNavigate()

  return (
    <ClerkProvider publishableKey={clerk_pub_key} navigate={(to) => navigate(to)}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedOut>
                <Homepage />
              </SignedOut>
              <SignedIn>
                <Artist />
              </SignedIn>
            </>
          }
        />
        {/* <Route
          path="/page"
          element={
            <>
              <SignedIn>
                <Page />
              </SignedIn>
            </>
          }
        /> */}
        <Route
          path="/login"
          element={
            <SignedOut>
              <Login />
            </SignedOut>
          }
        />

        <Route
          path="/signup"
          element={
            <SignedOut>
              <Signup />
            </SignedOut>
          }
        />
        <Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ClerkProvider>
  )
}

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ClerkProviderWithRoutes />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
