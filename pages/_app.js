import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/button/style.css'
import '../styles/home/home.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { wrapper } from '../redux/store'
import { Toaster } from 'react-hot-toast'


function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <Provider store={store}>
      <Toaster/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(App)
