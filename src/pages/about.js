import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
// import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About me
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
              Exploring the world of Javascript and Art.
            </h2>
            <div className="mt-4 leading-loose">
              안녕하세요, 스카잉입니다 <span role="img" aria-label="hifive">🙌</span><br />
              인생을 예술로 대한다면, 어떤 작품을 만들고 싶은가요? <br /><br />
              자신의 시각으로 세상을 해석하는 창작자를 응원하며, <br />1일1창작을 통해 일상을 예술로 만드는 <br />30theart 프로젝트를 운영하고 있습니다. <br /><br />
              <a href="https://30theart.netlify.app/about.html" 
              className="border-gray-500 hover:border-blue-600 hover:text-blue-600"
              >
                <span role="img" aria-label="arrow">👉</span> 30theart 후기 구경하기
              </a>
              <br />
              <br />
              Hi, I'm Skying. <br />
              If the Life is Art, what kind of art would you like to make? 
              <br />
              <br />
              Love every creation made by own point of view, working on a daily creation project '30theart'.
              <br />
              I'm happy to hear from you:
              <br />
              <a
                href="mailto:greenegoode11@gmail.com"
                className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-600"
              >
                greenegoode11@gmail.com
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Skying"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    {/* <Newsletter /> */}
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
