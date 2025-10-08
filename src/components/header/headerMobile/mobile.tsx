import style from './../../../_App.module.scss'

export default function HeaderMobile() {
    return (
        <>
            <div className={`${style["d-block"]} ${style["d-md-none"]} ${style["text-left"]} ${style["my-3"]}`}></div>
        </>
    )
}