import '../styles/globals.scss'
import '../styles/colors.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHtml5, faReact, faCss3, faJs, faSass, faNode } from '@fortawesome/free-brands-svg-icons'
import { faEye, faDownload, faFolderOpen, faArrowCircleDown  } from '@fortawesome/free-solid-svg-icons'

library.add(faHtml5, faReact, faCss3, faJs, faSass, faNode, faEye, faDownload, faFolderOpen, faArrowCircleDown)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
