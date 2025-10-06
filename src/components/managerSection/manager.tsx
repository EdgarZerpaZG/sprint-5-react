import imgFeatureManager from '/illustration-features-tab-1.svg'
import imgManagerStyles from './imgManager/_imgManager.module.scss'
import ImgManager from './imgManager/imgManager'
import InfoManager  from './infoManager/infoManager'
import styles from './../../_App.module.scss'

function Manager() {
  return (
    <>
      <section>
        <div className={`${styles['d-flex']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['h-100']}`}>
          <InfoManager />
          <div className={`${styles['p-3']}`}>
              <ImgManager src={imgFeatureManager} style={imgManagerStyles['img-monitor']} alt="BookMarks Manager" />
          </div>
        </div>
      </section>
    </>
  )
}
export default Manager