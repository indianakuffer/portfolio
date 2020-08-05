import React, { useState } from 'react'
import styled from 'styled-components'
import WorkCard from '../../WorkCard/WorkCard'
import Skill from '../../shared/Skill/Skill'
import { useTransition, animated } from 'react-spring'

const WorkContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 100%;
  min-height: 100%;
  height: fit-content;
`
const Nav = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  button {
    font-size: 60px;
    font-family: 'Playfair Display', times, serif;
    font-weight: 500;
    background: none;
    margin: 0 40px;
    &:focus {
      outline: none;
    }
  }
`
const ButtonProjects = styled.button`
  border: none;
  border-bottom: ${props => props.toggle ? '3px solid black' : 'none'};
`
const ButtonSkills = styled.button`
  border: none;
  border-bottom: ${props => props.toggle ? 'none' : '3px solid black'};
`
const Projects = styled(animated.div)`
  padding: 0 20px;
  margin-top: 100px;
`
const Skills = styled(animated.div)`
  padding: 0 20px;
  margin-top: 120px;
  display: flex;
  justify-content: center;
`
const ProjectGrid = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 20px;
`
const SkillsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  padding: 0 30px;
  margin-bottom: 50px;
  max-width: fit-content;
`
const SkillCategory = styled.div`
  display: flex;
  flex-flow: column;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  margin: 30px 0;
  padding: 0 30px;
  min-width: 280px;
  h1 {
    font-size: 40px;
    font-family: 'Playfair Display', times, serif;
    font-weight: 500;
    margin: 0 0 25px 0;
  }
`


export default function Work() {
  let [toggle, setToggle] = useState(true)

  let transitionProjects = useTransition(toggle, null, {
    from: { transform: 'translate3d(-100%,0,0)', position: 'absolute', width: '100%' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-120%,0,0)' },
  })

  let transitionSkills = useTransition(!toggle, null, {
    from: { transform: 'translate3d(100%,0,0)', position: 'absolute', width: '100%' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(120%,0,0)' },
  })

  return (
    <WorkContainer>
      <Nav>
        <ButtonProjects toggle={toggle} onClick={() => setToggle(true)}>Projects</ButtonProjects>
        <ButtonSkills toggle={toggle} onClick={() => setToggle(false)}>Skills</ButtonSkills>
      </Nav>
      <div style={{ background: 'red', height: '100%' }}></div>
      {transitionProjects.map(({ item, key, props: animation }) => {
        return item && (
          <Projects style={animation}>
            <ProjectGrid >
              <WorkCard
                title='DSI Thesis Show 2020'
                image='https://i.imgur.com/uqIJoQ9.png'
                url='https://dsi.sva.edu/thesis-2020'
                text={`A showcase of thesis work for students of the MFA Design for Social Innovation program. The site acted as a virtual playbill for a series of four live panels that replaced the traditional thesis show. It features bios, student-produced videos, and process paper pdfs for each thesis project. `}
                techs={['html', 'css3', 'javascript']}
              />
              <WorkCard
                title='MTG Deck Builder'
                image='https://i.imgur.com/kbOytJl.png'
                url='https://indianakuffer.github.io/MTG-Deck-Builder'
                text={`A fan project for the Magic: The Gathering card game. MTG Deck Builder provides a platform for users to search a database of all Magic cards, preview card details, put together their dream combinations, and even see a sample starting hand.`}
                techs={['html', 'css3', 'javascript']}
                github='https://github.com/indianakuffer/MTG-Deck-Builder'
              />
              <WorkCard
                title='Zenith'
                image='https://i.imgur.com/mFKSZSx.png'
                url='https://indianakuffer-zenith.netlify.app/'
                text={`An interactive web experience in which users scroll through a curated set of facts about the International Space Station, until they reach it's position in the sky. How far the user scrolls and the information displayed is based on real-time positioning of the space station.`}
                techs={['nodejs', 'react', 'heroku', 'styled-components']}
                github='https://github.com/indianakuffer/Zenith'
              />
              <WorkCard
                title='Waste Watchers'
                image='https://i.imgur.com/bcoujPD.png'
                url='https://waste-watchers.netlify.app/'
                text={`A web application built in collaboration with UX designers that provides users a way to track what and how often they recycle. Points are awarded for every item recycled— every 100 points a digital tree is planted to represent your positive impact on the environment.`}
                techs={['express', 'mongodb', 'nodejs', 'react', 'heroku', 'd3js', 'styled-components']}
                github='https://github.com/indianakuffer/waste-watchers'
              />
              <WorkCard
                title='Portfolio'
                image='https://i.imgur.com/AMJAiAt.png'
                url='http://www.indianakuffer.com'
                text={`A showcase for all my work, lovingly made. Enjoy!`}
                techs={['nodejs', 'react', 'react-spring.png', 'styled-components']}
                github='https://github.com/indianakuffer/portfolio'
              />
            </ProjectGrid>
          </Projects>)
      })}
      {transitionSkills.map(({ item, key, props: animation }) => {
        return item && (
          <Skills style={animation}>
            <SkillsContainer>
              <SkillCategory>
                <h1>Front-end</h1>
                <Skill name='React' imgPath='images/icons/react.svg' />
                <Skill name='React-Spring' imgPath='images/icons/react-spring.png' />
                <Skill name='HTML' imgPath='images/icons/html.svg' />
                <Skill name='CSS' imgPath='images/icons/css3.svg' />
                <Skill name='D3' imgPath='images/icons/d3js.svg' />
                <Skill name='Javascript' imgPath='images/icons/javascript.svg' />
                <Skill name='SASS' imgPath='images/icons/sass.svg' />
                <Skill name='Styled Components' imgPath='images/icons/styled-components.svg' />
              </SkillCategory>
              <SkillCategory>
                <h1>Back-end</h1>
                <Skill name='Postgresql' imgPath='images/icons/postgresql.svg' />
                <Skill name='Express' imgPath='images/icons/express.svg' />
                <Skill name='Heroku' imgPath='images/icons/heroku.svg' />
                <Skill name='MongoDB' imgPath='images/icons/mongodb.svg' />
                <Skill name='Ruby' imgPath='images/icons/ruby.svg' />
                <Skill name='Rails' imgPath='images/icons/rails.svg' />
              </SkillCategory>
              <SkillCategory>
                <h1>Misc.</h1>
                <Skill name='GitHub' imgPath='images/icons/github.svg' />
                <Skill name='Wordpress' imgPath='images/icons/wordpress.svg' />
                <Skill name='NodeJS' imgPath='images/icons/nodejs.svg' />
                <Skill name='Lightroom' imgPath='images/icons/lightroom.svg' />
                <Skill name='Photoshop' imgPath='images/icons/photoshop.svg' />
                <Skill name='Illustrator' imgPath='images/icons/illustrator.svg' />
                <Skill name='Premiere Pro' imgPath='images/icons/premiere-pro.svg' />
              </SkillCategory>
            </SkillsContainer>
          </Skills>)
      })}
    </WorkContainer>
  )
}
