// REACT STUFF
import { useState, useRef } from "react";
import { useLoaderData } from "react-router-dom";
// VALIDATION
import { userDataValidation } from "./validation";
// LOGIC
import { UPDATE_USER } from "../../../graphql/queries";
// APOLLO STUFF
import { useMutation } from "@apollo/client";
// TYPES
import { User } from "../../../types/user/user";
// REACT TOAST
import { successToast, errorToast } from "../../../utils/toast";
// COMPONENT PROPS TYPE
interface CProps {
  userData: User
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
}
interface UpdateData {
  username: string
  picture: string | File
}

export function useLogic({ userData, setOpenEdit }: CProps) {
  const [user, setUser] = useState<UpdateData>({ username: userData.username, picture: userData.picture });
  const currentUserData = useLoaderData() as User;
  const [updateUserData] = useMutation(UPDATE_USER);

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const editUser = (key: string, value: string) => {
    setUser(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const clickFileInput = () => {
    fileInputRef.current?.click()
  }

  const chooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setUser(prev => ({
      ...prev,
      picture: files[0]
    }))
  }

  const updateUser = async () => {
    const check = userDataValidation.safeParse({ username: user.username });
    console.log(check)
    if (!check.success) {
      check.error.issues.forEach(err => {
        errorToast(err.message)
      })
      return
    }
    await updateUserData({
      variables: {
        updateUserDataId: currentUserData._id,
        data: {
          username: user.username,
          ...(user.picture !== currentUserData.picture && { picture: user.picture })
        }
      }
    })
    setOpenEdit(false);
    successToast('Profile updated successfully');
  }

  return {
    user,
    editUser,
    chooseImage,
    fileInputRef,
    clickFileInput,
    updateUser
  }
}