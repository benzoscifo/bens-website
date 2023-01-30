import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Projects({ data }) {
  return (
    <Layout>
      <h1 className="sr-only">Case Studies Links</h1>
      <section className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <a
          id="argos"
          className="container mx-auto flex px-5 py-8 sm:py-12 sm:pb-24 md:flex-row flex-col justify-center items-center text-3xl font-semibold"
        >
          <h2 className="md:w-1/2 flex flex-col md:text-left mb-8 sm:mb-16 md:mb-0 items-center text-darkPastelGreen text-center">
            Next
            <Link
              className="block w-full text-center sm:w-1/2 text-white border-2 bg-darkPastelGreen border-darkPastelGreen hover:border-black hover:bg-black py-2 px-6 rounded text-lg mt-6"
              to="/caseStudies/next"
            >
              Heuristic Evaluation
            </Link>
          </h2>
          <div className="md:w-1/2">
            <Link to="/caseStudies/next">
              <StaticImage
                className="object-cover object-center rounded"
                alt="next logo"
                src="../../images/white-Next.png"
                rotate="90"
              />
            </Link>
          </div>
        </a>
      </section>
      <section className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <a
          id="bbc"
          className="container mx-auto flex px-5 py-8 sm:py-12 md:flex-row flex-col items-center"
        >
          <div className="md:w-1/2 sm:order-first order-last">
            <Link to="/caseStudies/bbc">
              <StaticImage
                className="object-cover object-center rounded"
                alt="hero"
                src="../../images/bbc-homepage.png"
                rotate="90"
              />
            </Link>
          </div>
          <h2 className="md:w-1/2 flex flex-col md:text-left mb-8 sm:mb-16 sm:mt-0 md:mb-0 items-center text-center text-bbc text-3xl font-semibold">
            BBC
            <Link
              className="block w-full text-center sm:w-1/2 text-white border-2 hover:border-bbcBlue hover:bg-bbcBlue bg-bbc border-bbc py-2 px-6 rounded text-lg mt-6"
              to="/caseStudies/bbc"
            >
              Accessibility Evaluation
            </Link>
          </h2>
        </a>
      </section>
      <section className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <a
          id="argos"
          className="container mx-auto flex px-5 py-8 sm:py-12 sm:pb-24 md:flex-row flex-col justify-center items-center text-3xl font-semibold"
        >
          <h2 className="md:w-1/2 flex flex-col md:text-left mb-8 sm:mb-16 md:mb-0 items-center text-pastelBlue text-center">
            Bloodhound
            <Link
              className="block w-full text-center sm:w-1/2 text-white border-2 bg-bloodhound border-bloodhound hover:border-pastelBlue hover:bg-pastelBlue py-2 px-6 rounded text-lg mt-6"
              to="/caseStudies/bloodhound"
            >
              Mobile App
            </Link>
          </h2>
          <div className="md:w-1/2 mb-24 md:mb-0">
            <Link to="/caseStudies/bloodhound">
              <StaticImage
                className="object-cover object-center rounded"
                alt="next logo"
                src="../../images/bloodhound-index.png"
                rotate="90"
              />
            </Link>
          </div>
        </a>
      </section>
      <div className="flex flex-wrap mx-auto py-6 px-6 w-full max-w-screen-xl  justify-around hidden md:flex">
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
      </div>
      <footer class="inline md:hidden w-full bg-darkPastelGreen h-24 rounded-t-lg fixed left-0 bottom-0 flex justify-center items-center text-white text-xl h-screen py-2">
        <div className="flex justify-evenly">
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/">Home</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/caseStudies" className="underline underline-offset-8">Work</Link>
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

//export page query
export const query = graphql`
  query {
    caseStudies: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
