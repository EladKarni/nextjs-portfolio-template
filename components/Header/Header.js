// import HeaderButton from '../layouts/HeaderButton'
import { info } from '../../content'
import Styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ParticlesBG from '../Particles/ParticlesBG'

const Header = () => {
    
    const toggleDarkMode = () =>  {
        document.documentElement.classList.toggle('dark-mode')
        
        Array.prototype.forEach.call(document.getElementsByClassName('image'), function(el) {
            el.classList.toggle('inverse-dark')
        });

        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
    }

    return (
        <>
            <ParticlesBG />
            <div className={Styles.Header}>
                <div className={Styles.CenterText}>
                    <h1 className={Styles.Name}>{info.name}</h1>
                    <p className={Styles.Slogan}>{info.slogan}</p>
                </div>
                <label id="theme-switcher" className={Styles.Switch}>
                    <input id="mode-switch" onClick={toggleDarkMode} type="checkbox"/>
                    <span className={`${Styles.Slider} ${Styles.Round}`}></span>
                </label>
                <div className={Styles.PortfolioActionBtn}>
                    <a aria-label="call-to-action" href="#about"><button aria-label="call-to-action"><FontAwesomeIcon icon="arrow-circle-down" size="3x" /></button></a>
                </div>
            </div>
        </>
    )
}

export default Header;