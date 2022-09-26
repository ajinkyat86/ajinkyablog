/* eslint-disable react/display-name */

import Link from 'next/link'
import { Component } from "react"

export default class extends Component {
  render () {
    return (
      <header className="header-wrapper">
        <div className="header-container">
          <div className="header-logo">
            <Link href="/">
      

              
      <a>        <span className="header-logo-text">Ajinkya Tanpure</span> 
            </a>
</Link>
          </div>
          <div className="header-links">
            <Link href="/blog">
<a>Blog </a>
      </Link>

            <Link href="/about">
<a>Why this exists </a>
</Link>
            <Link href="/contact">
<a>Contact </a>
</Link>
          </div>
        </div>
      </header>
    )
  }
}
