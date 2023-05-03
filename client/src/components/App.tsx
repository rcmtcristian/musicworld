import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, UserButton } from '@clerk/clerk-react'

import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Artist from './pages/Artist'
import NoMatch from './pages/NoMatch'

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
        {/* <Route
          path="/artist"
          element={
            <>
              <SignedIn>
                <Artist />
                <UserButton />
              </SignedIn>
            </>
          }
        /> */}
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
