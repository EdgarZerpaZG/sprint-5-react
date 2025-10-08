import type { QuestionsImgProps } from "../questionsTypes";

export default function ImgQuestion({src, alt, style}: QuestionsImgProps) {
    return (
        <>
            <img className={style} src={src} alt={alt} />
        </>
    )
}