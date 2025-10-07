import type { ExtensionImgProps } from '../extensionTypes'

function ImgExtension({ src, alt, style }: ExtensionImgProps) {
    return (
        <>
            <img src={src} className={style} alt={alt} />
        </>
    )
}
export default ImgExtension