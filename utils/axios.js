import axios from 'axios'
import env from '../env'


/** base url to make request to the BE end point */
const instance = {
  video : axios.create({
    baseURL: env.video_url,
  }),
  auth : axios.create({
    baseURL: env.auth,
  }),
  profile : axios.create({
    baseURL: env.profile,
  }),
  search : axios.create({
    baseURL: env.search,
  }),
  discover : axios.create({
    baseURL: env.discover,
  }),
  message : axios.create({
    baseURL: env.message,
  }),
  sharing : axios.create({
    baseURL: env.sharing,
  }),
  abuse : axios.create({
    baseURL: env.abuse,
  })
}

// console.log(env.video_url, process.env.NODE_ENV);

export default instance
