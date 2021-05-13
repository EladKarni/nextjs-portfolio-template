import Image from 'next/image'
import Skill from '../Skill/Skill'
import { skillsBar } from '../../content'

import Styles from './Projects.module.scss'
const Projects = () => {
    return (
        <>
            <h2>Portfolio</h2>
            <div className={Styles.Projects}>
                <div className={Styles.ProjectElement}>
                    <div className={Styles.Preview}>
                        <Image
                            src="https://via.placeholder.com/400x300"
                            alt="Picture of the author"
                            width={400}
                            height={300}
                        />
                    </div>
                    <div className={Styles.InfoSection}>
                        <div className={Styles.Info}>
                            <h4>Project Title</h4>
                            <h6>Subtitle</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tempus mauris, vel porta nibh. Nullam ut tristique velit. Integer molestie ligula quam, quis tristique velit suscipit lobortis. Suspendisse potenti.</p>
                        </div>
                        <div className={Styles.SkillIcons}>
                            <div id="Skills" className={Styles.Skills}> 
                                {skillsBar.map((skill) => 
                                    <Skill key={skill.name} faClass={skill.faClass} label={skill.name}/>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects