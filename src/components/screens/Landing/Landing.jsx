import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import codeBlock from '../../../code'

const CodeContainer = styled(animated.div)`
  background: black;
  width: 100vw;
  min-height: 100vh;
  font-family: monospace;
`
const Code = styled.div`
  display: flex;
  flex-flow: column;
  font-size: 18px;
  filter: blur(1px);
  .landing-code2 {
    position: absolute;
    color: cyan;
    transform: translateX(-2px);
  }
  .landing-code1 {
    color: red;
  }
`
const WipeContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`
const WhiteBlock = styled(animated.div)`
  background: white;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
`

export default function Landing() {
  const history = useHistory()
  let [nextPage, setNextPage] = useState(false)
  let [showLine, setShowLine] = useState(0)

  const { spring } = useSpring({
    spring: nextPage ? 100 : 0,
    config: { mass: 1, tension: 320, friction: 60 },
    onRest: () => next(),
  })

  useEffect(() => {
    let int = setInterval(func, 20)
    return () => { clearInterval(int) }
  }, [])

  const func = () => {
    setShowLine(showLine += 1)
    if (showLine < codeBlock.length) { window.scrollTo(0, showLine * 50) }
    if (showLine >= codeBlock.length && !nextPage) {
      setInterval(() => setNextPage(true), 1000)
    }
  }

  const next = () => {
    if (nextPage) { history.push('/home') }
  }

  return (
    <CodeContainer >
      <WipeContainer>
        <WhiteBlock style={{ height: spring.interpolate(spring => `${spring}vh`) }}>Welcome.</WhiteBlock>
      </WipeContainer>
      <Code nextPage={nextPage}>
        <div className='landing-code1'>
          {codeBlock.map((line, idx) => {
            if (showLine >= idx) {
              return <div>{line}</div>
            }
          })}
        </div>
        <div className='landing-code2'>
          {codeBlock.map((line, idx) => {
            if (showLine >= idx) {
              return <div>{line}</div>
            }
          })}
        </div>
      </Code>
    </CodeContainer>
  )
}
