import Styles from './SectionTitle.module.scss'

function SectionTitle({children}) {
    return (
        <div className={Styles.SectionTitle}>
            <h2>
                {children} 
            </h2>
        </div>
    )
}

export default SectionTitle
