import React from 'react'

interface LogoProps {
  src: string,
  alt?: string,
  style?: string
}

function Logo({ src, alt, style }: LogoProps) {
  return (
      <img src={src} className={style} alt={alt} />
  )
}

export default Logo
