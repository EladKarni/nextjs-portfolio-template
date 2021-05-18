import { info, about, skillsBar} from '../../content'
import Skill from '../Skill/Skill'
import Styles from './About.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    return (
        <>
            <div id="about" className={Styles.About}>
                <div className={Styles.ProfileSkills}>
                    <div className={Styles.ProfileImage}>
                        <img id="not" alt="Picture of the author" width={120} height={120} src={about.profileImage} />
                    </div>
                    {/* <div id="Skills" className={Styles.Skills}> 
                        {skillsBar.map((skill) => 
                            <Skill key={skill.name} faClass={skill.faClass} label={skill.name}/>
                        )}
                    </div> */}
                </div>
                <div className={Styles.AboutMe}>
                    <div className={Styles.AboutText}>
                        <div className={Styles.Title}>
                            <h1 id="About">About Me</h1>
                        </div>
                        <p>
                            {about.aboutText}
                        </p>
                    </div>
                    <div className={Styles.ContactText}>
                        <div className={Styles.Title}>
                            <h1 id="About">Contact Info</h1>
                        </div>
                        <span>
                            {info.name}
                        </span>
                        <span>
                            {info.address}
                        </span>
                        <span>
                            <a href={`tel:${info.phone}`}>{info.phone}</a>
                        </span> 
                        <span>
                            {info.email}
                        </span>
                    </div>
                    <div className={Styles.ResumePortfolioBtns}>
                        <div>
                            <span>
                                <a href="#about"><button>Download Resume<FontAwesomeIcon icon="download" size="lg" /></button></a>
                            </span>
                            <span>
                                <a href="#about"><button>View Portfolio<FontAwesomeIcon icon="folder-open" size="lg" /></button></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
