import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'

const DropdownContainer = styled(animated.div)`
  display: flex;
  position: absolute;
  right: -10px;
  overflow: hidden;
  background-color: #484a4d;
  border-radius: 0 0 8px 8px;
  width: max-content;
  z-index: 2;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.3);
`
const List = styled.div`
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  hr {
    border-style: solid;
    color: rgba(255,255,255,0.3);
  }
  a {
    color: inherit;
    text-decoration: none;
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
    config: { friction: 24, tension: 200 }
  })

  return (
    <DropdownContainer showState={props.showState} style={{ ...expand }}>
      <div>
        <List ref={ref}>
          {props.children}
        </List>
      </div>
    </DropdownContainer>
  )
}
