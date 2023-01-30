import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import "./about.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function about() {
  return (
    <Layout>
      <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <div className="py-10 text-center sm:text-left">
          <p className="text-3xl">
            UX Designer and Front-End Web Developer
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto max-w-screen-xl py-12">
        <div className="md:w-1/2 p-8 text-center sm:text-left">
          <h2 className="text-3xl">Me</h2>
          <p className="text-lg pb-4">
            I am a UX Developer and Front-End Web Developer that has been
            working for a Design and Development Agency in south London for
            the past 7 years. I enjoy spending my time simplifying complex
            designs and improving page load times.
          </p>
          <p className="text-lg pb-4">
            I was born in Ireland to an Irish mother and Kiwi father and have
            two brothers and a sister. I have spent my life split between
            Ireland, New Zealand, Australia and the UK.
          </p>
          <p className="text-lg">
            I now live in North London with my Greek partner and three children
            all the while trying to understand them when they speak Greek to
            me.
          </p>
        </div>
        <div className="md:w-1/2 px-8">
          <StaticImage
            className="object-cover object-center rounded"
            alt="family infront of pirate ship"
            src="../images/pirate.jpg"
            rotate="90"
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto py-6 px-6 w-full max-w-screen-xl justify-around hidden md:flex">
        <div className="block text-center text-white bg-darkPastelGreen hover:text-darkPastelGreen hover:border-darkPastelGreen border-2 border-white py-2 px-6 focusring hover:bg-white rounded text-lg">
          <a
            href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="block text-center text-white bg-darkPastelGreen hover:text-darkPastelGreen hover:border-darkPastelGreen border-2 border-white py-2 px-6 focusring hover:bg-white rounded text-lg">
          <a
            href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </div>
      <footer class="inline md:hidden w-full bg-darkPastelGreen h-24 rounded-t-lg fixed left-0 bottom-0 flex justify-center items-center text-white text-xl h-screen py-2">
        <div className="flex justify-evenly">
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/">Home</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/caseStudies">Work</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
          <Link to="/about" className="underline underline-offset-8">About</Link>
          </div>
          <div className="border-white px-4 py-3">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </Layout>
  )
}
