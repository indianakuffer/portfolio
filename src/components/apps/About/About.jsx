import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Portrait = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
  align-self: center;
  overflow: hidden;
`

export default function About() {
  return (
    <AboutContainer>
      <Portrait src='https://i.imgur.com/RGYrBme.jpg' />
      <p>I’m a highly curious and creative software engineer with three years experience in system administration and information technology. As a quick learner with a passion for making, I’m constantly looking for the next project to throw myself into.</p>
      <p>My background in photography and game development allows me to bring a strong visual design and focus on the user experience to my work. I strive to work in a highly technical environment that challenges my skill set and pushes me to grow further.</p>
    </AboutContainer>
  )
}
