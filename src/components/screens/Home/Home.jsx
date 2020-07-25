import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ScreenContainer from '../../shared/ScreenContainer/ScreenContainer'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { easeCubicOut } from 'd3-ease'

const Welcome = styled(animated.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: turquoise;
  color: white;
  font-size: 30px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-decoration: none;
  border: none;
  z-index: 10;
  &:focus {
    outline: none;
  }
`
const Background = styled(animated.div)`
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  background-color: turquoise;
`

export default function Home() {
  const history = useHistory()
  let [nextPage, setNextPage] = useState(false)
  let [growing, setGrowing] = useState(false)

  const orientation = window.innerHeight > window.innerWidth ? 'vh' : 'vw'

  const props = useSpring({
    width: growing ? `115${orientation}` : `0${orientation}`,
    height: growing ? `115${orientation}` : `0${orientation}`,
    config: { duration: 1300, easing: (t) => easeCubicOut(t) },
    onRest: () => { if (growing) setNextPage(true) }
  })

  if (nextPage) {
    setNextPage(false)
    history.push('/os')
  }

  return (
    <ScreenContainer align='center' justify='center'>
      <Welcome onClick={() => setGrowing(true)}>Welcome</Welcome>
      <Background style={props}></Background>
    </ScreenContainer>
  )
}
