import type { QuestionsImgProps } from "../questionsTypes";

function ImgQuestion({src, alt, style}: QuestionsImgProps) {
    return (
        <>
            <img className={style} src={src} alt={alt} />
        </>
    )
}
export default ImgQuestion