import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'

// const Header = dynamic(() => import('../components/Header/Header'))
const About = dynamic(() => import('../components/About/About'))
const Timeline = dynamic(() => import('../components/Timeline/Timeline'))
const Projects = dynamic(() => import('../components/Projects/Projects'))

import Header from '../components/Header/Header'
// import About from '../components/About/About'
// import Projects from '../components/Projects/Projects';
// import Timeline from '../components/Timeline/Timeline';

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
      <Projects />
    </div>
  )
}
