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
            <a href="#"><img id="not-dark" alt="ScrollUp" title="ScrollUp" width="128" height="128" src="/thor.svg" /></a>
        </div>
    )
}

export default BackToTopBtn
