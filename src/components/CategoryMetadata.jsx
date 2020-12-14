// import React from "react"
// import { graphql } from "gatsby"
// import PropTypes from "prop-types"

// const CategoryMetadata = props => {
//   const { categories } = props

//   return (
//     <nav>
//       {categories.map(category => (
//         <div>{category}</div>
//       ))}
//     </nav>
//   )
// }

// CategoryMetadata.propTypes = {
//   categories: PropTypes.string.isRequired, //array?
// }

// export default CategoryMetadata

// export const query = graphql`
//   query CategoryQuery {
//     categories: allMarkdownRemark(limit: 1000) {
//       group(field: frontmatter___category) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `
