import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'
import SystemBar from '../SystemBar/SystemBar'

const DesktopContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('https://images.unsplash.com/photo-1595252776520-61b1b51a7125');
  background-size: cover;
  background-position: center;
`

export default function Desktop(props) {
  return (
    <DesktopContainer>
      <SystemBar />
      <Icon name='about' image={'images/icons/envelope.svg'} clickFunction={props.showWindow} pos={{ x: 30, y: 40 }} />
      <Icon name='work' image={'images/icons/envelope.svg'} clickFunction={props.showWindow} pos={{ x: 30, y: 120 }} />
      <Icon name='photography' image={'images/icons/envelope.svg'} clickFunction={props.showWindow} pos={{ x: 30, y: 200 }} />
    </DesktopContainer>
  )
}
