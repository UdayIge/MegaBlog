import authServices from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
const LogoutButton = ({
  className = '',
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    authServices.logout().then(() => {
      dispatch(logout());
      navigate('/login');
    })
  }
  return (
    <button
      className={`px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${className}`}
      onClick={handleLogout}
    >Logout</button>
  )
}

export default LogoutButton;