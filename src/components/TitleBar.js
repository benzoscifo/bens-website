import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function TitleBar() {
  return (
    <div className="block md:hidden">
      <div className="text-gray-700 body-font border-b border-gray-200 rounded-b-lg">
        <div className="h-full w-auto max-w-screen-xl pt-4 px-10 mx-auto">
          <div className="flex flex-row justify-between">
            <div className="flex justify-start text-center md:text-left">
              <Link
                className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                href="/"
              >
                <div className="flex items-center">
                  {/* <StaticImage
                    src="../images/kangaroo.svg"
                    width={45}
                    aspectRatio={1}
                  /> */}
                  <span className="ml-3 text-xl text-gray-400 hover:text-pastelGreen hover:underline">
                    Benjamin Cranwell
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex flex-row mt-4">
                <a
                href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
                target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                </a>
                <a
                href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
                target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
