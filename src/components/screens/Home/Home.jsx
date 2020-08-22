import React, { useState, useEffect } from 'react'
import ScreenContainer from '../../shared/ScreenContainer/ScreenContainer'
import Window from '../../shared/Window/Window'
import Desktop from '../../Desktop/Desktop'
import About from '../../apps/About/About'
import Work from '../../apps/Work/Work'
import Games from '../../apps/Games/Games'
import Resume from '../../apps/Resume/Resume'
import Photography from '../../apps/Photography/Photography'

export default function Home() {
  let [mousePos, setMousePos] = useState({ x: null, y: null })
  let [count, forceRerender] = useState(0)
  let [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight })
  let [wallpaper, setWallpaper] = useState('https://i.imgur.com/jnzkbCL.jpg')
  // Add new windows below, and import Component above
  let [windowList, setWindowList] = useState({
    'About - Indiana Kuffer': {
      size: { x: windowDimensions.width / 1.2, y: windowDimensions.height / 1.2 },
      app: About,
      open: false,
      focused: false
    },
    'Work': {
      size: { x: windowDimensions.width / 1.2, y: windowDimensions.height / 1.2 },
      app: Work,
      background: '#204d79',
      open: false,
      focused: false
    },
    'Games': {
      size: { x: windowDimensions.width / 1.2, y: windowDimensions.height / 1.2 },
      app: Games,
      background: `#BEBCB7`,
      open: false,
      focused: false
    },
    'Resume': {
      size: { x: windowDimensions.width / 1.5, y: windowDimensions.height / 1.2 },
      app: Resume,
      background: `white`,
      open: false,
      focused: false
    },
    'Photography': {
      size: { x: windowDimensions.width / 1.2, y: windowDimensions.height / 1.2 },
      app: Photography,
      background: `white`,
      open: false,
      focused: false
    },
  })

  useEffect(() => {
    //track mouse position for dragging of windows and icons
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener('resize', updateWindowDimensions)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])

  const updateMousePosition = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const openWindow = (title) => {
    // on window open, set window.open to true and window.focused to true without changing others
    focusWindow(title)
    const { [title]: current, ...rest } = windowList
    setWindowList({ ...rest, [title]: { ...current, open: true, focused: true } })
  }

  const closeWindow = (title) => {
    const { [title]: current, ...rest } = windowList
    setWindowList({ ...rest, [title]: { ...current, open: false } })
  }

  function focusWindow(title) {
    // if title is provided, focus that window. otherwise unfocus all and rerender
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

  const updateWindowDimensions = () => {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
  }


  return (
    <ScreenContainer>
      <Desktop openWindow={openWindow} focusWindow={focusWindow} mousePos={mousePos} wallpaper={wallpaper} />
      {Object.keys(windowList).map(window => {
        const current = windowList[window]
        if (!current.open) return <></>
        const AppName = current.app
        return (
          <Window
            title={window}
            size={current.size}
            background={current.background}
            mousePos={mousePos}
            closeFunction={() => closeWindow(window)}
            focusFunction={() => focusWindow(window)}
            focused={current.focused}
            key={window}>
            <AppName setWallpaper={setWallpaper} />
          </Window>
        )
      })}
    </ScreenContainer>
  )
}
