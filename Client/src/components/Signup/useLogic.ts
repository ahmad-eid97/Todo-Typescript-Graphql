// REACT STUFF
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// VALIDATION
import signupValidation from "./validation";
// API
import { signup } from "../../API";
// REACT TOAST
import { successToast, errorToast } from "../../utils/toast";
// TYPES
import { UserTypes } from "../../types";

export function useLogic() {
  const [signupData, setSignupData] = useState<UserTypes.UserSignupInputs>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate()

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignupData({ ...signupData, [name]: value });
  };

  const signupHandler = async () => {
    const check = signupValidation.safeParse(signupData);
    if (!check.success) {
      check.error.issues.forEach(issue => {
        errorToast(issue.message)
      })
      return
    }

    await signup('/auth/signup', signupData)
    navigate('/')
  }

  return {
    signupData,
    setSignupData,
    handleInputs,
    signupHandler
  }
}