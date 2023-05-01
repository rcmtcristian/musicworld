import Footer from '../Footer'
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react'
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
