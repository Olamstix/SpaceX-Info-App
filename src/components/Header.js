import { useState } from "react"
import { Link } from "react-router-dom"
import { SiSpacex } from "react-icons/si"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="absolute flex items-center justify-between w-full">
        <div>
          <Link to="/">
            <SiSpacex className="text-8xl text-white ml-10" />
          </Link>
        </div>
        <nav className= {`${isOpen ? "open" : ""}`}>
          <ul className="mr-20">
            <li>
              <Link to="/capsules" className="text-white text-xl pr-10">
                Capsules
              </Link>
            </li>
            <li>
              <Link to="/rockets" className="text-white text-xl">
                Rockets
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-sm uppercase tracking-wider"
          >
            <div className="w-10">
            {isOpen ? "✖️" : "🍔"}
            </div>
          </button>
        </div>
      </header>
    </>

  )
}
