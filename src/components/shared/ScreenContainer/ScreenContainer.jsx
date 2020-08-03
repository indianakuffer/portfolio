import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  position: absolute;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  align-items: ${props => props.align ? props.align : 'flex-start'};
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`

export default function ScreenContainer(props) {
  return (
    <Container direction={props.direction} justify={props.justify} align={props.align}>
      {props.children}
    </Container>
  )
}
