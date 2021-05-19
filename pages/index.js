import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'
import Head from 'next/head'

import Header from '../components/Header/Header'

const About = dynamic(() => import('../components/About/About'))
const Timeline = dynamic(() => import('../components/Timeline/Timeline'))
const Projects = dynamic(() => import('../components/Projects/Projects'))



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
      <Head>
        <title>Elad's Resume Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <About/>
      <Timeline />
      <Projects />
    </div>
  )
}
