import React from 'react'
import styled from 'styled-components'
import ResumeExperience from '../../ResumeExperience/ResumeExperience'

const Background = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background: url('https://i.imgur.com/737RZBl.jpg');
  background-size: 100% 100%;
  height: fit-content;
  width: 100%;
  color: #40414a;
  font-size: 14px;
  letter-spacing: 0.02rem;
`
const ResumeContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 90%;
  max-width: 600px;
  padding-top: 30px;
  h1 {
    font-weight: 400;
    letter-spacing: 2px;
    margin: 0;
    margin-bottom: 8px;
    font-size: 26px;
  }
  h3 {
    font-size: 16px;
    margin: 25px 0 8px 0;
  }
`
const Titles = styled.div`
  margin-bottom: 8px;
  * {
    font-weight: 600;
    margin: 0 2px;
  }
`
const ContactInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  * {
    margin: 0 2px;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`
const SkillsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  * {
    margin: 2px;
  }
`
const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 25px 1fr;
`
const Download = styled.a`
  position: fixed;
  top: 0px;
  right: 30px;
  height: 120px;
  width: 50px;
  background: #fb372f;
  color: white;
  filter: drop-shadow(4px 4px 5px rgba(0,0,0,0.4));
  transition: 0.4s transform ease;
  &:hover {
    transform: translate3d(0px,20px,0px);
  }
  span {
    pointer-events: none;
    position: absolute;
    top: 48px;
    font-weight: bold;
    display: inline-block;
    transform: rotate(90deg);
  }
  div {
    pointer-events: none;
    position: absolute;
    bottom: -24px;
    width: 0px;
    height: 0px;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
  }
`
const Left = styled.div`
  left: 0;
  border-left: 24px solid #fb372f;
`
const Right = styled.div`
  right: 0;
  border-right: 24px solid #fb372f;
`


export default function Resume() {
  return (
    <Background>
      <ResumeContainer>
        <h1>Indiana Kuffer</h1>
        <Titles>
          <span>Software Engineer</span>
          <span>|</span>
          <span>Web Developer</span>
        </Titles>
        <ContactInfo>
          <span>New York, NY</span>
          <span>|</span>
          <span>347.355.7997</span>
          <span>|</span>
          <a href='mailto:indianakuffer@gmail.com' target='_blank' rel='noopener noreferrer'>indianakuffer@gmail.com</a>
          <span>|</span>
          <a href='www.indianakuffer.com' target='_blank' rel='noopener noreferrer'>indianakuffer.com</a>
          <span>|</span>
          <a href='https://github.com/indianakuffer' target='_blank' rel='noopener noreferrer'>github.com/indianakuffer</a>
          <span>|</span>
          <a href='https://indianakuffer.itch.io' target='_blank' rel='noopener noreferrer'>indianakuffer.itch.io</a>
        </ContactInfo>
        <h3>Professional Statement</h3>
        <div>I’m a highly curious and creative software engineer with three years experience in system administration and information technology. As a quick learner with a passion for making, I’m constantly looking for the next project to throw myself into.
My background in photography and game development allows me to bring a strong visual design and focus on the user experience to my work. I strive to work in a highly technical environment that challenges my skill set and pushes me to grow further.</div>
        <h3>Skills</h3>
        <SkillsContainer>
          <span>HTML</span>
          <span>|</span>
          <span>CSS / SASS</span>
          <span>|</span>
          <span>Javascript</span>
          <span>|</span>
          <span>Node.js</span>
          <span>|</span>
          <span>React.js</span>
          <span>|</span>
          <span>Git / GitHub</span>
          <span>|</span>
          <span>Express</span>
          <span>|</span>
          <span>MongoDB</span>
          <span>|</span>
          <span>Ruby</span>
          <span>|</span>
          <span>Rails</span>
          <span>|</span>
          <span>Postgresql</span>
        </SkillsContainer>
        <h3>Experience</h3>
        <ResumeExperience title='Software Engineering Fellow' location='General Assembly' year='2020'>
          <li>Participated in 500+ hours of applied training in software engineering and web development concepts focusing on frontend and backend development.</li>
          <li>Worked with UX designers and led a team of software engineers in the creation of a full-stack web application.</li>
        </ResumeExperience>
        <ResumeExperience title='System Administrator' location='MFA Design for Social Innovation at the School of Visual Arts' year='2019 - 2020'>
          <li>Maintained the department's hardware and software technologies, provided technical support and photo / video services.</li>
          <li>Managed DSI's web presence leveraging the Wordpress CMS, created digital marketing assets.</li>
          <li>Led departmental projects such as document archival, digital signage implementation, student library and computer lab restructuring, etc.</li>
        </ResumeExperience>
        <ResumeExperience title='Office Manager and IT System Admin' location='Stomping Ground Photo' year='2017 - 2019'>
          <li>Facilitated a productive and comfortable work environment, fielded both technical and operational concerns, organized office-wide events.</li>
          <li>Maintained IT systems and software, researched and installed new equipment, implemented workflow and communications improvements.</li>
          <li>Managed the design and construction of a new office space / photo studio.</li>
        </ResumeExperience>
        <TwoCol>
          <div>
            <h3>Education</h3>
            <ResumeExperience title='General Assembly' location='Software Engineering Immersive' year='2020' />
            <ResumeExperience title='Macaulay Honors College at Hunter College' location='B.S. Psychology, B.A. Studio Art' year='2016' />
          </div>
          <span></span>
          <div>
            <h3>Other</h3>
            <ResumeExperience title='Game Development' location='Built several games using Gamemaker Studio, placing in community game jams.' year='' />
          </div>
        </TwoCol>
        <Download href='http://www.indianakuffer.com' target='_blank' rel='noopener noreferrer'>
          <span>Download</span>
          <Left></Left>
          <Right></Right>
        </Download>
      </ResumeContainer>
    </Background>
  )
}
