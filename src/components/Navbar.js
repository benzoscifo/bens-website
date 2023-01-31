import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import icon from '../images/kangaroo.svg'

export default function Navbar() {
  return (
    <div className="hidden md:block">
      <div className="text-gray-700 body-font border-b border-gray-200">
        <div className="h-full w-auto max-w-screen-xl py-4 px-10 mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex justify-center text-center md:text-left">
              <Link
                className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                href="/"
              >
                <div className="flex items-center">
                  <img src={icon} />
                  <span className="ml-3 text-xl text-gray-400 hover:text-pastelGreen hover:underline">
                    Benjamin Cranwell
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <nav className="md:ml-auto flex flex-col space-y-2 sm:space-y-0 md:flex-row items-center text-base">
                <div>
                  <a
                    href="/caseStudies"
                    className="mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"
                  >
                    Case Studies
                  </a>
                </div>
                <div>
                  <a
                    href="/about"
                    className="mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="/contact"
                    className="mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
