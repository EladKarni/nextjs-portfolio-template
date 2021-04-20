import Image from 'next/image'
import { about as content, skillsBar} from '../../content'
import Skill from '../Skill/Skill'
import Styles from './About.module.scss'

const About = () => {
    return (
        <>
            <div id="about" className={Styles.About}>
                <div className={Styles.ProfileImage}>
                    <Image id="not" alt="Picture of the author" width={200} height={200} src={content.profileImage} />
                </div>
                <div className={Styles.AboutText}>
                    <div className={Styles.Title}>
                        <h1 id="About">About Me</h1>
                    </div>
                    <p>
                        {content.aboutText}
                    </p>
                    <p>
                        {content.aboutText}
                    </p>
                </div>
            </div>
            <div id="Skills" className={Styles.Skills}> 
                {skillsBar.map((skill) => 
                    <Skill faClass={skill.faClass} label={skill.name}/>
                )}
            </div>
        </>
    )
}

export default About
