import React, { useState, useEffect } from 'react'
import DropDown from '../shared/Dropdown/DropDown'
import styled from 'styled-components'

const ClockContainer = styled.div`
  position: relative;
`

export default function Clock(props) {
  let [time, setTime] = useState(new Date())
  let [showDropDown, setShowDropDown] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => tick(), 3000)
    return () => { clearInterval(timer) }
  })

  function tick() {
    setTime(new Date())
  }

  const day = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(time)
  const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(time)
  const dayLong = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(time)
  const monthLong = new Intl.DateTimeFormat('en', { month: 'long' }).format(time)
  const hour = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(time)
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(time)
  let minute = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(time)
  if (minute.length === 1) { minute = '0' + minute }

  return (
    <ClockContainer>
      <span onClick={() => setShowDropDown(!showDropDown)}>{`${day} ${hour.slice(0, -3)}:${minute} ${hour.slice(-3, hour.length)}`}</span>
      <DropDown showState={showDropDown}>
        <div>{`${dayLong}, ${monthLong} ${date}, ${year}`}</div>
        <hr />
        <div>View as Analog</div>
        <div>View as Digital</div>
        <hr />
        <div>Open Time & Date Preferences</div>
      </DropDown>
    </ClockContainer>
  )
}
