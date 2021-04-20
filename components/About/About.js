import Image from 'next/image'
import { about as content} from '../../content'

import Styles from './About.module.scss'

const About = () => {
    return (
        <div id="about" className={Styles.About}>
            <div className={Styles.ProfileImage}>
                <Image alt="Picture of the author" width={200} height={200} src={content.profileImage} />
            </div>
            <div className={Styles.AboutText}>
                <div className={Styles.Title}>
                    <h1 id="About">About Me</h1>
                </div>
                <p>
                    {content.aboutText}
                </p>
            </div>
        </div>
    )
}

export default About
