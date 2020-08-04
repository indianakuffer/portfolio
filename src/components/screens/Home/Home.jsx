import React, { useState, useEffect } from 'react'
import ScreenContainer from '../../shared/ScreenContainer/ScreenContainer'
import Window from '../../shared/Window/Window'
import Desktop from '../../Desktop/Desktop'
import About from '../../apps/About/About'
import Work from '../../apps/Work/Work'
import Games from '../../apps/Games/Games'

export default function Home() {
  let [mousePos, setMousePos] = useState({ x: null, y: null })
  let [count, forceRerender] = useState(0)
  let [windowList, setWindowList] = useState({
    'About - Indiana Kuffer': {
      size: { x: window.innerWidth / 1.2, y: window.innerHeight / 1.2 },
      app: About,
      open: false,
      focused: false
    },
    'Work': {
      size: { x: window.innerWidth / 1.2, y: window.innerHeight / 1.2 },
      app: Work,
      open: false,
      focused: false
    },
    'Games': {
      size: { x: window.innerWidth / 1.2, y: window.innerHeight / 1.2 },
      app: Games,
      open: false,
      focused: false
    }
  })

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const updateMousePosition = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const openWindow = (title) => {
    focusWindow(title)
    const { [title]: current, ...rest } = windowList
    setWindowList({ ...rest, [title]: { ...current, open: true, focused: true } })
  }

  const closeWindow = (title) => {
    const { [title]: current, ...rest } = windowList
    setWindowList({ ...rest, [title]: { ...current, open: false } })
  }

  function focusWindow(title) {
    if (!title) {
      Object.keys(windowList).forEach(key => {
        windowList[key].focused = false
      })
      forceRerender(count + 1)
      return
    }
    let { [title]: chosen, ...rest } = windowList
    Object.keys(rest).map(window => {
      rest[window].focused = false
    })
    setWindowList({ ...rest, [title]: { ...chosen, focused: true } })
  }


  return (
    <ScreenContainer>
      <Desktop openWindow={openWindow} focusWindow={focusWindow} mousePos={mousePos} />
      {Object.keys(windowList).map(window => {
        const current = windowList[window]
        if (!current.open) return <></>
        const AppName = current.app
        return <Window title={window} size={current.size} mousePos={mousePos} closeFunction={() => closeWindow(window)} focusFunction={() => focusWindow(window)} focused={current.focused} key={window}><AppName /></Window>
      })}
    </ScreenContainer>
  )
}
