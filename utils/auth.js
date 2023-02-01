import axios from './axios'

const setAuthToken = () => {
  
  if (typeof window !== 'undefined'){
    const token = localStorage.getItem('token')
  
  if (token) {
    for (const keys in axios){
      // console.log(keys, 'DEFA')
      axios[keys].defaults.headers.common = { Authorization: `Bearer ${token}` }
    }
    // axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
  } else {
    if (axios.default){
      delete axios.defaults.headers.common['Authorization']
    }
  }
}}

export default setAuthToken
