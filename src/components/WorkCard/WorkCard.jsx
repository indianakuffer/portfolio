import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  width: 400px;
  height: 550px;
  overflow: hidden;
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 3px 7px 11px rgba(0,0,0,0.16);
  &:hover {
    transform: scale(1.03);
    box-shadow: 4px 9px 17px rgba(0,0,0,0.16);
  }
`
const Title = styled.div`
  font-weight: bold;
  font-size: 26px;
  margin: 16px 0;
`
const Image = styled.a`
  width: 100%;
  height: 40%;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    opacity: 0.9;
  }
`
const Text = styled.div`
  font-size: 18px;
  padding: 0 15px;
`
const TechIcon = styled.img`
  height: 50px;
  // filter: saturate(0.6);
  // transition: filter 0.4s ease;
  &:hover {
    // filter: saturate(1);
  }
`
const TechContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: flex-end;
  padding: 5px 10px;
  background-color: #f1f1f1;
`
const Github = styled.a`
  color: grey;
  text-decoration: none;
  align-self: flex-start;
  margin: 13px 15px;
  &:hover {
    border-bottom: 1px solid grey;
  }
`

export default function WorkCard(props) {

  return (
    <CardContainer>
      <Image href={props.url} target='_blank' rel='noopener noreferrer' src={props.image}>
      </Image>
      <Title>{props.title}</Title>
      <Text>
        {props.text}
      </Text>
      {props.github && <Github href={props.github} target='_blank' rel='noopener noreferrer'>See on GitHub.</Github>}
      <TechContainer>
        {props.techs && props.techs.map(tech => {
          return <TechIcon key={`${props.title}-${props.tech}`} src={require(`../../images/icons/${tech}.svg`)} title={tech} />
        })}
      </TechContainer>
    </CardContainer>
  )
}
