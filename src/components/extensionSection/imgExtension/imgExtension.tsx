import type { ExtensionImgProps } from '../extensionTypes'

export default function ImgExtension({ src, alt, style }: ExtensionImgProps) {
    return (
        <>
            <img src={src} className={style} alt={alt} />
        </>
    )
}