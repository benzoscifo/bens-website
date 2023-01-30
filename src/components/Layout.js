import React from "react"
import Navbar from "./Navbar"
import TitleBar from "./TitleBar"

import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout min-h-screen">
      <Navbar />
      <TitleBar />
      <div className="contentBasic"></div>
      {children}
    </div>
  )
}
