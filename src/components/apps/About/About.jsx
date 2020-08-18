import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: antiquewhite;
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 80px;
  z-index: 1;
`
const Header = styled.div`
  font-size: 30px;
  font-weight: 600;
  font-size: 56px;
  font-family: 'Playfair Display', times, serif;
  align-self: center;
  margin-left: 60px;
`
const Portrait = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
  align-self: center;
`
const Text = styled.div`
  max-width: 600px;
  font-size: 18px;
  z-index: 1;
`
const Blob = styled.img`
  position: absolute;
  height: ${props => props.height || 'unset'};
  width: ${props => props.width || 'unset'};
  top: ${props => props.top || 'unset'};
  left: ${props => props.left || 'unset'};
`

export default function About() {
  return (
    <AboutContainer>
      <HeaderContainer>
        <Portrait src='https://i.imgur.com/RGYrBme.jpg' />
        <Header>A bit<br />about me.</Header>
      </HeaderContainer>
      <Text>
        <p>I’m a highly curious and creative software engineer with three years experience in system administration and information technology. As a quick learner with a passion for making, I’m constantly looking for the next project to throw myself into.</p>
        <p>My background in photography and game development allows me to bring a strong visual design and focus on the user experience to my work. I strive to work in a highly technical environment that challenges my skill set and pushes me to grow further.</p>
        <p>Like what you see? Reach out and let's get talking!</p>
      </Text>
      <Blob height='300px' width='300px' top='80px' left='60%' src={require('../../../images/blob.svg')} />
      <Blob height='200px' width='200px' top='385px' left='36%' src={require('../../../images/blob.svg')} />
    </AboutContainer>
  )
}
