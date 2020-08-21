import React, { useState } from 'react'
import styled from 'styled-components'
import BarButtons from '../BarButtons/BarButtons'
import { useSpring, animated } from 'react-spring'
import { easeBackOut } from 'd3-ease'

const WindowContainer = styled(animated.div)`
  position: absolute;
  min-width: 60px;
  min-height: 25px;
  border-radius: 4px;
  box-shadow: 2px 4px 8px rgba(0,0,0,0.25);
  overflow: hidden;
  opacity: ${props => props.focused ? 1 : 0.85};
  background-color: transparent;
  backdrop-filter: blur(8px);
  z-index: ${props => props.focused ? '1' : '0'};
`
const TopBar = styled.div`
  position: fixed;
  background-color: lightgrey;
  border-radius: 4px 4px 0 0;
  display: flex;
  width: inherit;
  min-width: 60px;
  height: 20px;
  z-index: 1;
  user-select: none;
`
const BarTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  overflow: hidden;
  padding-right: 7%;
  span {
    white-space: nowrap;
  }
`
const Contents = styled.div`
  position: absolute;
  display: flex;
  max-height: calc(100% - 20px);
  width: 100%;
  height: 100%;
  top: 20px;
  overflow: auto;
  user-select: ${props => props.resizing || !props.focused ? 'none' : 'unset'};
  background: ${props => props.background ? props.background : 'white'};
`
const ResizeBoth = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: nwse-resize;
  z-index: 3;
  `
const ResizeHeight = styled.div`
  position: absolute;
  bottom: 0;
  height: 10px;
  width: calc(100% - 20px);
  cursor: ns-resize;
  z-index: 3;
  `
const ResizeWidth = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 10px;
  height: calc(100% - 20px - 20px);
  cursor: ew-resize;
  z-index: 3;
`

export default function Window(props) {
  let [size, setSize] = useState(props.size)
  let [position, setPosition] = useState({ x: window.innerWidth / 2 - props.size.x / 2, y: window.innerHeight / 2 - props.size.y / 2 })
  let [distance, setDistance] = useState({ x: 0, y: 0 })
  let [resizingWidth, setResizingWidth] = useState(false)
  let [resizingHeight, setResizingHeight] = useState(false)
  let [movingWindow, setMovingWindow] = useState(false)
  let [clickedOnce, setClickedOnce] = useState(false)

  const openSpring = useSpring({
    from: { transform: 'scale(0.5)' },
    to: { transform: 'scale(1)' },
    config: { clamp: false, friction: 28, tension: 500, easing: (t) => easeBackOut(t) }
  })

  if (movingWindow) {
    if (position.x !== props.mousePos.x - distance.x) {
      setPosition({ x: props.mousePos.x - distance.x, y: props.mousePos.y - distance.y })
    }
  }
  if (resizingWidth) {
    if (size.x !== props.mousePos.x - distance.x) {
      setSize({ x: props.mousePos.x - distance.x, y: size.y })
    }
  }
  if (resizingHeight) {
    if (size.y !== props.mousePos.y - distance.y) {
      setSize({ x: size.x, y: props.mousePos.y - distance.y })
    }
  }

  const maxSize = () => {
    if (size.x === window.innerWidth && size.y === window.innerHeight - 20) {
      setSize({ x: window.innerWidth / 1.2, y: window.innerHeight / 1.2 })
      setPosition({ x: (window.innerWidth - window.innerWidth / 1.2) / 2, y: (window.innerHeight - window.innerHeight / 1.2) / 2 })
      return
    }
    setSize({ x: window.innerWidth, y: window.innerHeight - 20 })
    setPosition({ x: 0, y: 20 })
  }

  const topBarClick = () => {
    if (clickedOnce) { maxSize() }
    setClickedOnce(true)
    setTimeout(() => setClickedOnce(false), 350)
  }

  const handleFocus = () => {
    if (!props.focused) { props.focusFunction() }
  }

  return (
    <WindowContainer style={{ 'height': size.y, 'width': size.x, 'top': position.y, 'left': position.x, ...openSpring }} focused={props.focused} onMouseDown={handleFocus}>
      <TopBar onClick={topBarClick}>
        <BarButtons closeFunction={props.closeFunction} maxSize={maxSize} focused={props.focused} />
        <BarTitle
          onMouseDown={() => {
            setMovingWindow(true)
            setDistance({ x: props.mousePos.x - position.x, y: props.mousePos.y - position.y })
          }}
          onMouseUp={() => setMovingWindow(false)}>
          <span>{props.title}</span>
        </BarTitle>
      </TopBar>
      <Contents resizing={resizingWidth || resizingHeight} focused={props.focused} background={props.background}>
        {props.children}
      </Contents>
      <ResizeBoth
        onMouseDown={() => {
          setResizingHeight(true)
          setResizingWidth(true)
          setDistance({ x: props.mousePos.x - size.x, y: props.mousePos.y - size.y })
        }}
        onMouseUp={() => {
          setResizingHeight(false)
          setResizingWidth(false)
        }}
      />
      <ResizeWidth
        onMouseDown={() => {
          setResizingWidth(true)
          setDistance({ x: props.mousePos.x - size.x, y: props.mousePos.y - size.y })
        }}
        onMouseUp={() => setResizingWidth(false)}
      />
      <ResizeHeight
        onMouseDown={() => {
          setResizingHeight(true)
          setDistance({ x: props.mousePos.x - size.x, y: props.mousePos.y - size.y })
        }}
        onMouseUp={() => setResizingHeight(false)}
      />
    </WindowContainer >
  )
}
