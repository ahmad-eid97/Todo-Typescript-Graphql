// COMPONENTS
import EditUserData from '../../Popups/EditUserData/EditUserData';
// COMPONENT LOGIC
import { useLogic } from './useLogic';
// STYLES FILES
import './header.scss';

const Header = () => {
  const { currentUserData, logoutHandler, openEdit, setOpenEdit } = useLogic();

  return (
    <div className='header'>
      <div className='user'>
        <img src={currentUserData.picture ? currentUserData.picture : '/images/default.jpg'} alt="user image" loading='lazy' />
        <div>
          <h3>{currentUserData.username}</h3>
          <button onClick={() => setOpenEdit(true)}>Edit</button>
        </div>
      </div>
      <div className='logout' onClick={logoutHandler}>
        <i className="fa-regular fa-right-from-bracket"></i>
      </div>
      {openEdit &&
        <EditUserData setOpenEdit={setOpenEdit} />
      }
    </div>
  )
}

export default Header
