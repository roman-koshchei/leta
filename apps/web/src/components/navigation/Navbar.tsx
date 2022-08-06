import Image from "next/image"
import Link from "next/link"
import { Button } from "ui"
import { NavLink } from "./NavLink"

const Navbar = () => {
  return (
    <div className="flex justify-between m-3">
      <div className="flex gap-3 items-center">
        <Link href="/">
          <Image width={40} height={40} src="/logo.svg" />
        </Link>
        <NavLink href="/typing">Typing</NavLink>
        <NavLink href="/layouts">Layouts</NavLink>
        <NavLink href="/create">Create own</NavLink>
        <NavLink href="/guide">Guide</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <Button>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
        <Button>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
      </div>
    </div>
  )
}

export { Navbar }