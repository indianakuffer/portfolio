import React, { useState } from 'react'
import styled from 'styled-components'

const ClockContainer = styled.div`
  position: relative;
`

export default function Clock(props) {
  let [showDropDown, setShowDropDown] = useState(false)

  const day = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(props.time)
  const hour = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(props.time)
  let minute = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(props.time)
  if (minute.length === 1) { minute = '0' + minute }

  return (
    <ClockContainer onClick={props.onClick}>
      <span onClick={() => setShowDropDown(!showDropDown)}>{`${day} ${hour.slice(0, -3)}:${minute} ${hour.slice(-3, hour.length)}`}</span>
      {props.children}
    </ClockContainer>
  )
}
