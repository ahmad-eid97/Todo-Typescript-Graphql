// REACT STUFF
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// API
import { logout } from '../../../API';
// APOLLO STUFF
import { GET_CURRENT_USER } from '../../../graphql/queries';
import { useQuery } from '@apollo/client';
// PACKAGES
import Swal from 'sweetalert2';

export function useLogic() {
  const [openEdit, setOpenEdit] = useState(false)
  const navigate = useNavigate();

  const userData = useQuery(GET_CURRENT_USER)

  const logoutHandler = async () => {
    const result = await Swal.fire({
      title: 'Are You Sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Logout',
    });

    if (result.isConfirmed) {
      await logout('/auth/logout');
      navigate('/login');
    }
  }

  return {
    currentUserData: userData.data.currentUser,
    logoutHandler,
    openEdit,
    setOpenEdit
  }
}