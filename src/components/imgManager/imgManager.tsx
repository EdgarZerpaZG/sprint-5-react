import type { ImgManagerProps } from './imgManagerTypes'

function ImgManager({ src, alt, style }: ImgManagerProps) {
  return (
      <img src={src} className={style} alt={alt} />
  )
}

export default ImgManager