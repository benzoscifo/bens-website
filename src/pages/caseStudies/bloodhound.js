import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

export default function bloodhound() {
  return (
    <Layout>
      <h1 className="sr-only">Bloodhound Case Study</h1>
      <section className="mt-8 sm:mt-14">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left self-center">
            <div className="pb-6">
              <a
                id="topOfPage"
                className="text-4xl sm:text-6xl text-bloodhound font-extrabold"
              >
                Bloodhound
                <span className="text-4xl"> app</span>
              </a>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">The Idea</h2>
            <p className="pb-4 text-base sm:text-xl">
              The App is targeted towards Employers enabling them to be aware of
              any online behaviour of their employees or potiental employees
              that may not fit into their company values. With GDPR rules
              rightfully protecting personal information only information that
              is freely available on the web will be displayed.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Project Summary
            </h2>
            <p className="text-base sm:text-xl">
              Beginning with user interviews and understanding the needs of the
              User I defined the problem, ideated several designs, formulated a
              Research Plan, produced Wireframes and finally tested using a
              Prototype.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhoundHero.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6 pb-6">
              Process Summary
            </h2>
            <p className="text-base sm:text-xl">
              Using a User Centered approach I broke down the sections to
              Empathize, Define, Ideate, Prototype and Test. In following this
              process it helped me created user pain points, build affinity maps
              and started coming up with some early design sketches.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
        <StaticImage
          alt="mobile images"
          src="../../images/bloodhound-portfolio.png"
          className="rounded-lg"
        />
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">
              First Drafts
            </h2>
            <p className="text-base sm:text-xl">
              Once I had gathered the initial information I began to draft some
              simple sketches. I was able to quickly put together several pages
              to start fleshing out what a common user journey would look like.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhound-wireframe.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">
              Wireframing
            </h2>
            <p className="text-base sm:text-xl">
              After several drafts of my handwritten sketches I started to put
              together some low fidelity wireframes. I created a couple of
              slightly different versions to test with.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhound-low-fidelity.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">Testing</h2>
            <p className="text-base sm:text-xl">
              I tested using low fidelity wireframes and as I got closer to what
              the final product would look like I made some High Fidelity
              wireframes and Prototypes. I made sure to keep testing using my
              high fidelity designs to make sure I had a product that had
              excellent User Experience.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhound-early.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">
              Final Product
            </h2>
            <p className="text-base sm:text-xl">
              After a vigorous testing cycle I completed my final Design.
              However as this is a minimal viable product (MVP) and I will be
              adding more features, there will be many more testing sessions
              ahead.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-24 md:mb-0">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhound-final.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around hidden md:flex">
        <div className="block text-center text-bloodhound hover:text-white border-2 border-bloodhound py-2 px-6 focusring hover:bg-bloodhound rounded text-lg">
          <a
            href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="block text-center text-bloodhound hover:text-white border-2 border-bloodhound py-2 px-6 focusring hover:bg-bloodhound rounded text-lg">
          <a
            href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </section>
      <footer class="inline md:hidden w-full bg-bloodhound h-24 rounded-t-lg fixed left-0 bottom-0 flex justify-center items-center text-white text-xl h-screen py-2">
        <div className="flex justify-evenly">
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/caseStudies">Work</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/caseStudies/next">Next</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
          <Link to="/caseStudies/bbc">BBC</Link>
          </div>
          <div className="border-white px-4 py-3">
          <Link to="/caseStudies/bloodhound" className="underline underline-offset-8">Bloodhound</Link>
          </div>
        </div>
      </footer>
      <div className="text-center my-6 hidden md:flex">
        <a
          href="#topOfPage"
          className="bg-bloodhound text-white border-bloohound hover:bg-white hover:border-bloodhound hover:text-bloodhound rounded-full border p-3"
        >
          <button className="font-bold py-4 px-8">Back to top</button>
        </a>
      </div>
    </Layout>
  )
}
