import ImgFeatures from './imgFeatures/imgFeatures'
import styles from './../../_App.module.scss'
import imgFeaturesStyles from './imgFeatures/imgFeatures.module.scss'
import FeatureOne from '/illustration-features-tab-1.svg'

function Features() {
    return (
        <>
            <section>
                <h3 className={`${styles['text-center']}`}>Features</h3>
                <p className={`${styles['mb-3']} ${styles['text-light']}`}>Our aim is to make it quick and easy for you to access your <br className="d-block d-md-none" />favorite websites. Your bookmarks sync between your devices <br className="d-block d-md-none" />so you can access them on the go</p>
                <div className={`${styles['row']} ${styles['my-5']}`}>
                    <ImgFeatures src={FeatureOne} style={imgFeaturesStyles.imgFeature} alt="Feature 1" />
                    <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['my-md-4']}`}>
                        <div className={`${styles['d-flex']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['h-100']}`}>
                            <div>
                                <h5 className={`${styles["mb-3"]} ${styles["text-align-md-center"]}`}>Bookmark in one click</h5>
                                <p className={`${styles["mb-3"]} ${styles["text-light"]} ${styles["text-align-md-center"]}`}>Organize your bookmarks however you like. Our <br className="d-block d-md-none" />simple drag-and-drop interface gives you complete <br className="d-block d-md-none" />control over how you manage your favorite sites.</p>
                                <button type="button" className={`${styles["btn-blue"]} d-block mx-md-auto`}>More info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Features