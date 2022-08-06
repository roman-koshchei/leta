import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

interface NavLinkProps {
  href: string
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter()

  return (
    <div className={router.pathname.includes(href) ? "text-zinc-900" : "text-zinc-600"}>
      <Link href={href}>
        {children}
      </Link>
    </div>
  )
}

export { NavLink }