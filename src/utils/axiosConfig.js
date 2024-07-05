import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('ACCES_TOKEN')
  config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

axiosInstance.interceptors.response.use((response) => {
  return response
},(error) => {
  const {response} = error;
  if(response.status === 401) {
    localStorage.removeItem('ACCES_TOKEN')
  } 

  throw error
}

)

export default axiosInstance;