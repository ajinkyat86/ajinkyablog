/* eslint-disable react/display-name */

import Link from 'next/link'
import { Component } from "react"

export default class extends Component {
  render () {
    return (
      <footer className="footer-wrapper">
        <div className="footer-links">
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
        <div className="footer-bottom-msg">
          <p>Ajinkya Tanpure</p>
        </div>
      </footer>
    )
  }
}
