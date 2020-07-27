import React, { useState, useEffect } from 'react'
import ScreenContainer from '../../shared/ScreenContainer/ScreenContainer'
import Window from '../../shared/Window/Window'
import Desktop from '../../Desktop/Desktop'
import About from '../../apps/About/About'

export default function Home() {
  let [mousePos, setMousePos] = useState({ x: null, y: null })
  let [windowList, setWindowList] = useState({
    'About - Indiana Kuffer': {
      size: { x: window.innerWidth / 1.5, y: window.innerHeight / 1.5 },
      app: About,
      open: false,
      focused: false
    },
    'About - Someone Else': {
      size: { x: window.innerWidth / 1.5, y: window.innerHeight / 1.5 },
      app: About,
      open: false,
      focused: false
    },
    'About - No One': {
      size: { x: window.innerWidth / 1.5, y: window.innerHeight / 1.5 },
      app: About,
      open: false,
      focused: true
    },
  })

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const updateMousePosition = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const focusWindow = (title) => {
    let { [title]: current, ...rest } = windowList
    Object.keys(rest).map(window => {
      rest[window].focused = false
    })
    setWindowList({ ...rest, [title]: { ...current, focused: true } })
  }

  const closeWindow = (title) => {
    const { [title]: current, ...rest } = windowList
    setWindowList({ ...rest, [title]: { ...current, open: false } })
  }

  const openWindow = (title) => {
    focusWindow(title)
    const { [title]: current, ...rest } = windowList
    setWindowList({ ...rest, [title]: { ...current, open: true, focused: true } })
  }


  return (
    <ScreenContainer>
      <Desktop openWindow={openWindow} />
      {Object.keys(windowList).map(window => {
        const current = windowList[window]
        if (!current.open) return <></>
        const AppName = current.app
        return <Window title={window} size={current.size} mousePos={mousePos} closeFunction={() => closeWindow(window)} focusFunction={() => focusWindow(window)} focused={current.focused} key={window}><AppName /></Window>
      })}
    </ScreenContainer>
  )
}
