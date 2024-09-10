import React from 'react'

const Register = () => {
  return (
    <div>
       <div className="box">
            <div className="container">
            <h2>Register</h2>
              Username:<input type="text" placeholder='Username'/>
              Password : <input type="password" placeholder='password' />
              <button type="submit">Register</button>
            </div>
          </div>
    </div>
  )
}

export default Register
