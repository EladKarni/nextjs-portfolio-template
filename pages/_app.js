import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEye  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEye)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
