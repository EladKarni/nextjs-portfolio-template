import React, { useEffect } from 'react';
import Header from '../components/Header/Header'

export default function Home() {

  useEffect(() => {
    if (localStorage.getItem('mode') == 'Dark') {
      document.documentElement.classList.toggle('dark-mode')
      const checkbox = document.getElementById('mode-switch')
      checkbox.checked = true
    }
  }, [])

  return (
    <div className="App">
      <Header/>
    </div>
  )
}
