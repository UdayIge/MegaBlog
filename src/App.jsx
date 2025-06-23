import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import authServices from './appwrite/auth.js'
import { login, logout } from './store/authSlice.js'
import './index.css'
import { Footer, Header } from './components/index.js'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() =>{
    authServices.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() =>{
      setLoading(false)
    })
  },[])

  
  
  return !loading ? 
  <div className='min-h-screen w-full flex items-center flex-col text-white bg-slate-700'>
    <Header />
      <main>
        <Outlet />
      </main>
    <Footer />
  </div>
  : 
  null
}

export default App
