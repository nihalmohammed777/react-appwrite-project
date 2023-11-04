import React from "react"
import { useDispatch } from "react-redux"
import {logout} from "../store/authslice"
import authservice from "../appwrite/auth"

function LogoutBtn() {
    const dispatch = useDispatch()
    const logouthandler = () => {
        authservice.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button
            className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            onClick={logouthandler}
        >Logout</button>
    )
}
export default LogoutBtn