import styles from './../../../_App.module.scss'
import type { FeaturesImgProps } from './featuresTypes'

function ImgFeatures({ src, alt, style }: FeaturesImgProps) {
    return (
        <>
        <div className={`${styles["col-12"]} ${styles["col-md-6"]}`}>
            <div className={`${styles["position-relative"]}`}>
            <img src={src} className={style} alt={alt} />
            </div>
        </div>
        </>
    )
}
export default ImgFeatures