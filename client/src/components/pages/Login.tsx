import { SignedOut, SignIn } from '@clerk/clerk-react'

import Footer from '../Footer'
import Nav from '../Nav'

function Login() {
  return (
    <main data-barba="container" data-barba-namespace="home">
      <Nav />

      <div className="container-two">
        <SignedOut>
          <SignIn />
        </SignedOut>
        <div className="picture-panel" />
      </div>
      <Footer />
    </main>
  )
}

export default Login
