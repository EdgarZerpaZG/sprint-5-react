import type { ExtensionBtnProps } from '../extensionTypes'

function BtnExtension({ href, text, style }: ExtensionBtnProps){
    return (
        <>
            <a href={href} className={`${style}`}>{text}</a>
        </>
    )
}
export default BtnExtension