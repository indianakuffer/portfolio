import React from 'react'
import styled from 'styled-components'

const Title = styled.div`

`

export default function ResumeExperience(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      <p>{props.location} | {props.year}</p>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}
