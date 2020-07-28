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
  width: 40px;
  height: 40px;
`
const IconText = styled.input`
  background-color: transparent;
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
    <IconContainer style={{ 'top': position.y, 'left': position.x }} onMouseDown={() => { setMouseDown(true); setDistance({ x: props.mousePos.x - position.x, y: props.mousePos.y - position.y }) }} onMouseUp={() => setMouseDown(false)}>
      <IconImage src={require('../../' + props.image)} onClick={handleClick} draggable='false' />
      <IconText value={text} onChange={handleChange} width={text.length}></IconText>
    </IconContainer>
  )
}
