import { SignedOut, SignUp } from '@clerk/clerk-react'

import Footer from '../Footer'
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
            height="765"
            src="https://observablehq.com/embed/5e9cc79699e656e5?cells=chart"
            width="100%"
          />

          <div className="smile-container" />

          <h1 className="centered" id="title">
            <span className="fancy">Join and find your world</span>
          </h1>

          <i className="fa-solid fa-chess centered" id="icon" />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Signup
