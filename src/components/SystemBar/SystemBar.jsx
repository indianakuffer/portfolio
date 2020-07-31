import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Clock from '../Clock/Clock'
import DropDown from '../shared/Dropdown/DropDown'
import BarIcon from '../shared/BarIcon/BarIcon'
import Battery from '../Battery/Battery'

const Bar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #484A4D;
  color: white;
  font-weight: bold;
  font-size: 14px;
  height: 20px;
  padding: 3px 15px;
  user-select: none;
`
const Left = styled.div`
  display: flex;
  &>* {
    margin: 0 10px;
  }
`
const Right = styled.div`
  display: flex;
  &>* {
    margin: 0 7px;
  }
`
const Option = styled.div`
  position: relative;
`


export default function SystemBar() {
  let [showNameMenu, setShowNameMenu] = useState(false)
  let [showGithubMenu, setShowGithubMenu] = useState(false)
  let [showClockMenu, setShowClockMenu] = useState(false)
  let [showInstagramMenu, setShowInstagramMenu] = useState(false)
  let [showItchioMenu, setShowItchioMenu] = useState(false)
  let [showBatteryMenu, setShowBatteryMenu] = useState(false)
  let [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => tick(), 3000)
    return () => { clearInterval(timer) }
  })

  function tick() {
    setTime(new Date())
  }

  const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(time)
  const dayLong = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(time)
  const monthLong = new Intl.DateTimeFormat('en', { month: 'long' }).format(time)
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(time)

  const hideAll = () => {
    setShowNameMenu(false)
    setShowGithubMenu(false)
    setShowClockMenu(false)
    setShowInstagramMenu(false)
    setShowItchioMenu(false)
    setShowBatteryMenu(false)
  }

  return (
    <Bar>
      <Left>
        <Option>
          <div onClick={() => { hideAll(); setShowNameMenu(!showNameMenu) }}>Indiana Kuffer</div>
          <DropDown showState={showNameMenu}>
            <div>About</div>
            <div>Work</div>
            <div>Photography</div>
            <div>Contact</div>
          </DropDown>
        </Option>
      </Left>
      <Right>
        <BarIcon image='images/icons/github.svg' onClick={() => { hideAll(); setShowGithubMenu(!showGithubMenu) }}>
          <DropDown showState={showGithubMenu}>
            <div><a href='https://github.com/indianakuffer/' target='_blank' rel='noreferrer noopener'>Take me to GitHub</a></div>
          </DropDown>
        </BarIcon>
        <BarIcon image='images/icons/instagram.svg' onClick={() => { hideAll(); setShowInstagramMenu(!showInstagramMenu) }}>
          <DropDown showState={showInstagramMenu}>
            <div><a href='https://www.instagram.com/indianakuffer/' target='_blank' rel='noreferrer noopener'>Take me to Instagram</a></div>
          </DropDown>
        </BarIcon>
        <BarIcon image='images/icons/itchio.svg' onClick={() => { hideAll(); setShowItchioMenu(!showItchioMenu) }}>
          <DropDown showState={showItchioMenu}>
            <div><a href='https://indianakuffer.itch.io/' target='_blank' rel='noreferrer noopener'>Take me to Itch.io</a></div>
          </DropDown>
        </BarIcon>
        <Battery onClick={() => { hideAll(); setShowBatteryMenu(!showBatteryMenu) }}>
          <DropDown showState={showBatteryMenu}>
            <div style={{ 'color': '#E34949' }}>Battery is low, connect to a power source</div>
          </DropDown>
        </Battery>
        <Clock onClick={() => { hideAll(); setShowClockMenu(!showClockMenu) }} time={time}>
          <DropDown showState={showClockMenu}>
            <div>{`${dayLong}, ${monthLong} ${date}, ${year}`}</div>
            <hr />
            <div>View as Analog</div>
            <div>View as Digital</div>
            <hr />
            <div>Open Time & Date Preferences</div>
          </DropDown>
        </Clock>
      </Right>
    </Bar>
  )
}
