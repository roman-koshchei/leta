import { Key } from './Key'

const BlackWhiteKey = ({ className = 'w-16' }: { className?: string }) => (
  <Key className={`${className} cursor-default bg-neutral-900 dark:bg-white`} />
)

export { BlackWhiteKey }