import type { ExtensionBtnProps } from '../extensionTypes'

export default function BtnExtension({ href, text, style }: ExtensionBtnProps){
    return (
        <>
            <a href={href} className={style}>{text}</a>
        </>
    )
}