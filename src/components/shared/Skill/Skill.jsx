import React from 'react'
import styled from 'styled-components'

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Playfair Display';
  font-size: 20px;
  margin: 5px 0;
  color: #272946;
  &:hover {
    font-weight: bold;
  }
  img {
    height: 42px;
    vertical-align: middle;
    margin-right: 20px;
  }
`
export default function Skill(props) {
  return (
    <SkillContainer>
      <img src={require(`../../../${props.imgPath}`)} alt={props.name} />
      <span>{props.name}</span>
    </SkillContainer>
  )
}
