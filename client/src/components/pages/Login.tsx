function Login() {
  return (
    <main data-barba="container" data-barba-namespace="home">
      <div className="container-two">
        <div className="form-panel">
          <h1>Login</h1>
          <form action="/login" method="POST">
            <div className="form-control">
              <input type="email" name="email" required />
              <label>Email</label>
            </div>
            <div className="form-control">
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            <input className="btn" type="submit" />
            <p className="text">
              Dont have an account? <a href="/signup">Register</a>
            </p>
          </form>
        </div>
        <div className="picture-panel" />
      </div>
    </main>
  )
}

export default Login
