import Footer from '../Footer'

function Signup() {
  return (
    <main data-barba="container" data-barba-namespace="home">
      <div className="container-two">
        <div className="form-panel">
          <h1>Signup</h1>
          <form action="/signup" method="POST">
            <div className="form-control">
              <input type="text" name="userName" required />
              <label>User Name</label>
            </div>
            <div className="form-control">
              <input type="email" name="email" required />
              <label>Email</label>
            </div>
            <div className="form-control">
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            <div className="form-control">
              <input type="password" name="confirmPassword" required />
              <label>Confirm Password</label>
            </div>
            <input className="btn" type="submit" />
            <p className="text">
              Have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
        <div classNames="picture-panel" />
      </div>
      <Footer />
    </main>
  )
}

export default Signup
