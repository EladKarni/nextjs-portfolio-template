import About from '../components/About/About'
import Header from '../components/Header/Header'

import Styles from '../styles/index.module.scss'
export default function Home() {
  return (
    <div className={Styles.App}>
      <Header/>
      <About/>
    </div>
  )
}
