import React from 'react'


const Login = () => {
  return (
        <>
          <div className="box">
            <div className="container">
            <h2>Login</h2>
              Username:<input type="text" placeholder='Username'/>
              Email : <input type="email" placeholder='email'/>
              Password : <input type="password" placeholder='password' />
              <button type="submit">Login</button>

            </div>
          </div>
        </>
  )
}

export default Login
