import React, { useState } from 'react'
import styled from 'styled-components'
import BarButtons from '../BarButtons/BarButtons'
import { useSpring, animated } from 'react-spring'
import { easeCubicInOut, easeBackOut, easeBackIn } from 'd3-ease'

const WindowContainer = styled(animated.div)`
  position: absolute;
  min-width: 60px;
  min-height: 25px;
  border-radius: 4px;
  box-shadow: 2px 4px 8px rgba(0,0,0,0.25);
  overflow: hidden;
  background-color: ${props => props.focused ? 'white' : 'rgba(255,255,255,0.85)'};
  backdrop-filter: ${props => props.focused ? 'unset' : 'blur(8px)'};
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
  padding-right: 10%;
  span {
    white-space: nowrap;
  }
`
const Contents = styled.div`
  position: absolute;
  max-height: calc(100% - 20px);
  top: 20px;
  overflow: auto;
  user-select: ${props => props.resizing || !props.focused ? 'none' : 'unset'};
`
const ResizeBoth = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: nwse-resize;
`
const ResizeHeight = styled.div`
  position: absolute;
  bottom: 0;
  height: 10px;
  width: calc(100% - 20px);
  cursor: ns-resize;
`
const ResizeWidth = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 10px;
  height: calc(100% - 20px - 20px);
  cursor: ew-resize;
`

export default function Window(props) {
  let [size, setSize] = useState(props.size)
  let [position, setPosition] = useState({ x: window.innerWidth / 2 - props.size.x / 2, y: window.innerHeight / 2 - props.size.y / 2 })
  let [distance, setDistance] = useState({ x: 0, y: 0 })
  let [resizingWidth, setResizingWidth] = useState(false)
  let [resizingHeight, setResizingHeight] = useState(false)
  let [movingWindow, setMovingWindow] = useState(false)
  let [clickedOnce, setClickedOnce] = useState(false)

  const springProps = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { clamp: false, friction: 24, tension: 300, easing: (t) => easeBackOut(t) }
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
    <WindowContainer style={{ 'height': size.y, 'width': size.x, 'top': position.y, 'left': position.x, ...springProps }} focused={props.focused} onMouseDown={handleFocus}>
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
      <Contents resizing={resizingWidth || resizingHeight} focused={props.focused}>
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
