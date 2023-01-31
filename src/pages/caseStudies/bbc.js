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

export default function Next () {
  return (
    <Layout>
      <h1 className="sr-only">Accessibility Review</h1>
      <section className="mt-8 sm:mt-14">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left self-center">
            <div className="pb-6">
              <a
                id="topOfPage"
                className="text-4xl sm:text-6xl font-serif font-extrabold"
              >
                BBC News
              </a>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Accessibility Evaluation
            </h2>
            <p className="pb-4 text-base sm:text-xl">
            I conducted an Accessibility review choosing the UK's most popular
              online news website with an audience of 38.7 million (stat:
              January 2022). Accessibility effects everyone at one time or
              another no matter who you are whether it be a permanent, temporary
              or situational disability.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold">
              The Methodology
            </h2>
            <p className="text-base sm:text-xl">
              Using the Web Content Accessibility Guidelines(WCAG) I focused
              on 10 distinct areas that a website must have to have a good
              accessiblity rating.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto pb-8 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-homepage.png"
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
                    1. Keyboard-only
                    </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                  <p className="text-base sm:text-xl pb-1.5">
                  The user should be able to use the keyboard to navigate to page
              elements such as links and forms and in a logical order so the
              user can easily follow.
                  </p>
                  </span>
                  <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                  <p className="text-base sm:text-xl">
                    {" "}
                    BBC has nicely structured their links and buttons in a logical
              order. A nice touch is that early in the page is a tabbable
              element that links to a specific BBC accessibility help page.{" "}
                  </p>
                  </span>
                  <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
                    <StaticImage
                      alt="mobile images"
                      src="../../images/bbc-tab.png"
                      className="rounded-lg"
                    />
              </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
              2. Screen readers
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                Screen readers help users with visual difficults by reading out
              the content.
            </p>
            </span>
            <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
            <p className="text-base sm:text-xl">
              {" "}
              The BBC news website is well structered with a good heading
              hierarchy and also uses aria roles to give the user a clearer
              understanding of the element they are interacting with.
            </p>
            </span>
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">

            <StaticImage
              alt="mobile images"
              src="../../images/bbc-screen.png"
              className="rounded-lg"
            />
          </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
              3. Browser zoom
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                The website should be designed to allow for a zoom range between
              100% and 200% making sure the webpage layout doesn't break or the
              content is unreadable{" "}
            </p>
            </span>
            <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
            <p className="text-base sm:text-xl">
            {" "}
              The BBC News website comfortably allows for the website to be
              zoomed in by 200%. The webpages are responsive and this allows for
              text to wrap and the content to be displayed as like in Tablet
              layout.
            </p>
            </span>
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-zoom.png"
              className="rounded-lg"
            />
          </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
              4. No audio
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                Captions for those who are deaf or hard of hearing enable the
              users to view pre-recorded videos and live presentations.
            </p>
            </span>
            <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
            <p className="text-base sm:text-xl">
            BBC videos have a default setting to show captions and have a
              playback speed control to slow down the content for users that may
              struggle reading the text at normal speed. They also include the
              Name and Role of the person speaking giving the user more context
              to the captions.
            </p>
            </span>
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-audio.png"
              className="rounded-lg"
            />
          </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
              5. Colour issues
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                Colour is an important part of design but for some perceiving
              colour can be difficult. This maybe due to colour blindness, older
              users that don't see colour well or partical sighted users. It is
              important that there are others indicators other than colour to
              show an elements state e.g. a text input box with a red border
              indicating an error.
            </p>
            </span>
            <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
            <p className="text-base sm:text-xl">
            BBC has a good contrast ratio making it easy for the user to read
              and for those completely colour bind, the element highlights with
              an underline or border to indicate its state in the absence of
              colour.
            </p>
            </span>
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-contrast.png"
              className="rounded-lg"
            />
          </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <span className="text-xl sm:text-2xl font-semibold">
              6. Basic Structure Check
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                The heading layout allows for the user to understand the
              organisation of the content on the page and the importance of each
              heading.
            </p>
            </span>
            <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
            <p className="text-base sm:text-xl">
            BBC has a solid heading structure but has several H2 headings
              before the H1 heading that may confuse a first time user.
            </p>
            </span>
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-heading.png"
              className="rounded-lg"
            />
          </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="flex flex-wrap mx-auto p-5 border-4  w-full max-w-screen-xl">
                    <AccordionItemButton>
                    <span className="text-xl sm:text-2xl font-semibold">
              7. Font and Typeface
            </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
                <p className="text-base sm:text-xl pb-1.5">
                Font and Typeface is vital in accessibility for users with poor
              vision, learning disabilities, aphasia and dyslexia. A well
              thoughout and tested font can provide greater legibility and
              readability.
            </p>
            </span>
            <span className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
            <p className="text-base sm:text-xl">
            BBC uses its own font called Reith which is a very accessible and
              works across all mediums from the smallest(mobile) to the
              largest(Billboards).
            </p>
            </span>
            <div className="flex flex-wrap mx-auto py-8 px-6 w-full max-w-screen-xl">

            <StaticImage
              alt="mobile images"
              src="../../images/bbc-white.png"
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
          className="bg-bbc text-white hover:bg-white hover:border-darkPastelGreen hover:text-darkPastelGreen rounded-full border p-3"
        >
          <button className="font-bold py-4 px-8">Back to top</button>
        </a>
      </div>
      <footer class="inline md:hidden w-full bg-bbcBlue h-24 rounded-t-lg fixed left-0 bottom-0 flex justify-center items-center text-white text-xl h-screen py-2">
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
