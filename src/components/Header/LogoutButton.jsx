import authServices from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authServices.logout().then(() => {
      dispatch(logout());
    })
  }
  return (
    <div
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
    onClick={handleLogout}
    >Logout</div>
  )
}

export default LogoutButton;