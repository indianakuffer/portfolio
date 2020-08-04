import React, { useState } from 'react'
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
  let [count, forceRerender] = useState(0)
  let [focusedList, setFocusedList] = useState({
    about: false,
    work: false,
    photography: false,
    resume: false,
    games: false,
  })

  const focusIcon = (name) => {
    Object.keys(focusedList).map(key => {
      key === name ? focusedList[key] = true : focusedList[key] = false
    })
    forceRerender(count + 1)
  }

  return (
    <DesktopContainer onClick={() => { props.focusWindow(); focusIcon(); }}>
      <SystemBar />
      <Icon name='about' window='About - Indiana Kuffer' image={'images/icons/astronaut.svg'} initialPos={{ x: 30, y: 40 }} focused={focusedList.about} focusIcon={focusIcon} openWindow={props.openWindow} mousePos={props.mousePos} />
      <Icon name='work' window='Work' image={'images/icons/work.svg'} initialPos={{ x: 30, y: 120 }} focused={focusedList.work} focusIcon={focusIcon} openWindow={props.openWindow} mousePos={props.mousePos} />
      <Icon name='photography' window='Work' image={'images/icons/camera.svg'} initialPos={{ x: 30, y: 200 }} focused={focusedList.photography} focusIcon={focusIcon} openWindow={props.openWindow} mousePos={props.mousePos} />
      <Icon name='resume' window='Work' image={'images/icons/resume.svg'} initialPos={{ x: 30, y: 280 }} focused={focusedList.resume} focusIcon={focusIcon} openWindow={props.openWindow} mousePos={props.mousePos} />
      <Icon name='games' window='Games' image={'images/icons/gameboy.svg'} initialPos={{ x: 30, y: 360 }} focused={focusedList.games} focusIcon={focusIcon} openWindow={props.openWindow} mousePos={props.mousePos} />
    </DesktopContainer>
  )
}
