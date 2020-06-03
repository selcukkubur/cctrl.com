import { graphql } from 'gatsby'
import { get } from 'lodash'
import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Sections from '../components/Sections'

export function IndexPageTemplate({ image, title, cta, sections, heading, subheading, description }) {
    return (
        <>
            <Hero
                cta={cta}
                image={image}
                title={title}
                heading={heading}
                subheading={subheading}
                description={description}
            />
            <div name='content'>
                <Sections sections={sections} />
            </div>
        </>
    )
}

export default function IndexPage({ data }) {
    const { image, title, sections, heading, cta, subheading, description } = get(data, 'markdownRemark.frontmatter')

    return (
        <Layout>
            <IndexPageTemplate
                cta={cta}
                image={image}
                title={title}
                heading={heading}
                sections={sections}
                subheading={subheading}
                description={description}
            />
        </Layout>
    )
}

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 720, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                cta {
                    label
                    link
                }
                heading
                subheading
                sections {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 720, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    title
                    text
                    cta {
                        label
                        link
                    }
                }
            }
        }
    }
`
