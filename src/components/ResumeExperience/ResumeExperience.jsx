import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-weight: bold;
`
const List = styled.ul`
  margin: 0;
  margin-top: 3px;
  margin-bottom: 20px;
  padding-left: 32px;
  list-style-type: none;
  li {
    position: relative;
    &:before {
      content: '◆';
      position: absolute;
      left: -20px;
    }
  }
`

export default function ResumeExperience(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      <div>{props.location} {props.year && '|'} {props.year}</div>
      <List>
        {props.children}
      </List>
    </div>
  )
}
