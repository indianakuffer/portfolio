import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'
import SystemBar from '../SystemBar/SystemBar'
import NotificationCenter from '../NotificationCenter/NotificationCenter'

const DesktopContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('https://i.imgur.com/jnzkbCL.jpg');
  background-size: cover;
  background-position: center;
`
// Add new icons here
const iconList = [
  {
    name: 'about',
    window: 'About - Indiana Kuffer',
    image: 'images/icons/astronaut.svg',
    initialPos: { x: 30, y: 40 }
  },
  {
    name: 'work',
    window: 'Work',
    image: 'images/icons/work.svg',
    initialPos: { x: 30, y: 120 }
  },
  {
    name: 'photography',
    window: 'Photography',
    image: 'images/icons/camera.svg',
    initialPos: { x: 30, y: 200 }
  },
  {
    name: 'resume',
    window: 'Resume',
    image: 'images/icons/resume.svg',
    initialPos: { x: 30, y: 280 }
  },
  {
    name: 'games',
    window: 'Games',
    image: 'images/icons/gameboy.svg',
    initialPos: { x: 30, y: 360 }
  }
]

export default function Desktop(props) {
  // forceRerender necessary for showing icon focus changes
  // focusedList stores key value pairs of whether or not icon is focused. [iconList.name]: boolean
  let [count, forceRerender] = useState(0)
  let [focusedList, setFocusedList] = useState({})

  useEffect(() => {
    // initialize focusedList based on iconList
    const obj = {}
    iconList.forEach(icon => obj[icon.name] = false)
    setFocusedList(obj)
  }, [])

  const focusIcon = (name) => {
    // unfocus all icons except where name matches
    Object.keys(focusedList).map(key => {
      key === name ? focusedList[key] = true : focusedList[key] = false
    })
    forceRerender(count + 1)
  }

  return (
    <DesktopContainer onClick={() => { props.focusWindow(); focusIcon(); }}>
      <SystemBar />
      <NotificationCenter />
      {iconList.map(icon => {
        return <Icon name={icon.name} window={icon.window} image={icon.image} initialPos={icon.initialPos} focused={focusedList[icon.name]} focusIcon={focusIcon} openWindow={props.openWindow} mousePos={props.mousePos} />
      })}
    </DesktopContainer>
  )
}
