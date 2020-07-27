import React from 'react'
import styled from 'styled-components'
import Clock from '../Clock/Clock'

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


export default function SystemBar() {
  return (
    <Bar>
      <Left>
        <div>Indiana Kuffer</div>
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
