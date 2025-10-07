import styles from './../../../_App.module.scss'
import BtnExtension from './btnExtension/btnExtension'

function BoxExtension() {
    return (
        <>
            <div className={`${styles["col-12"]} ${styles["col-md-4"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["mt-md-0"]} ${styles["h-100"]}`}>
                <div className={`${styles["py-3"]} ${styles["text-align-center"]} ${styles["shadow-card"]} ${styles["mx-3"]}`}>
                    <img className={`${styles["d-block"]} ${styles["mx-auto"]} ${styles["my-3"]}`} src="img/logo-chrome.svg" alt="Logo Google Chrome"/>
                    <p>Add to Chrome</p>
                    <p className={`${styles["text-light"]}`}>Minimum version 62</p>
                    <img className={`${styles["img-fluid"]}`} src="img/bg-dots.svg" alt="Bookmark"/>
                    <div className={`${styles["my-2"]}`}>
                        <BtnExtension href="#" style={"btn-blue"} text="Add & Install Extension" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BoxExtension