import React from 'react'
import AnimakitExpander from 'animakit-expander'
import styled from 'styled-components'
import YouTube from 'react-youtube'

const ClickableH3 = styled.h3`
  cursor: pointer;
`

const Description = styled.div`
  width: 80%;
`

const CenteredDesc = Description.extend`
  text-align: center;
`

class CurriculumEntry extends React.Component {
  state = {
    expanded: false,
  }

  onClick = () =>
    this.setState({
      expanded: !this.state.expanded,
    })

  render() {
    const { video, article } = this.props,
      { expanded } = this.state

    console.log(video)

    return (
      <div>
        <ClickableH3 onClick={this.onClick}>
          {expanded ? '👇' : '👉'} {video.title.split('|')[0]}
        </ClickableH3>
        {typeof window === 'undefined' ? null : (
          <AnimakitExpander expanded={expanded}>
            <YouTube
              videoId={video.videoId}
              opts={{ width: 640, height: 390 }}
            />
            <Description>Description: {video.description}</Description>

            <Description>
              {article ? (
                <div dangerouslySetInnerHTML={{ __html: article.html }} />
              ) : (
                <p>
                  <em>
                    This is where the companion article with additional
                    exercises shows up. Each around 1,000 words going in-depth
                    into the topic from the video.
                  </em>
                </p>
              )}
            </Description>
            <CenteredDesc>
              <a href="https://gum.co/UVcfs" className="gumroad-button">
                Pre-order Module 1 for $29
              </a>
              <br />
              <small>Companion articles/exercises coming May 2018</small>
              <br />
              <br />or <br />
              <a href="https://gum.co/mDSp" className="gumroad-button">
                Get everything for $19/month
              </a>
              <br />
              <small>New content daily</small>
            </CenteredDesc>
          </AnimakitExpander>
        )}
      </div>
    )
  }
}

export default CurriculumEntry
