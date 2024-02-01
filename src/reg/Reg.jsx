import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { regThunk } from '../redux/regSlice'
import { useNavigate } from 'react-router-dom'
import './Reg.css'

const Reg = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const regState = useSelector((state) => state.reg)
    const dispatch = useDispatch()

    const nav = useNavigate()

    useEffect(() => {
        if (regState.message) {
            nav('/auth')
        }
    }, [regState])

    return (

        regState.error ? <p>{regState.error}</p> :
            regState.loading ? <p>Loading...</p> :

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
                        dispatch(regThunk({
                            username: username,
                            password: password
                        }))
                    }}>Регистрация</button>
                </div>
                </div>
    )
}

export default Reg