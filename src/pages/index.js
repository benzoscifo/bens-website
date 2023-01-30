import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
    return (
        <>
            <h1>hello world</h1>
            <p>this page was built {data.site.buildTime}</p>
        </>
    )
}

export default IndexPage

export const query = graphql`
    query {
        site {
            buildTime
        }
    }
`