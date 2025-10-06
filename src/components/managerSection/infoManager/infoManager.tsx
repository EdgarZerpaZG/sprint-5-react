import styles from './../../../_App.module.scss'
import './_infoManager.module.scss'

function InfoManager() {

  return (
    <>

            <div className={`${styles['p-3']}`}>
                <h3 className={`${styles['mb-3']} ${styles['text-align-md-center']}`}>A Simple Bookmark Manager</h3>
                <p className={`${styles['mb-3']} ${styles['text-light']} ${styles['text-align-md-center']}`}>A clean and simple interface to organize your favorite <br className="d-block d-md-none"/>websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className={`${styles['container-fluid']}`}>
                    <div className={`${styles['row']} ${styles['justify-content-center']}`}>
                        <button type="button" className={`${styles['btn-blue']} ${styles['me-3']}`}>Get in on Chrome</button>
                        <button type="button" className={`${styles['btn-light']}`}>Get in on Firefox</button>
                    </div>
                </div>
            </div>
        
    </>
  )
}

export default InfoManager