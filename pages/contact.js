/* eslint-disable react/display-name */
import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"


export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Contact | Ajinkya's Blog"
          metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
        />
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
            <p>Hi, I’m Ajinkya</p>
          </div>
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li><strong>Email</strong>: <a href="mailto:adtanpure@hotmail.com">adtanpure@hotmail.com</a></li>
              <li><strong>LinkedIn</strong>: <a href="www.linkedin.com/in/ajinkyatanpure">Ajinkya Tanpure</a></li>
              <li><strong>Instagram</strong>: <a href="https://www.instagram.com/__ajinkya__/">__ajinkya__</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
