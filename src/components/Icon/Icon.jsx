import React, { useState } from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 40px;
  user-select: none;
`
const IconImage = styled.img`
  display: block;
  box-sizing: content-box;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  padding: 3px 5px;
  background-color: ${props => props.focused ? 'rgba(255,255,255,0.1)' : 'transparent'};
  // border: ${props => props.focused ? '1px solid blue' : 'none'};
  user-select: none;
  user-drag: none;
`
const IconText = styled.input`
  background-color: ${props => props.focused ? '#3258CB' : 'transparent'};
  padding: 1px;
  border-radius: 3px;
  border: none;
  color: white;
  font-weight: bold;
  width: calc(${props => props.width}ch + 5px);
`

export default function Icon(props) {
  let [text, setText] = useState(props.name)
  let [clickedOnce, setClickedOnce] = useState(false)
  let [position, setPosition] = useState({ x: props.initialPos.x, y: props.initialPos.y })
  let [mouseDown, setMouseDown] = useState(false)
  let [distance, setDistance] = useState({ x: 0, y: 0 })

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    props.focusIcon(props.name)
    if (clickedOnce) { props.openWindow(props.window) }
    setClickedOnce(true)
    setTimeout(() => setClickedOnce(false), 350)
  }
  if (mouseDown) {
    if (position.x !== props.mousePos.x - distance.x) {
      setPosition({ x: props.mousePos.x - distance.x, y: props.mousePos.y - distance.y })
    }
  }

  return (
    <IconContainer
      style={{ 'top': position.y, 'left': position.x }}
      onMouseDown={() => {
        setMouseDown(true)
        setDistance({ x: props.mousePos.x - position.x, y: props.mousePos.y - position.y })
      }}
      onMouseUp={() => setMouseDown(false)}
      onClick={e => e.stopPropagation()}>
      <IconImage src={require('../../' + props.image)} onClick={handleClick} onMouseDown={e => e.preventDefault()} draggable='false' focused={props.focused} />
      <IconText value={text} onChange={handleChange} width={text.length} focused={props.focused}></IconText>
    </IconContainer>
  )
}
