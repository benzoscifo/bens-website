
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Bloodhound () {
  return (
    <Layout>
      <h1 className="sr-only">Heuristic evaluation</h1>
      <section className="mt-8 sm:mt-14">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left self-center">
            <div className="pb-6">
              <a
                id="topOfPage"
                className="text-4xl sm:text-6xl font-serif font-extrabold"
              >
                 Bloodhound
                <span className="text-4xl"> app</span>
              </a>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              The Idea
            </h2>
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
        <div className="flex flex-wrap mx-auto pb-8 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhoundHero.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
                    1. Process Summary
                    </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                  <p className="text-base sm:text-xl pb-1.5">
                    Using a User Centered approach I broke down the sections to
                    Empathize, Define, Ideate, Prototype and Test. In following this
                    process it helped me created user pain points, build affinity maps
                    and started coming up with some early design sketches.
                  </p>
                  </span>
                  <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
                    <StaticImage
                      alt="mobile images"
                      src="../../images/bloodhound-portfolio.png"
                      className="rounded-lg"
                    />
              </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
              2. First Drafts
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                Once I had gathered the initial information I began to draft some
              simple sketches. I was able to quickly put together several pages
              to start fleshing out what a common user journey would look like.
            </p>
            </span>
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhound-wireframe.png"
              className="rounded-lg"
            />
          </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
              3. Wireframing
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                After several drafts of my handwritten sketches I started to put
              together some low fidelity wireframes. I created a couple of
              slightly different versions to test with.
            </p>
            </span>
            
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhound-low-fidelity.png"
              className="rounded-lg"
            />
          </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
              4. Testing
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                I tested using low fidelity wireframes and as I got closer to what
              the final product would look like I made some High Fidelity
              wireframes and Prototypes. I made sure to keep testing using my
              high fidelity designs to make sure I had a product that had
              excellent User Experience.
            </p>
            </span>
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhound-early.png"
              className="rounded-lg"
            />
          </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
              5. Final Product
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                After a vigorous testing cycle I completed my final Design.
              However as this is a minimal viable product (MVP) and I will be
              adding more features, there will be many more testing sessions
              ahead.
            </p>
            </span>
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
            <StaticImage
              alt="mobile images"
              src="../../images/bloodhound-final.png"
              className="rounded-lg"
            />
          </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        
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
      <div className="text-center my-6 hidden md:flex justify-center">
        <a
          href="#topOfPage"
          className="bg-bloodhound text-white hover:bg-white hover:border-darkPastelGreen hover:text-darkPastelGreen rounded-full border p-3"
        >
          <button className="font-bold py-4 px-8">Back to top</button>
        </a>
      </div>
      <footer class="inline md:hidden w-full bg-darkPastelGreen h-24 rounded-t-lg fixed left-0 bottom-0 flex justify-center items-center text-white text-xl h-screen py-2">
        <div className="flex justify-evenly">
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/caseStudies">Home</Link>
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
