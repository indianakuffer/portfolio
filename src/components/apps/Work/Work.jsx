import React from 'react'
import styled from 'styled-components'
import WorkCard from '../../WorkCard/WorkCard'
import Skill from '../../shared/Skill/Skill'

const WorkContainer = styled.div`
  background-color: #a8bacc;
  width: 100%;
  min-height: 100%;
  height: fit-content;
  padding: 0 20px;
`
const Header = styled.div`
  font-size: 60px;
  font-family: 'Playfair Display', times, serif;
  font-weight: 500;
  text-align: center;
  margin: 30px;
`
const ProjectGrid = styled.div`
  wisdth: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 20px;
`
const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: rgba(0,0,0,0.3);
  margin: 0 auto;
`
const SkillsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  padding: 0 30px;
  margin-bottom: 50px;
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
  return (
    <WorkContainer>
      <Header>Projects</Header>
      <ProjectGrid>
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
      <Divider />
      <Header>Skills</Header>
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
    </WorkContainer>
  )
}
