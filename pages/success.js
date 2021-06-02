import ParticlesBG from '../components/Particles/ParticlesBG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Styles from '../styles/Success.module.scss'

export default function Success() {
    return (
        <>
            <ParticlesBG />
            <div className={Styles.Header}>
                <div className={Styles.CenterText}>
                    <h1 className={Styles.Name}>Thank you!</h1>
                    <p className={Styles.Slogan}>Your message has been successfully sent. We will contact you very soon!</p>
                    <a href="/"><button>Back To Main Page<FontAwesomeIcon icon="undo" size="lg" /></button></a>
                </div>
            </div>
        </>
    )
}