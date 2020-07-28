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
    <DesktopContainer onClick={() => props.focusWindow()}>
      <SystemBar />
      <Icon name='about' window='About - Indiana Kuffer' image={'images/icons/envelope.svg'} pos={{ x: 30, y: 40 }} openWindow={props.openWindow} />
      <Icon name='work' window='About - Someone Else' image={'images/icons/envelope.svg'} pos={{ x: 30, y: 120 }} openWindow={props.openWindow} />
      <Icon name='photography' window='About - No One' image={'images/icons/envelope.svg'} pos={{ x: 30, y: 200 }} openWindow={props.openWindow} />
    </DesktopContainer>
  )
}
