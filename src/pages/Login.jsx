import React, { useState } from 'react'
import login from '../hooks/use-auth'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = (e) => {
        e.preventDefault()
        login(email, password)
    }
    return (
        <div>
            <form onSubmit={loginHandler}>
                <label>Email</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button >Login</button>
            </form>

        </div>
    )
}

export default Login