import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BarButtons from '../BarButtons/BarButtons'

const WindowContainer = styled.div`
  position: absolute;
  top: ${props => props.yPos}px;
  left: ${props => props.xPos}px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  min-width: 60px;
  min-height: 25px;
  border-radius: 4px;
  overflow: auto;
  box-shadow: 2px 4px 8px rgba(0,0,0,0.25);
`
const TopBar = styled.div`
  position: fixed;
  background-color: lightgrey;
  border-radius: 4px 4px 0 0;
  display: flex;
  width: inherit;
  height: 20px;
  z-index: 1;
`
const BarTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  overflow: hidden;
  span {
    white-space: nowrap;
  }
`
const Contents = styled.div`
  position: absolute;
  top: 20px;
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
  let [position, setPosition] = useState({ x: 0, y: 0 })
  let [distance, setdistance] = useState({ x: 0, y: 0 })
  let [size, setSize] = useState({ x: 500, y: 400 })
  let [resizingWidth, setResizingWidth] = useState(false)
  let [resizingHeight, setResizingHeight] = useState(false)
  let [movingWindow, setMovingWindow] = useState(false)

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

  return (
    <WindowContainer xPos={position.x} yPos={position.y} width={size.x} height={size.y}>
      <TopBar onClick={(e) => e.stopPropagation()}>
        <BarButtons closeFunction={props.closeFunction} />
        <BarTitle
          onMouseDown={() => {
            setMovingWindow(true)
            setdistance({ x: props.mousePos.x - position.x, y: props.mousePos.y - position.y })
          }}
          onMouseUp={() => setMovingWindow(false)}>
          <span>{props.title}</span>
        </BarTitle>
      </TopBar>
      <Contents>
        {props.children}
      </Contents>
      <ResizeBoth
        onMouseDown={() => {
          setResizingHeight(true)
          setResizingWidth(true)
          setdistance({ x: props.mousePos.x - size.x, y: props.mousePos.y - size.y })
        }}
        onMouseUp={() => {
          setResizingHeight(false)
          setResizingWidth(false)
        }}
      />
      <ResizeWidth
        onMouseDown={() => {
          setResizingWidth(true)
          setdistance({ x: props.mousePos.x - size.x, y: props.mousePos.y - size.y })
        }}
        onMouseUp={() => setResizingWidth(false)}
      />
      <ResizeHeight
        onMouseDown={() => {
          setResizingHeight(true)
          setdistance({ x: props.mousePos.x - size.x, y: props.mousePos.y - size.y })
        }}
        onMouseUp={() => setResizingHeight(false)}
      />
    </WindowContainer >
  )
}
