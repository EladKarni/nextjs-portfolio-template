import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from './Skill.module.scss'

const Skill = ({ faClass, label }) => {
    return (
        <div className={Styles.Skill}>
            <FontAwesomeIcon icon={faClass} size="3x"/>
            <h5>{label}</h5>
        </div>
    )
}

export default Skill