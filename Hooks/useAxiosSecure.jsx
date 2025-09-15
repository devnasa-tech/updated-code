import axios from 'axios';
import { useMemo } from 'react';

const useAxiosSecure = () => {
  const axiosSecure = useMemo(() => {
    return axios.create({
      baseURL: 'https://y-lac-seven.vercel.app/',
    });
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
