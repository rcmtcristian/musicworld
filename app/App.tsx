import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, UserButton } from '@clerk/clerk-react'

import Homepage from '../client/src/components/pages/Homepage'
import Login from '../client/src/components/pages/Login'
import Signup from '../client/src/components/pages/Signup'
import Artist from '../client/src/components/pages/Artist'
import NoMatch from '../client/src/components/pages/NoMatch'

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
