import React from 'react'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    console.log(data)

    return ( 
    <Layout>
        <h1>blog</h1>
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li>
                        <Link to={`/blug/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                    </li>
                )
            })}
        </ol>
    </Layout>
    )
}
export default BlogPage