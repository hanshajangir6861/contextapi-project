import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setName] = useState('')
    const [password, setPassword] = useState('')

const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
e.preventDefault()
setUser({username, password})
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