import React, { useState, useEffect } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

    }



    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onClick={(e) => setName(e.target.value)}
                placeholder='username' />

            <input type="text"
                value={password}
                onClick={(e) => setPassword(e.target.value)}
                placeholder='password' />

            <button onClick={handleSubmit}>Submit</button>


        </div>
    )
}

export default Login