import Skill from '../Skill/Skill'
import { projects } from '../../content'

import Styles from './Projects.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

const Projects = () => {
    return (
        <div id="projects" className={Styles.Projects}>
            <SectionTitle>Projects</SectionTitle>
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