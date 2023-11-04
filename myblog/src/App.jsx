import { useState } from 'react'
import { useEffect } from 'react'
import authservice from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authslice'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authservice.getcurrentuser()
      .then((userdata) => {
        if (userdata) {
          // change
          dispatch(login({ userdata }))
        } else {
          dispatch(logout())
      }
      })
    .finally(()=>setloading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        Todo:  <Outlet/>
        </main>
        <Footer/>
      </div>
  </div>
):null

}

export default App
