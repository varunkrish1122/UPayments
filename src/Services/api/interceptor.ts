import axios, {AxiosResponse} from 'axios';

type Response = AxiosResponse & {
  statusCode?: number;
  message?: string;
};

axios.interceptors.request.use(
  async (config) => {
    // Here We Can Append Extra Headers and Body if needed as Auth Headers
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response: Response) => {
    // Here We can modify Response for Uniqness throughout Application.
    const {statusCode} = response;
    if (statusCode >= 400) throw Error(response?.message);
    return response;
  },
  (error) => {
    // need to do this check as the response was undefined for Network Error Through Appropriate Message
    return Promise.reject(error);
  }
);

export default axios;
