import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEye, faDownload, faFolderOpen  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEye, faDownload, faFolderOpen)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
