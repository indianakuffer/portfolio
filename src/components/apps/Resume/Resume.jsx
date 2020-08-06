import React from 'react'
import styled from 'styled-components'
import ResumeExperience from '../../ResumeExperience/ResumeExperience'

const Background = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background: url('https://i.imgur.com/ZLcIHPu.jpg');
  height: fit-content;
  width: 100%;
`
const ResumeContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 90%;
  max-width: 600px;
`
const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Download = styled.a`
  position: fixed;
  top: 0;
  right: 20px;
  height: 100px;
  width: 50px;
`


export default function Resume() {
  return (
    <Background>
      <ResumeContainer>
        <h1>Indiana Kuffer</h1>
        <h3>Professional Statement</h3>
        <p>I’m a highly curious and creative software engineer with three years experience in system administration and information technology. As a quick learner with a passion for making, I’m constantly looking for the next project to throw myself into.
My background in photography and game development allows me to bring a strong visual design and focus on the user experience to my work. I strive to work in a highly technical environment that challenges my skill set and pushes me to grow further.</p>
        <h3>Skills</h3>
        <div>
          <span>HTML</span>
          <span>CSS / SASS</span>
          <span>Javascript</span>
          <span>Node.js</span>
          <span>React.js</span>
          <span>React.js</span>
          <span>Git / GitHub</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Ruby</span>
          <span>Rails</span>
          <span>Postgresql</span>
        </div>
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
          <div>
            <h3>Other</h3>
            <ResumeExperience title='Game Development' location='Built several games using Gamemaker Studio, placing in community game jams.' year='' />
          </div>
        </TwoCol>
        <Download href='www.indianakuffer.com' target='_blank' rel='noopener noreferrer'>Download</Download>
      </ResumeContainer>
    </Background>
  )
}
