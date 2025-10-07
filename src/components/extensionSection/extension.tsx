import styles from './../../_App.module.scss'
import stylesExtension from './extension.module.scss'
import ImgExtension from './imgExtension/imgExtension'
import BtnExtension from './btnExtension/btnExtension'
import GoogleImg from '/logo-chrome.svg'
import MozilleImg from '/logo-firefox.svg'
import OperaImg from '/logo-opera.svg'
import DotsImg from '/bg-dots.svg'

function Extension() {
    return (
        <>
            <section>
                <div className={styles["text-center"]}>
                    <h5 className={styles["mb-3"]}>Download the extension</h5>
                    <p className={`${styles["mb-3"]} ${styles["text-light"]}`}>We've got more browsers in the pipeline. Please do let us know if <br className={`${styles["d-block"]} ${styles["d-md-none"]}`} />you've got a favorite you'd like us to prioritize.</p>
                </div>
                <div className={styles["row"]}>
                    <div className={`${styles["col-12"]} ${styles["col-md-4"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["mt-md-0"]} ${styles["h-100"]}`}>
                        <div className={`${styles["py-3"]} ${styles["text-center"]} ${stylesExtension["shadow-card"]} ${styles["mx-3"]}`}>
                            <ImgExtension src={GoogleImg} style={`${styles["d-block"]} ${styles["mx-auto"]} ${styles["my-3"]}`} alt="Logo Google Chrome" />
                            <p>Add to Chrome</p>
                            <p className={`${styles["text-light"]}`}>Minimum version 62</p>
                            <ImgExtension src={DotsImg} style={styles["img-fluid"]} alt="Background Dots" />
                            <div className={styles["my-2"]}>
                                <BtnExtension href="#" style={styles["btn-blue"]} text="Add & Install Extension" />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["col-12"]} ${styles["col-md-4"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["mt-md-0"]} ${styles["h-100"]}`}>
                        <div className={`${styles["py-3"]} ${styles["text-center"]} ${stylesExtension["shadow-card"]} ${styles["mx-3"]}`}>
                            <ImgExtension src={MozilleImg} style={`${styles["d-block"]} ${styles["mx-auto"]} ${styles["my-3"]}`} alt="Logo Mozilla Firefox" />
                            <p>Add to Firefox</p>
                            <p className={styles["text-light"]}>Minimum version 55</p>
                            <ImgExtension src={DotsImg} style={styles["img-fluid"]} alt="Background Dots" />
                            <div className={styles["my-2"]}>
                                <BtnExtension href="#" style={styles["btn-blue"]} text="Add & Install Extension" />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["col-12"]} ${styles["col-md-4"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["mt-md-0"]} ${styles["h-100"]}`}>
                        <div className={`${styles["py-3"]} ${styles["text-center"]} ${stylesExtension["shadow-card"]} ${styles["mx-3"]}`}>
                            <ImgExtension src={OperaImg} style={`${styles["d-block"]} ${styles["mx-auto"]} ${styles["my-3"]}`} alt="Logo Opera" />
                            <p>Add to Opera</p>
                            <p className={styles["text-light"]}>Minimum version 46</p>
                            <ImgExtension src={DotsImg} style={styles["img-fluid"]} alt="Background Dots" />
                            <div className={styles["my-2"]}>
                                <BtnExtension href="#" style={styles["btn-blue"]} text="Add & Install Extension" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Extension