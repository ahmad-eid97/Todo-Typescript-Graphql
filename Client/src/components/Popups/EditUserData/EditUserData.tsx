// REACT STUFF
import { useLoaderData } from 'react-router-dom';
// LOGIC
import { useLogic } from './useLogic';
// TYPES
import { User } from '../../../types/user/user';
// STYLES
import './editUserData.scss';
// COMPONENT TYPES
interface CProps {
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const EditUserData = ({ setOpenEdit }: CProps) => {
  const userData = useLoaderData() as User;
  const { user, editUser, chooseImage, fileInputRef, clickFileInput, updateUser } = useLogic({ userData, setOpenEdit });

  return (
    <div className='editUser'>
      <div className="content">
        <i className="fa-regular fa-xmark" onClick={() => setOpenEdit(false)}></i>
        <h2>Update Your Data</h2>
        <div className='image'>
          <img src={typeof user.picture === 'object' && user.picture ? URL.createObjectURL(user.picture) : (user?.picture ? user.picture : '/images/default.jpg')} alt="user image" loading='lazy' />
          <i className="fa-light fa-camera" onClick={clickFileInput}></i>
        </div>
        <input type="file" className='fileField' ref={fileInputRef} onChange={(e) => chooseImage(e)} />
        <input type="text" placeholder='Type your name...' value={user.username} onChange={(e) => editUser('username', e.target.value)} />
        <button onClick={updateUser}>Update Data</button>
      </div>
    </div>
  )
}

export default EditUserData
