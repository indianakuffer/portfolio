import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`
const Symbol = styled.div`
  background-image: url('${props => require('../../../' + props.image)}');
  filter: brightness(0) invert(1);
  height: 16px;
  width: 16px;
`

export default function BarIcon(props) {
  return (
    <Container onClick={props.onClick}>
      {/* <a href={props.url} target='_blank' rel='noreferrer noopener'> */}
      <Symbol image={props.image}></Symbol>
      {/* </a> */}
      {props.children}
    </Container>
  )
}
