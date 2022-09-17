interface LogoProps {
  className?: string
}

const Logo = ({ className = 'h-8' }: LogoProps) => {
  return (
    <svg className={`stroke-neutral-900 dark:stroke-white w-min ${className}`} width="307" height="275" viewBox="0 0 307 275" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.1998 212.128L54.9226 48.216C58.27 31.9454 72.5931 20.269 89.2045 20.269L217.456 20.2691C234.067 20.2691 248.391 31.9458 251.738 48.2167L285.457 212.129C289.923 233.839 273.34 254.181 251.175 254.181H55.4818C33.3165 254.181 16.7332 233.839 21.1998 212.128Z" strokeWidth="40" />
      <path d="M30.6274 166.305L49.9532 76.9498C53.4368 60.8434 67.6835 49.3486 84.1623 49.3486L222.498 49.3487C238.977 49.3487 253.224 60.8438 256.707 76.9506L276.031 166.305" strokeWidth="40" />
    </svg>
  )
}

export { Logo }