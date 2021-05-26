import Styles from './BackToTopBtn.module.scss'

function BackToTopBtn() {

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className={Styles.BackToTopBtn} >
            <img id="not-dark" onClick={scrollTo} alt="ScrollUp" title="ScrollUp" width="128" height="128" src="/thor.svg" />
        </div>
    )
}

export default BackToTopBtn
