const vars = {
  // video_url: "http://businessapi.getraventest.com",
  video_url:
    process.env.NODE_ENV === 'development'
      ? 'https://lykluk-videos.herokuapp.com/' //change this for development only
      : 'https://lykluk-videos.herokuapp.com/', // leave this for production

  cloudfront: 'https://d32m6xyka74hb8.cloudfront.net/',
  auth:' https://api.lykluk.com:8080/auth',
  profile: 'https://api.lykluk.com:8083/profile',
  search: 'https://api.lykluk.com:8081/search',
  discover: 'https://api.lykluk.com:8081/discover',
  message: 'https://api.lykluk.com:8085/message',
  sharing: 'https://api.lykluk.com:8084',
  abuse: 'https://api.lykluk.com:8083/abuse'
}

function config() {
  return vars
}

const env = config()

export default env

// https://c7bd-197-242-108-203.eu.ngrok.io
