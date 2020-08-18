import React from 'react'
import styled from 'styled-components'

const BarButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: transparent;
  cursor: default;
  filter: ${props => props.focused ? 'unset' : 'saturate(0)'};
  :hover {
    color: white;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 11px;
    margin: 0 3px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    color: inherit;
    font-weight: bold;
  }
`
const CloseButton = styled.div`
  background: #F94C45;
`
const MinButton = styled.div`
  background: #F9B929;
`
const MaxButton = styled.div`
  background: #28CA3A;
`

export default function BarButtons(props) {
  return (
    <BarButtonContainer focused={props.focused}>
      <CloseButton onClick={props.closeFunction} />
      <MinButton />
      <MaxButton onClick={props.maxSize} />
    </BarButtonContainer>
  )
}
