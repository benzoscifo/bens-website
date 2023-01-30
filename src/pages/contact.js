import React, { useState } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      setFormData({ 
        name: "", 
        email: "", 
        message: "" 
      })

      setFormSuccess(true)
      setFormSuccessMessage(data.submission_text)
    })
  }

  return (
    <Layout>
      <section className="text-gray-700">
        <div className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl">
            <div className="w-full md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              {formSuccess ? 
                <div>{formSuccessMessage}</div>
                :
              <form accept-charset="UTF-8" method="POST" action="https://www.formbackend.com/f/1ccea131a5f17293" onSubmit={submitForm} className="bg-blue shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label for="name" className="block">
                  <h2 className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 text-lg">
                    Name
                  </h2>
                  <input
                    type="text"
                    name="fullname"
                    onChange={handleInput}
                    value={formData.name}
                    className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter name"
                  />
                </label>
              </div>
              <div className="mb-6">
                <label for="email" className="block">
                  <h2 className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 text-lg">
                    Email
                  </h2>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    value={formData.email}
                    className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter email"
                  />
                </label>
              </div>
              <div className="mb-6">
                <h2 className="sr-only">Message</h2>
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  onChange={handleInput}
                  value={formData.message}
                  placeholder="Your message"
                  className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 leading-8"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-argos text-white rounded p-2 w-full text-lg"
              >
                Submit
              </button>
                </form>
              }
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full self-center text-center md:text-left">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Say hello
            </h2>
            <p className="pb-4 text-lg leading-relaxed">
              Send me a message or an email and we can chat.
            </p>
            <p>
              <b>Email: </b>
              <a
                href="mailto:bdcranwell@gmail.com"
                className="underline text-blue"
              >
                bdcranwell@gmail.com
              </a>
            </p>
          </div>
          </div>
      </section>
      <div className="flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around hidden md:flex">
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
      <footer class="inline md:hidden w-full bg-blue h-24 rounded-t-lg fixed left-0 bottom-0 flex justify-center items-center text-white text-xl h-screen py-2">
        <div className="flex justify-evenly">
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/home">Home</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
            <Link to="/caseStudies">Work</Link>
          </div>
          <div className="border-r-2 border-white px-4 py-3">
          <Link to="/about">About</Link>
          </div>
          <div className="border-white px-4 py-3">
            <Link to="/contact" className="underline underline-offset-8">Contact</Link>
          </div>
        </div>
      </footer>
    </Layout>
  )
}
