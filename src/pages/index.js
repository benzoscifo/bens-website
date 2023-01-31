import React, { useState } from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { RoughNotation } from "react-rough-notation"
import "./index.css"
import { Parallax } from "react-parallax"
import Abstract from "../images/darkBackground.jpg"
import AbstractLight from "../images/backgroundLight.jpg"

const Home = () => {
  const [show] = useState(true)
  return (
    <Layout>
      <Parallax
        className="parallaxImage"
        bgImage={Abstract}
        bgImageAlt="argos logo"
        strength={800}
      >
        <section className="content text-gray-700 body-font my-0 md:my-20">
          <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
            <div className="w-full lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className=" sm:text-4xl text-3xl mb-32 font-medium text-gray-400">
                I build web pages to be sleek, sharp and{" "}
                <RoughNotation type="underline" show={show} color={"red"}>
                  Sustainable
                </RoughNotation>
              </h1>

              <div className="flex w-full lg:w-1/4 justify-center pb-6">
                <Link
                  className="block w-full text-center bg-darkPastelGreen text-white font-bold hover:text-pastelGreen border-2 border-darkPastelGreen py-2 px-6 hover:bg-white rounded text-lg"
                  to="/caseStudies"
                >
                  My work
                </Link>
              </div>
            </div>
            <div className="w-full lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-lg mb-20">
              <Link to="/about">
                <StaticImage
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="../images/benjamin.jpg"
                  rotate="90"
                />
              </Link>
            </div>
            <div className="flex justify-center absolute left-1/2 bottom-40 md:inline hidden">
              <div className="animate-bounce bg-greyWhite dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-white dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <StaticImage
                  src="../images/down-arrow.svg"
                  width={45}
                  aspectRatio={1}
                />
              </div>
            </div>
          </div>
        </section>
      </Parallax>
      <Parallax
        className="parallaxImage"
        bgImage={AbstractLight}
        bgImageAlt="background lite"
        strength={800}
      >
        <section className="content text-gray-700 body-font">
          <div className="flex flex-wrap mx-auto pb-20 px-6 w-full max-w-screen-xl">
            <div className="flex flex-col text-center w-full mb-8 sm:mb-16">
              <h2 className="sm:text-3xl text-2xl font-semibold text-white mt-20">
                Projects
              </h2>
            </div>
            <div className="mini-card-grid overflow-x-scroll sm:overflow-hidden">
              <article
                className="mini-card module module-article article"
                id="mini-post-342750"
              >
                <time
                  datetime="2021-06-23"
                  title="Originally published Jun 23, 2021"
                >
                  <strong>Project</strong> Mar 01, 2022{" "}
                </time>
                <h3 className="mini-card-title">
                  Next: Fashion, Kids and Homeware Store
                </h3>
                <Link className="pt-4" to="/caseStudies/next">
                  <StaticImage
                    src="../images/next-home.png"
                    layout="constrained"
                    className="rounded-lg"
                  />
                </Link>
                <div className="author-row">
                  <Link className="author-name" to="/caseStudies/next">
                    Heuristic Evaluation{" "}
                  </Link>
                </div>
              </article>
              <article
                className="mini-card module module-article article"
                id="mini-post-342448"
              >
                <time
                  datetime="2021-06-23"
                  title="Originally published Jun 23, 2021"
                >
                  <strong>Project</strong> 14 Feb 2022{" "}
                </time>
                <h3 className="mini-card-title">
                  British Broadcasting Corporation News
                </h3>
                <Link to="/caseStudies/bbc">
                  <StaticImage
                    src="../images/bbc-home.png"
                    layout="constrained"
                    className="rounded-lg"
                  />
                </Link>
                <div className="author-row">
                  <Link className="author-name" to="/caseStudies/bbc">
                    Accessibility Evaluation{" "}
                  </Link>
                </div>
              </article>
              <article
                className="mini-card module module-article article"
                id="mini-post-342448"
              >
                <time
                  datetime="2021-06-23"
                  title="Originally published Jun 23, 2021"
                >
                  <strong>Project</strong> Feb 23, 2022{" "}
                </time>
                <h3 className="mini-card-title">
                  An app to help employers during the hiring process
                </h3>
                <Link to="/caseStudies/bloodhound">
                  <StaticImage
                    src="../images/bloodhound-home.png"
                    layout="fullWidth"
                    className="rounded-lg"
                  />
                </Link>
                <div className="author-row">
                  <Link className="author-name" to="/caseStudies/bloodhound">
                    Case Study{" "}
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </Parallax>
      <section className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around hidden md:flex">
        <div className="block text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg">
          <a
            href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="block text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg">
          <a
            href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </section>
       <footer class="inline md:hidden w-full bg-darkPastelGreen h-24 rounded-t-lg fixed left-0 bottom-0 flex justify-center items-center text-white text-xl h-screen py-2">
        <div className="flex justify-evenly">
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/" className="underline underline-offset-8">Home</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/caseStudies">Work</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
          <Link to="/about">About</Link>
          </div>
          <div className="border-white px-4 py-3">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default Home
