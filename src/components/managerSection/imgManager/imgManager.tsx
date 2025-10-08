import type { ImgManagerProps } from './imgManagerTypes'

export default function ImgManager({ src, alt, style }: ImgManagerProps) {
  return (
      <img src={src} className={style} alt={alt} />
  )
}