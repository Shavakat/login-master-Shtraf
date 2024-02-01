import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginThunk } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'

const Log = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const nav = useNavigate()

    useEffect(() => {

    }, [authState])

    return (
        authState.error ? <p>{authState.error}</p> :
            authState.loading ? <p>Loading...</p> :
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    gap: '8px'
                }}>
                    <div className="header">

                        <img className='logo' src="./src/assets/logo.png" alt="logo" /><div className="title">
                            Штрафам - Да!
                        </div>
                    </div>
                    <div className="container">

                        <input value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }} type="text" />
                        <input value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} type="text" />
                        <button onClick={() => {
                            dispatch(loginThunk({
                                username: username,
                                password: password
                            }))
                        }}>Логин</button>
                    </div>
                </div>

    )
}

export default Log