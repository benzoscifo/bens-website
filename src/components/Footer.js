import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <div className="container px-4 py-12 mx-auto text-gray-400">
      <div className="flex justify-around">
        <div>
          <a
            href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  )
}
