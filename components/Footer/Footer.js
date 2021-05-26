import Skill from '../Skill/Skill'
import Styles from './Footer.module.scss'

import { footer } from '../../content'

function Footer() {
    return (
        <div className={Styles.Footer}>
            <div className={Styles.Message}>
                {footer.message}
            </div>
        </div>
    )
}

export default Footer