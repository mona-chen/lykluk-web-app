const vars = {
  // base_url: "http://businessapi.getraventest.com",
  base_url:
    process.env.NODE_ENV === 'development'
      ? 'https://lykluk-videos.herokuapp.com/video' //change this for development only
      : 'https://lykluk-videos.herokuapp.com/video', // leave this for production

  cloudfront: 'https://d32m6xyka74hb8.cloudfront.net/',
}
function config() {
  return vars
}

const env = config()

export default env

// https://c7bd-197-242-108-203.eu.ngrok.io
