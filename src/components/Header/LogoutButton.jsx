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
    <div
      className={`duration-200 cursor-pointer ${className}`}
      onClick={handleLogout}
    >Logout</div>
  )
}

export default LogoutButton;