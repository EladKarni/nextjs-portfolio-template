import React, { useEffect } from 'react';
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Timeline from '../components/Timeline/Timeline';

import Styles from '../styles/index.module.scss'
export default function Home() {

  useEffect(() => {
    if (localStorage.getItem('mode') == 'Dark') {
      document.documentElement.classList.toggle('dark-mode')
      const checkbox = document.getElementById('mode-switch')
      checkbox.checked = true
    }
  }, [])

  return (
    <div className={Styles.App}>
      <Header/>
      <About/>
      <Timeline />
    </div>
  )
}
