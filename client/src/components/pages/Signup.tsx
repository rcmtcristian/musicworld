import Footer from '../Footer'
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react'
import Nav from '../Nav'
function Signup() {
  return (
    <main data-barba="container" data-barba-namespace="home">
      <Nav />
      <div className="container-two">
        <SignedOut>
          <SignUp />
        </SignedOut>
        <div className="picture-panel-2">
          <iframe
            className="graph"
            width="100%"
            height="765"
            src="https://observablehq.com/embed/5e9cc79699e656e5?cells=chart"
          ></iframe>

          <div className="smile-container" />

          <h1 id="title" className="centered">
            <span className="fancy">Join and find your world</span>
          </h1>

          <i id="icon" className="fa-solid fa-chess centered"></i>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Signup
