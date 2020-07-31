import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'
import { easeBackOut } from 'd3-ease'

const DropdownContainer = styled(animated.div)`
  display: flex;
  position: absolute;
  right: -10px;
  overflow: hidden;
  background-color: #484a4d;
  border-radius: 0 0 8px 8px;
  width: max-content;
  z-index: 2;
`
const List = styled.div`
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  hr {
    border-style: solid;
    color: rgba(255,255,255,0.3);
  }
  * {
    padding: 0 20px;
    &:hover {
      background-color: #3258CB;
    }
  }
`

export default function DropDown(props) {
  const [ref, { height }] = useMeasure();

  const expand = useSpring({
    height: props.showState ? `${height}px` : '0px',
    config: { friction: 20, tension: 200, easing: (t) => easeBackOut(t) }
  })

  return (
    <DropdownContainer style={{ ...expand }}>
      <div>
        <List ref={ref}>
          {props.children}
        </List>
      </div>
    </DropdownContainer>
  )
}
