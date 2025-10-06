import type { FeaturesImgProps } from './featuresTypes'

function ImgFeatures({ src, alt, style }: FeaturesImgProps) {
    return (
        <>
            <img src={src} className={style} alt={alt} />
        </>
    )
}
export default ImgFeatures