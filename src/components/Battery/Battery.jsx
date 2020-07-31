import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  img {
    margin-left: 5px;
    height: 11px;
  }
`
const Text = styled.div`
  font-size: 13px;
`

export default function Battery(props) {
  return (
    <Container onClick={props.onClick}>
      <div style={{ 'display': 'flex', 'align-items': 'center' }}>
        <Text>7%</Text>
        <img src={require('../../images/icons/battery.svg')} />
      </div>
      {props.children}
    </Container>
  )
}
