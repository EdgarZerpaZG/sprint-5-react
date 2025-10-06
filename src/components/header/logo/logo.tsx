import type { LogoProps } from './logoTypes'

function Logo({ src, alt, style }: LogoProps) {
  return (
      <img src={src} className={style} alt={alt} />
  )
}

export default Logo
