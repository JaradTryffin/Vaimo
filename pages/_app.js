import '../styles/globals.css'
import '../styles/ProductFeed.css'
import '../styles/quantity.css'
import '../styles/footer.css'

import { store } from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
