import imgFeatureManager from '/illustration-features-tab-1.svg'
import imgManagerStyles from './imgManager/_imgManager.module.scss'
import ImgManager from './imgManager/imgManager'
import InfoManager  from './infoManager/infoManager'
import styles from './../../_App.module.scss'

export default function Manager() {
  return (
    <>
      <section className={`${styles["container"]} ${styles["position-relative"]} ${styles["my-4"]} ${styles["py-4"]}`}>
        <div className={`${styles['row']}`}>
          <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['my-md-4']} ${styles['order-0']} ${styles['order-md-1']}`}>
            <div className={`${styles['d-flex']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['h-100']}`}>
              <InfoManager />
            </div>
          </div>
          <div className={`${styles['col-12']} ${styles['col-md-6']} ${styles['order-1']} ${styles['order-md-0']}`}>
            <div className={`${styles['position-relative']}`}>
                <ImgManager src={imgFeatureManager} style={imgManagerStyles['img-monitor']} alt="BookMarks Manager" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}