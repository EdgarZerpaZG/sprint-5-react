import type { FooterImgProps } from "../footerTypes";

function ImgFooter({src, style, alt}: FooterImgProps) {
    return (
        <>
            <img className={style} src={src} alt={alt} />
        </>
    )
}
export default ImgFooter