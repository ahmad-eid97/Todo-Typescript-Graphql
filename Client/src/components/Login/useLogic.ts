// REACT STUFF
import { useState } from "react"
import { useNavigate } from "react-router-dom";
// VALIDATION
import loginValidation from "./validation";
// API REQUESTS
import { login } from "../../API";
// REACT TOAST
import { successToast, errorToast } from "../../utils/toast";
// TYPES
import { UserTypes } from "../../types";

export function useLogic() {
  const [loginData, setLoginData] = useState<UserTypes.UserInputs>({
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value })
  }

  const loginHandler = async () => {
    const check = loginValidation.safeParse(loginData);
    if (!check.success) {
      check.error.issues.forEach(issue => (
        errorToast(issue.message)
      ))
      return
    }

    await login('auth/login', loginData)
    navigate('/')
  }

  return {
    loginData,
    setLoginData,
    loginHandler,
    handleInputs
  }
}