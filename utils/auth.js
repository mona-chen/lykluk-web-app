import axios from './axios'

const setAuthToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    axios.auth.defaults.headers.common = {
      app_token: 39839874,
    }

    if (token) {
      for (const keys in axios) {
        // console.log(keys, 'DEFA')
        axios[keys].defaults.headers.common = {
          Authorization: `Bearer ${token}`,
          app_token: 39839874,
        }
      }
    } else {
      if (axios.default) {
        delete axios.defaults.headers.common['Authorization']
      }
    }
  }
}

export default setAuthToken
