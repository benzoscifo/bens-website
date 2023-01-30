import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

export default function bbc () {
  return (
    <Layout>
      <h1 className="sr-only">Accessibility Review</h1>
      <section className="mt-8 sm:mt-14">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left self-center">
            <div className="pb-6">
              <a
                id="topOfPage"
                className="text-4xl sm:text-6xl text-bbc font-extrabold"
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
              Usinging the Web Content Accessibility Guidelines(WCAG) I focused
              on 10 distinct areas that a website must have to have a good
              accessiblity rating.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          {/* <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-homepage.png"
              className="rounded-lg"
            />
          </div> */}
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6 pb-6">
              1. Keyboard-only
            </h2>
            <p className="text-base sm:text-xl pb-1.5">
              The user should be able to use the keyboard to navigate to page
              elements such as links and forms and in a logical order so the
              user can easily follow.
            </p>
            <p className="text-base sm:text-xl">
              BBC has nicely structured their links and buttons in a logical
              order. A nice touch is that early in the page is a tabbable
              element that links to a specific BBC accessibility help page.{" "}
            </p>
          </div>
        </div>
      </section>
      <section class="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <StaticImage
            alt="mobile images"
            src="../../images/bbc-tab.png"
            className="rounded-lg"
          />
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">
              2. Screen readers
            </h2>
            <p className="text-base sm:text-xl pb-1.5">
              Screen readers help users with visual difficults by reading out
              the content.
            </p>
            <p className="text-base sm:text-xl">
              {" "}
              The BBC news website is well structered with a good heading
              hierarchy and also uses aria roles to give the user a clearer
              understanding of the element they are interacting with.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-screen.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">
              3. Browser zoom
            </h2>
            <p className="text-base sm:text-xl pb-1.5">
              The website should be designed to allow for a zoom range between
              100% and 200% making sure the webpage layout doesn't break or the
              content is unreadable{" "}
            </p>
            <p className="text-base sm:text-xl">
              {" "}
              The BBC News website comfortably allows for the website to be
              zoomed in by 200%. The webpages are responsive and this allows for
              text to wrap and the content to be displayed as like in Tablet
              layout.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl justify-center">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-zoom.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">
              4. No audio
            </h2>
            <p className="text-base sm:text-xl pb-1.5">
              Captions for those who are deaf or hard of hearing enable the
              users to view pre-recorded videos and live presentations.
            </p>
            <p className="text-base sm:text-xl">
              BBC videos have a default setting to show captions and have a
              playback speed control to slow down the content for users that may
              struggle reading the text at normal speed. They also include the
              Name and Role of the person speaking giving the user more context
              to the captions.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-audio.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">
              5. Colour issues
            </h2>
            <p className="text-base sm:text-xl pb-1.5">
              Colour is an important part of design but for some perceiving
              colour can be difficult. This maybe due to colour blindness, older
              users that don't see colour well or partical sighted users. It is
              important that there are others indicators other than colour to
              show an elements state e.g. a text input box with a red border
              indicating an error.
            </p>
            <p className="text-base sm:text-xl">
              BBC has a good contrast ratio making it easy for the user to read
              and for those completely colour bind, the element highlights with
              an underline or border to indicate its state in the absence of
              colour.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-contrast.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">
              6. Basic Structure Check
            </h2>
            <p className="text-base sm:text-xl pb-1.5">
              The heading layout allows for the user to understand the
              organisation of the content on the page and the importance of each
              heading.
            </p>
            <p className="text-base sm:text-xl">
              BBC has a solid heading structure but has several H2 headings
              before the H1 heading that may confuse a first time user.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-headings.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div className="p-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold pb-6">
              7. Font and Typeface
            </h2>
            <p className="text-base sm:text-xl pb-1.5">
              Font and Typeface is vital in accessibility for users with poor
              vision, learning disabilities, aphasia and dyslexia. A well
              thoughout and tested font can provide greater legibility and
              readability.
            </p>
            <p className="text-base sm:text-xl">
              BBC uses its own font called Reith which is a very accessible and
              works across all mediums from the smallest(mobile) to the
              largest(Billboards).
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-24 md:mb-0">
        <div className="flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl">
          <div>
            <StaticImage
              alt="mobile images"
              src="../../images/bbc-white.png"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around hidden md:flex">
        <div className="block text-center text-bbc hover:text-white border-2 border-bbc py-2 px-6 focusring hover:bg-bbc rounded text-base sm:text-xl">
          <a
            href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="block text-center text-bbc hover:text-white border-2 border-bbc py-2 px-6 focusring hover:bg-bbc rounded text-base sm:text-xl">
          <a
            href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </section>
      <footer class="inline md:hidden w-full bg-bbc h-24 rounded-t-lg fixed left-0 bottom-0 flex justify-center items-center text-white text-xl h-screen py-2">
        <div className="flex justify-evenly">
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/caseStudies">Work</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/caseStudies/next">Next</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
          <Link to="/caseStudies/bbc" className="underline underline-offset-8">BBC</Link>
          </div>
          <div className="border-white px-4 py-3">
          <Link to="/caseStudies/bloodhound">Bloodhound</Link>
          </div>
        </div>
      </footer>
      <div className="text-center my-6 hidden md:block">
        <a
          href="#topOfPage"
          className="bg-bbc text-white border-bbc hover:bg-white hover:border-bbc hover:text-bbc rounded-full border p-3"
        >
          <button className="font-bold py-4 px-8">Back to top</button>
        </a>
      </div>
    </Layout>
  )
}
