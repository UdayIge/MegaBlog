import authServices from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    authServices.logout().then(() => {
      dispatch(logout());
      navigate('/login');
    })
  }
  return (
    <div
      className='inline-bock px-6 py-2 duration-200 bg-amber-100 text-slate-950 cursor-pointer hover:bg-blue-100 rounded-full'
      onClick={handleLogout}
    >Logout</div>
  )
}

export default LogoutButton;