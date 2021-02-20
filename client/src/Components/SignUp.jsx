import React from 'react'

export const SignUp = () => {
  return (
    <div className="auth-form">
      <form>
        <label>Email</label>
        <input type="email" placeholder="Email"/>
        <label>Password</label>
        <input type="password" placeholder="Password"/>
      </form>
    </div>
  )
}