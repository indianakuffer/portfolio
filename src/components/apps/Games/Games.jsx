import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import Cartridge from '../../Cartridge/Cartridge'

const GamesContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
  color: white;
  overflow: hidden;
`
const ScreenBorder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 95%;
  max-height: 700px;
  max-width: 800px;
  top: 10px;
  border-radius: 20px 20px 40px 20px;
  background: #303230; 
  @media only screen and (max-width: 600px) {
    max-height: 285px;
    max-width: 285px;
  } 
`
const RoundedContainer = styled.div`
  position: relative;
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://media1.giphy.com/media/3ohryjTWP5EyfaJB2o/giphy.gif');
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 600px) {
    height: calc(100% - 50px);
    width: calc(100% - 50px);
  } 
`
const Game = styled(animated.div)`
  width: 100%;
  height: 100%;
  div {
    width: 100%;
    height: 100%;
    background-image: url('${props => props.background}');
    background-size: cover;
    background-position: center;
  }
`
const Tag = styled.a`
  position: absolute;
  bottom: -50px;
  right: 10px;
  text-decoration: none;
  background: #fa5c5c;
  color: white;
  padding: 5px 15px;
  border-radius: 10px 10px 0 0;
  height: 100px;
  transition: 0.2s transform ease;
  z-index: 1;
  &:hover {
    transform: translate3d(0,-25px,0)
  }
  div {
    font-weight: bold;
    font-size: 20px;
  }
  div, span {
    pointer-events: none;
  }
`
const Power = styled.div`
  position: absolute;
  top: 15px;
  right: -80px;
  color: #7b7b7b;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  div {
    height: 1px;
    width: 1px;
    box-shadow:
    0 0 6px 6px #f99a9a,
    0 0 5px 8px red;
    border-radius: 50%;
    background: #f99a9a;
    margin-bottom: 12px;
  }
`
const CartridgeContainer = styled.div`
  position: absolute;
  bottom: -30px;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  @media only screen and (max-width: 600px) {
    bottom: 0;
  } 
`
const Device = styled.div`
  position: absolute;
  top: 0;
  width: 1000px;
  height: 100%;
  background: #C0BDB9;
`
const Speaker = styled.div`
  background-image: url('${require('../../../images/icons/speaker.svg')}');
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: -350px;
  top: 400px;
  height: 400px;
  width: 300px;
`

const games = [
  {
    id: 0,
    image: 'https://img.itch.zone/aW1hZ2UvNTE5Nzg3LzI3MDAyMDIuZ2lm/794x1000/%2F2lZGN.gif',
    url: 'https://indianakuffer.itch.io/rhythm-is-2020',
    title: 'Rhythm is 2020'
  },
  {
    id: 1,
    image: 'https://img.itch.zone/aW1hZ2UvMjQyMzI1LzExNTYzMzguZ2lm/original/DUmmSR.gif',
    url: 'https://indianakuffer.itch.io/ants',
    title: 'Ants'
  },
  {
    id: 2,
    image: 'https://img.itch.zone/aW1hZ2UvMTExODk3LzUxOTM2My5naWY=/original/1VsTYM.gif',
    url: 'https://indianakuffer.itch.io/zzz-train',
    title: 'ZZZ Train'
  },
  {
    id: 3,
    image: 'https://img.itch.zone/aW1hZ2UvMTIwNDMyLzU1NDk5Mi5naWY=/original/xDdxr0.gif',
    url: 'https://indianakuffer.itch.io/cait-sidhe',
    title: 'Cait Sidhe'
  },
  {
    id: 4,
    image: 'https://img.itch.zone/aW1hZ2UvMTcyMDA5LzgwMDA2OS5naWY=/347x500/a7TSr%2F.gif',
    url: 'https://indianakuffer.itch.io/fencer',
    title: 'Fencer'
  },
  {
    id: 5,
    image: 'https://img.itch.zone/aW1hZ2UvNjk4MTYwLzM4NTQ3OTYucG5n/347x500/omkLxW.png',
    url: 'https://tuna.itch.io/outoftown',
    title: 'Out of Town'
  },
  {
    id: 6,
    image: 'https://img.itch.zone/aW1hZ2UvMTA0OTgzLzQ5MTY5Ny5naWY=/original/rPLupL.gif',
    url: 'https://indianakuffer.itch.io/bread-and-circuses',
    title: 'Bread and Circuses'
  }
]

export default function Games() {
  const [index, set] = useState(0)
  const transitions = useTransition(games[index], item => item.id, {
    from: { opacity: 0, mixBlendMode: 'difference', filter: 'brightness(5) sepia(0.5) contrast(0.7) brightness(1.1)' },
    enter: { opacity: 1, mixBlendMode: 'normal', filter: 'brightness(1) sepia(0.5) contrast(0.7) brightness(1.1)' },
    leave: { display: 'none' },
    config: { duration: 500 }
  })

  return (
    <GamesContainer>
      <Device></Device>
      {transitions.map(({ item, props: animation, key }) => {
        return <ScreenBorder>
          <Speaker></Speaker>
          <Power>
            <div></div>
            <span>BATTERY</span>
          </Power>
          <RoundedContainer>
            <Game key={key} background={item.image} style={animation}>
              <a href={item.url} target='_blank' rel='noreferrer noopener'><div></div></a>
            </Game>
            <Tag href={item.url} target='_blank' rel='noreferrer noopener'>
              <div>{item.title}</div>
              <span>View itch.io</span>
            </Tag>
          </RoundedContainer>
        </ScreenBorder>
      })}

      <CartridgeContainer>
        {games.map(game => {
          return <Cartridge onClick={() => set(game.id)} title={game.title}>
          </Cartridge>
        })}
      </CartridgeContainer>
    </GamesContainer>
  )
}
