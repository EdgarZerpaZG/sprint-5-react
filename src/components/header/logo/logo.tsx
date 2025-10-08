import type { LogoProps } from './logoTypes'

export default function Logo({ src, alt, style }: LogoProps) {
  return (
      <img src={src} className={style} alt={alt} />
  )
}