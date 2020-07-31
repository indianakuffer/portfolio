import React, { useState } from 'react'
import styled from 'styled-components'
import Clock from '../Clock/Clock'
import DropDown from '../shared/Dropdown/DropDown'

const Bar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #484A4D;
  color: white;
  font-weight: bold;
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
  return (
    <Bar>
      <Left>
        <Option>
          <div onClick={() => setShowNameMenu(!showNameMenu)}>Indiana Kuffer</div>
          <DropDown showState={showNameMenu}>
            <div>About</div>
            <div>Work</div>
            <div>Photography</div>
            <div>Contact</div>
          </DropDown>
        </Option>
        <div>About</div>
        <div>Work</div>
        <div>Contact</div>
      </Left>
      <Right>
        <Clock />
      </Right>
    </Bar>
  )
}
