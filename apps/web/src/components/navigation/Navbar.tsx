import Image from "next/image"
import { Button } from "ui"

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Image src={""} />
        <span className="m-1">
          LETA
        </span>
      </div>
      <div>
        <Button text="Sign Up" />
        <Button text="Sign Up" />
      </div>
    </div>
  )
}

export { Navbar }