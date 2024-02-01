import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import { useSelector } from 'react-redux'
import MainUser from './Page/MainUser.jsx'


const MainPage = () => {

    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)
    const role = useSelector((state) => state.auth.role)

    return (
        <>
            {
                role === "ADMIN" ? <p>УДАЛИТЬ ТОВАР</p> : <MainUser />
            }
            msrifluherui
            <button onClick={() => {
                dispatch(logOut())
            }}>log out</button>
        </>
    )
}

export default MainPage