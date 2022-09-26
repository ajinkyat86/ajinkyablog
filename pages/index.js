/* eslint-disable react/display-name */

import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

import getFiveNewestPosts from "../api/getFiveNewestPosts.js"

export default class extends Component {
  static async getInitialProps () {
    const apiResult = await getFiveNewestPosts()

    return {
      posts: apiResult && apiResult.posts
    }
  }
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
  title="Ajinkya's Blog"
  metaDescription="Ajinkya is an Entrepreneur, triathlete and extroverted nerd."
/>
        <Header />
        <div className="homepage-container">
       
          <div className="homepage-introduction"></div>
          <h1> Hi There, I&apos;m Ajinkya <a className="intro-logo-image"> 
              <img src="https://i.postimg.cc/rmLZLFCV/ajmemoji.png"/> </a></h1>
          <h2> Entrepreneur, triathlete and extroverted nerd.</h2>
          <p> This started as a side project with 2 goals:</p>
          <p>1) Learn the basics of coding and build something useful</p>
          <p>2) Document my thoughts, ideas and feelings from time to time</p>
        </div>
        <div className="homepage-latest-blog-posts">
          <h2>
            Latest Posts 
            <a className="homepage-latest-blog-posts-view-all" href="/blog"> View All</a>
          </h2>
          
          <div className="homepage-latest-blog-posts-list">
          {
                this.props.posts ?
                this.props.posts.map((post, index) => {
                  return (
                    <a key={index} href={`/blog/${post.urlTitle}`}>
            <div className="homepage-latest-blog-post">
            <div className="homepage-latest-thumbnail">
            <img src={post.thumbnailImageUrl} />
</div>    
<div className="homepage-latest-blog-post-title">
<h3>{post.title}</h3>
                  </div>
                </div>
              </a>
                 )
                }) : null
              }
        </div>
        </div>
       
        

        <Footer />
      </div>
    )
  }
}
