import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`
const Symbol = styled.div`
  background-image: url('${props => require('../../../' + props.image)}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
  height: 16px;
  width: 16px;
`

export default function BarIcon(props) {
  return (
    <Container onClick={props.onClick}>
      <Symbol image={props.image}></Symbol>
      {props.children}
    </Container>
  )
}
