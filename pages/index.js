import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'
import Head from 'next/head'

import Header from "../components/Header/Header";

const About = dynamic(() => import("../components/About/About"));
const Timeline = dynamic(() => import("../components/Timeline/Timeline"));
const Projects = dynamic(() => import("../components/Projects/Projects"));



import Styles from '../styles/index.module.scss'
import Footer from '../components/Footer/Footer';
import BackToTopBtn from '../components/BackToTopBtn/BackToTopBtn';
import Contact from '../components/Contact/Contact';

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("mode") == "Dark") {
      document.documentElement.classList.toggle("dark-mode");
      const checkbox = document.getElementById("mode-switch");
      checkbox.checked = true;

      Array.prototype.forEach.call(document.getElementsByClassName('image'), function(el) {
        el.classList.toggle('inverse-dark')
      });
    }
  }, [])

  return (
    <>
      <div className={Styles.App}>
        <Head>
          <title>Template Resume Website</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content='Template resume website that was built Next.JS based off of a CRA project posted by kaustubhai on reddit' />
        </Head>
        <Header/>
        <About/>
        <Timeline />
        <Projects />
        <Contact />
      </div>
      <BackToTopBtn />
      <Footer />
    </>
  )
}
