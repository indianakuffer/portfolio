import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Container = styled(animated.div)`
  display: flex;
  justify-content: center;
  height: 162px;
  width: 162px;
  background: grey;
  margin: 10px 20px;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  flex-shrink: 0;
  z-index: 2;
  box-shadow: 4px 8px 11px 3px rgba(0,0,0,0.5);
`
const Ridges = styled.div`
  position: relative;
  height: 100%;
  width: 25%;
  border-left: 3px solid #656565;
  border-right: 3px solid #989898;
  background: repeating-linear-gradient(
    0deg,
    rgba(0,0,0,0.05),
    rgba(0,0,0,0.05) 5px,
    rgba(0,0,0,0.1) 5px,
    rgba(0,0,0,0.1) 10px
  );
  div {
    position: absolute;
    width: 100%;
    height: 22px;
    box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
  }
`
const Sticker = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: #fcf8ee;
  color: white;
  width: 45%;
  margin-left: 5%;
  height: 65%;
  min-height: 40%;
  overflow: hidden;
  font-size: 36px;
  font-weight: 800;
  box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.3);
  div {
    user-select: none;
    transform: rotate(-20deg);
    color: #fa5c5c;
    line-height: 0.8;
  }
`

export default function Cartridge(props) {
  const [{ y }, set] = useSpring(() => ({ y: 40 }))
  return (
    <Container onClick={props.onClick} style={{ transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }} onMouseEnter={() => set({ y: 0 })} onMouseLeave={() => set({ y: 40 })}>
      <Ridges>
        <div></div>
      </Ridges>
      <Sticker>
        <div>{props.title}</div>
      </Sticker>
    </Container>
  )
}
