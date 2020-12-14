// import { Link } from "gatsby"
// import React from "react"
// import PropTypes from "prop-types"

// const CategoryPage = props => {
//   console.log(props, "props")
//   const { slug, name } = props

//   return (
//     <div className="container pt-6 pb-12 md:pt-12">
//       <div className="flex justify-between items-center">
//         <Link to={`/${slug}`}>{name}</Link>

//       </div>
//     </div>
//   )
// }

// export default CategoryPage

// CategoryPage.propTypes = {
//   slug: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// }

// export const query = graphql`
//   query CategoryPage($slug: String) {
//     item: contentfulPortfolio(slug: { eq: $slug }) {
//       name
//       slug
//     }
//   }
// `
