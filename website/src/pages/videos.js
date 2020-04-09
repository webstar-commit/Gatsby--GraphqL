import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import GridCard from '../components/card-grid'
import Row from '../components/row'
import Container from '../components/container'
import { LiteYoutubeStatic } from '../components/youtube'
import { makeVideoPagePath } from '../utils'

const VideosIndexPage = ({ data }) => {
  const videosArray = data.allSanityVideo.edges
  return (
    <Layout
      title="Vidéos"
      description="Quelques vidéos retraçant des bons moments."
      path="/videos/"
    >
      <Container yPadding={true}>
        <h1 className="mb-5">Vidéos</h1>
        <Row>
          {videosArray.map(({ node }) => {
            const { id, title, youtubeId } = node
            return (
              <GridCard key={id} width={100} widthSm={100}>
                <Link to={makeVideoPagePath(title)}>
                  <LiteYoutubeStatic id={youtubeId} />
                  <div className="m-2">
                    <h4>{title}</h4>
                  </div>
                </Link>
              </GridCard>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default VideosIndexPage

export const pageQuery = graphql`
  query MyQuery {
    allSanityVideo {
      edges {
        node {
          id
          title
          youtubeId
        }
      }
    }
  }
`
