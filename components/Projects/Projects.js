import Skill from '../Skill/Skill'
import { projects } from '../../content'

import Styles from './Projects.module.scss'

const Projects = () => {
    return (
        <div className={Styles.Projects}>
            <div className={Styles.SectionTitle}>
                <h2>Portfolio</h2>
                <p>Here is a list of my past projects</p>
            </div>
            <div className={Styles.ProjectList}>
                {projects.map((project, index) =>
                    <div key={`${project.title}${index}`} className={Styles.ProjectElement}>
                        <div className={Styles.Preview}>
                            <img
                                src={project.preview}
                                alt="Picture of the author"
                                width={300}
                                height={275}
                            />
                        </div>
                        <div className={Styles.InfoSection}>
                            <div className={Styles.Info}>
                                <h4>{project.title}</h4>
                                <h5>{project.subtitle}</h5>
                                <p>{project.desc}</p>
                            </div>
                            <div className={Styles.SkillIcons}>
                                <div id="Skills" className={Styles.Skills}> 
                                    {project.skills.map((skill) => 
                                        <Skill key={skill.name} faClass={skill.faClass} label={skill.name}/>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects