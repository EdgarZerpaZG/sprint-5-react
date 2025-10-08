import type { FooterImgProps } from "../footerTypes";

export default function ImgFooter({src, style, alt}: FooterImgProps) {
    return (
        <>
            <img className={style} src={src} alt={alt} />
        </>
    )
}