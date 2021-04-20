// import HeaderButton from '../layouts/HeaderButton'
import { header as content } from '../../content'
import Styles from './Header.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye  } from '@fortawesome/free-solid-svg-icons'
import ParticlesBG from '../Particles/ParticlesBG'

const Header = () => {
    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = () =>  {
        document.documentElement.classList.toggle('dark-mode')
        // document.getElementById('not-dark').classList?.toggle('inverse-dark')
        // document.getElementById('not').classList.toggle('inverse-dark')
        let imgPro = document.getElementsByClassName('img-pro')
        for(let i = 0; i < imgPro.length; i += 1) {
            imgPro.item(i).classList.toggle("inverse-dark");
          }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        <div>
            <ParticlesBG />
            <div className={Styles.Header}>
                <div className={Styles.CenterText}>
                    <h1>{content.name}</h1>
                    <p className={[Styles.Slogan, Styles.AnimTypewriter].join(' ')}>{content.slogan}</p>
                </div>
                <label className={Styles.Switch}>
                    <input id="mode-switch" onClick={toggleDarkMode} type="checkbox"/>
                    <span className={`${Styles.Slider} ${Styles.Round}`}></span>
                </label>
                <div className={Styles.PortfolioActionBtn}>
                    <a href="#about"><button>Checkout Portfolio<FontAwesomeIcon icon={faEye} /></button></a>
                </div>
            </div>
            <div className={Styles.BackToTopBtn} >
                <Image onClick={scrollTo} alt="ScrollUp" title="ScrollUp" width="128" height="128" src="/thor.svg" />
            </div>
        </div>
    )
    
}

export default Header;