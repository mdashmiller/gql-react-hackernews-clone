import React, { useState } from 'react'
import { AUTH_TOKEN } from '../constants'

function Login() {
  const [userData, setUserData] = useState({
    login: true,
    email: '',
    password: '',
    name: '',
  })

  return (
    <div>
      <h4 className="mv3">{userData.login ? 'Login' : 'Sign Up' }</h4>
      <div className="flex flex-column">
        {!userData.login && (
          <input
            value={userData.name}
            onChange={e => setUserData({ name: e.target.value })}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={userData.email}
          onChange={e => setUserData({ email: e.target.value })}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={userData.password}
          onChange={e => setUserData({ password: e.target.value })}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="flex mt3">
          <div className="pointer mr2 button" onClick={() => confirm()}>
          {userData.login ? 'login' : 'create account'}
          </div>
        <div className="pointer button" onClick={() => setUserData({ login: !userData.login })}>
          {userData.login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
      </div>
    </div>
  )
}

const confirm = async () => {

}

const saveUserData = token => {
  localStorage.setItem(AUTH_TOKEN, token)
}

export default Login
