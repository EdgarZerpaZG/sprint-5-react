import styles from './../../_App.module.scss'
import Tabs from './tabsFeature/tabs'

export default function Features() {
    return (
        <>
            <section className={`${styles["container"]} ${styles["position-relative"]} ${styles["my-4"]} ${styles["py-4"]}`}>
                <h3 className={`${styles['text-center']}`}>Features</h3>
                <p className={`${styles['mb-3']} ${styles['text-light']}`}>Our aim is to make it quick and easy for you to access your <br className="d-block d-md-none" />favorite websites. Your bookmarks sync between your devices <br className="d-block d-md-none" />so you can access them on the go</p>
                <Tabs />
            </section>
        </>
    )
}