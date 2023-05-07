// AXIOS
import axios from '../utils/axios';
// REACT TOAST
import { successToast, errorToast } from '../utils/toast';

interface Response<T> {
  success: boolean;
  data: T;
  message: string;
}

class API {
  public async POST<T>(endpoint: string, body?: any): Promise<Response<T> | undefined | string | null> {
    try {
      const response = await axios.post<Response<T>>(endpoint, body);
      if (!response.data.success) return errorToast(response.data.message);
      return response.data;
    } catch (err: any) {
      errorToast(err.response.data.message ? err.response.data.message : err.message)
    }
  }
}

const api = new API();

export default api;