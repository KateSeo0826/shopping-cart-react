import React, { useState } from 'react'
import signup from '../hooks/use-auth'
function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signupHandler = (e) => {
        e.preventDefault()
        signup(email, password)
    }
    return (
        <div>
            <form>
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
                <button onSubmit={signupHandler}>Sign up</button>
            </form>
        </div>
    )
}

export default Signup