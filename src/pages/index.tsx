import type { NextPage } from "next"
import Link from "next/link"
import { BlackWhiteKey, OutlinedButton, Row, Title } from "../components"

/*
page will work as landing page
should include:
- call to action
- Product tagline
- Logos of your biggest clients
- Testimonials
- Product features
- Short instructive videos to promote features
*/

const Home: NextPage = () => {
  return (
    <>
      <Title>Type faster than ever</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 h-full">
        <div className="self-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-5 md:mb-10 md:mr-4">
            Type faster than ever with LETA
          </h1>

          <p className="text-xl md:text-2xl">
            Find keyboard layout for you. <br />
            Try and practice it online. <br />
            Install on your computer.
          </p>
        </div>

        <div className="aspect-[282/52] md:aspect-[282/68] w-[70rem] md:w-[106.25rem] md:self-center">
          <div className="flex flex-col h-full gap-3 md:gap-5">
            <div className="hidden md:flex flex-auto gap-3 md:gap-5 h-16">
              {[...Array(13)].map((_, i) => (
                <BlackWhiteKey key={`num-${i}`} />
              ))}
              <BlackWhiteKey className="w-[8.75rem]" />
            </div>

            <Row>
              <BlackWhiteKey className="w-[6.75rem]" />
              {[...Array(12)].map((_, i) => (
                <BlackWhiteKey key={`top-${i}`} />
              ))}
              <BlackWhiteKey className="w-[6.75rem]" />
            </Row>

            <Row>
              <BlackWhiteKey className="w-[7.75rem]" />
              {[...Array(11)].map((_, i) => (
                <BlackWhiteKey key={`home-${i}`} />
              ))}
              <BlackWhiteKey className="w-[10.5rem]" />
            </Row>

            <Row>
              <Link href={"/create"}>
                <OutlinedButton className="flex-auto w-[10.5rem]">
                  Create own
                </OutlinedButton>
              </Link>
              {[...Array(10)].map((_, i) => (
                <BlackWhiteKey key={`bot-${i}`} />
              ))}
              <BlackWhiteKey className="w-[12.5rem]" />
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
