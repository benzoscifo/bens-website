import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Sustainability() {
  return (
    <Layout>
      <div className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
          <div>
            <StaticImage
              className="object-cover object-center rounded"
              alt="google lighthouse"
              src="../images/lighthouse-logo.png"
              rotate="90"
              layout="constrained"
            />
          </div>
          <div className="self-center">
            <h1 className="title-font sm:text-4xl text-3xl px-5 mt-6 font-medium text-gray-900 pb-6">
              <span className="text-blue font-semibold">U</span>
              <span className="text-argos font-semibold">X</span> and
              <span className="text-orange"> S</span>ustain
              <span className="text-green">a</span>bility
            </h1>
            <p className="mx-20 text-lg">
              <b>UX</b> Deginers can make small decisions early on in the design
              process that can greatly benefit the{" "}
              <span className="text-blue text-lg">user</span>, the{" "}
              <span className="text-green text-lg">planet</span> and the
              development team
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-center py-12 px-8">
          Below are some <span className="text-yellow-400">ideas</span> and an{" "}
          <span className="text-blue">example </span>on how to make{" "}
          <span className="text-argos">your</span> web page more
          <span className="text-green"> sustainable</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
          <div className="p-8">
            <h3 className="text-2xl font-semibold pb-4 text-yellow-400">
              Carousel
            </h3>
            <p className="text-lg">
              Carousels can be very Javascipt heavy which may increase page load
              times
            </p>
            <p className="text-lg">
              They generally have poor accessibility rating
            </p>
            <p className="text-lg pb-8">
              Research shows that they aren't always the best way to present
              home page content{" "}
            </p>
            <StaticImage
              alt="carousel image"
              layout="constrained"
              src="../images/carousel.png"
            />
          </div>
          <div className="self-center text-4xl font-bold">VS</div>
          <div className="pb-14 py-8 sm:pb-8 sm:py-8 px-8">
            <h3 className="text-2xl font-semibold pb-4">
              <span className="text-green">Static</span> Image
            </h3>
            <p className="text-lg">
              Images can be compressed and lazy loaded to reduce size
            </p>
            <p className="text-lg">
              They are easier to made accessible in comparison to carousels
            </p>
            <p className="pb-8 text-lg">
              A well chosen image can more beneficial than several images on
              rotation.
            </p>
            <StaticImage
              height={400}
              alt="yellow car"
              layout="constrained"
              src="../images/lotus.jpeg"
            />
          </div>
        </div>
        <hr></hr>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
          <div className="pt-16 py-8 sm:pt-8 py-8 px-8">
            <h3 className="text-2xl font-semibold pb-4">
              Webpage with <span className="text-orange">multiple</span> videos
            </h3>
            <p className="text-lg">
              Videos are extremely large assests to download and can increase
              load times massively hurting SEO rankings
            </p>
            <p className="pb-8 text-lg">
              Videos that play automatically can be unpleasant for many users
            </p>
            <StaticImage
              alt="carousel image"
              layout="constrained"
              src="../images/multiple-videos.png"
            />
          </div>
          <div className="self-center text-4xl font-bold">VS</div>
          <div className="pb-14 py-8 sm:pb-8 sm:py-8 px-8">
            <h3 className="text-2xl font-semibold pb-4">
              Webpage with a <span className="text-green">single</span> video
            </h3>
            <p className="text-lg">
              Videos can help build a bridge between your brand and your
              customers{" "}
            </p>
            <p className="pb-8 text-lg">
              Videos can be lazy loaded and only downloaded when the user
              presses play{" "}
            </p>

            <StaticImage
              alt="yoga website"
              layout="constrained"
              src="../images/hero-video.jpg"
            />
          </div>
        </div>
        <hr></hr>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
          <div className="pt-16 py-8 sm:pt-8 px-8">
            <h3 className="text-2xl font-semibold pb-4">
              Multiple <span className="text-yellow-400">Images</span>
            </h3>
            <p className="text-lg">
              Images are important for many website in connecting their brand to
              the user however too many images can bloat the webpage size
            </p>
            <p className="pb-8 text-lg">
              As Images are only second to Videos for file size they can
              seriously reduce page load times again hurting your SEO rankings
            </p>
            <StaticImage
              alt="carousel image"
              layout="constrained"
              src="../images/multiple-images.png"
            />
          </div>
          <div className="self-center text-4xl font-bold">VS</div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold pb-4">
              <span className="text-green">Less</span> Images
            </h3>
            <p className="text-lg">
              Images can be compressed to reduce file size
            </p>
            <p className="pb-8 text-lg">
              Images can be lazy loaded to reduce load times but you still
              should be try and reduce the number of images on your website
            </p>
            <StaticImage
              alt="yellow car"
              layout="constrained"
              src="../images/single-image.png"
            />
          </div>
        </div>
      </div>
      <section className="text-gray-900 body-font border-t border-gray-200">
        <h2 className="text-center text-4xl font-semibold text-green px-5 py-8">
          UX Designers and Sustainability
        </h2>
        <h3 className="container text-center sm:text-left text-2xl px-5 text-orange mx-auto justify-center flex">
          <div className="text-2xl font-medium">
            An example of what Designers could do to make their designs more
            sustainable
          </div>
        </h3>
        <div className="container text-gray-900 mx-auto flex px-5 py-10 sm:pt-8 sm:pb-24 md:flex-row flex-col items-center justify-center">
          <div className="w-full md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="font-semibold text-2xl text-gray-900 pb-2">
              Next Clothing Company
            </h3>

            <p className="pb-4 text-lg">
              According to Statisa <i>Next.co.uk</i> is the most visited fashion
              website in the UK, with nearly{" "}
              <span className="text-orange font-bold">50m</span> visits in
              December alone.
            </p>
            <p className="pb-4 text-lg">
              And from the screenshots shown here you can see that Next's
              homepage has an{" "}
              <span className="underline">
                extremely low performance rating
              </span>{" "}
              <span className="text-argos font-bold">(20%)</span> partly due to
              its uncompressed images and therefore having a lousy sustainable
              website
            </p>
            <p className="text-sm text-gray-700 text-lg">
              <b>
                <q className="italic">
                  Cambridge Dictionary defines Sustainable as 'causing, or made
                  in a way that causes, little or no damage to the environment
                  and therefore able to continue for a long time.
                </q>
              </b>
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full text-center sm:text-left">
            <StaticImage
              className="object-cover object-center rounded"
              alt="next retail store"
              src="../images/next-shop.jpeg"
              rotate="90"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center justify-center">
          <div className="w-full md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="text-2xl font-medium text-gray-900 pb-2">
              So how can a UX Designer <span className="text-green">help?</span>
            </h3>

            <p className="pb-4 text-lg">
              Firstly you could reduce the number of images on a page as it will
              reduce the amount of energy needed to transfer and download the
              files from a server.
            </p>
            <p className="pb-4 text-lg">
              However if like the Next website images are vital to the success
              of the company then make sure they are{" "}
              <span className="text-green font-bold">compressed </span>so making
              their file size as small as can be.
            </p>
            <p className="text-lg">
              Another example is to have low resolution images as placeholders
              which are smaller in file size which as mentioned help reduce the
              energy cost on inital page load. Once the low fidelity images are
              loaded they are then replaced by high resolution images.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full text-center sm:text-left">
            <StaticImage
              className="object-cover object-center rounded"
              alt="next retail store"
              src="../images/squoosh.png"
              rotate="90"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around">
        <div className="block text-center text-blue hover:text-white border-2 border-blue py-2 px-6 focusring hover:bg-blue rounded text-lg">
          <a
            href="https://www.linkedin.com/in/benjamin-cranwell-5945101a3"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="block text-center text-blue hover:text-white border-2 border-blue py-2 px-6 focusring hover:bg-blue rounded text-lg">
          <a
            href="https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </div>
    </Layout>
  )
}
