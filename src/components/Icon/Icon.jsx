import React, { useState } from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-flow: column;
  top: ${props => props.iconY}px;
  left: ${props => props.iconX}px;
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

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    if (clickedOnce) {
      props.clickFunction()
    }
    setClickedOnce(true)
    setTimeout(() => setClickedOnce(false), 350)
  }

  return (
    <IconContainer iconX={props.pos.x} iconY={props.pos.y} >
      <IconImage src={require('../../' + props.image)} onClick={handleClick} />
      <IconText value={text} onChange={handleChange} width={text.length}></IconText>
    </IconContainer>
  )
}
