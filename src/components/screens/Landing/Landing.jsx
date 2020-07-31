import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ScreenContainer from '../../shared/ScreenContainer/ScreenContainer'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { easeCubicInOut } from 'd3-ease'

const Welcome = styled(animated.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  font-size: 30px;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  text-decoration: none;
  border: none;
  z-index: 10;
  &:focus {
    outline: none;
  }
  
`
const Blob = styled.div`
  z-index: -5;
  position: absolute;
  background-image: url('${require('../../../images/blob.svg')}');
  width: 300px;
  height: 300px;
  transition: filter 0.5s ease;
  &:hover {
    filter: ${props => props.growing ? 'unset' : 'brightness(0.9)'};
  }
  animation: 50s spin linear infinite;
  @keyframes spin {
    to {transform: rotate(360deg)}
  }
`
const Background = styled(animated.div)`
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  background-color: turquoise;
`

export default function Landing() {
  const history = useHistory()
  let [nextPage, setNextPage] = useState(false)
  let [growing, setGrowing] = useState(false)

  let orientation = window.innerHeight > window.innerWidth ? 'vh' : 'vw'

  const springProps = useSpring({
    width: growing ? `140${orientation}` : `0${orientation}`,
    height: growing ? `140${orientation}` : `0${orientation}`,
    config: { duration: 1300, easing: (t) => easeCubicInOut(t) },
    onRest: () => { if (growing) setNextPage(true) }
  })

  if (nextPage) {
    setNextPage(false)
    history.push('/home')
  }

  return (
    <ScreenContainer align='center' justify='center'>
      <Welcome onClick={() => setGrowing(true)}>
        <p>Welcome</p>
        <Blob growing={growing} />
      </Welcome>
      <Background style={springProps}></Background>
    </ScreenContainer>
  )
}
