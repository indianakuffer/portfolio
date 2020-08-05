import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'
import Cartridge from '../../Cartridge/Cartridge'

const GamesContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 40px;
  color: white;
  background-color: black;
`
const RoundedContainer = styled.div`
  position: relative;
  height: 85%;
  flex-shrink: 0;
  width: 95%;
  max-height: 700px;
  max-width: 700px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://media1.giphy.com/media/3ohryjTWP5EyfaJB2o/giphy.gif');
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
  
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
  right: 0;
  color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 10px;
  div {
    height: 5px;
    width: 5px;
    box-shadow: 0 0 5px 5px red;
    border-radius: 50%;
    background: red;
    margin-bottom: 5px;
  }
`
const CartridgeContainer = styled.div`
  position: absolute;
  bottom: -20px;
  display: flex;
  width: 100%;
  overflow-x: scroll;
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
    image: 'https://img.itch.zone/aW1hZ2UvNjk4MTYwLzM4NTQ3OTYucG5n/347x500/omkLxW.png',
    url: 'https://tuna.itch.io/outoftown',
    title: 'Out of Town'
  },
  {
    id: 4,
    image: 'https://img.itch.zone/aW1hZ2UvMTIwNDMyLzU1NDk5Mi5naWY=/original/xDdxr0.gif',
    url: 'https://indianakuffer.itch.io/cait-sidhe',
    title: 'Cait Sidhe'
  },
  {
    id: 5,
    image: 'https://img.itch.zone/aW1hZ2UvMTcyMDA5LzgwMDA2OS5naWY=/347x500/a7TSr%2F.gif',
    url: 'https://indianakuffer.itch.io/fencer',
    title: 'Fencer'
  },
  {
    id: 6,
    image: 'https://img.itch.zone/aW1hZ2UvMTA0OTgzLzQ5MTY5Ny5naWY=/original/rPLupL.gif',
    url: 'https://indianakuffer.itch.io/bread-and-circuses',
    title: 'Bread and Circuses'
  },
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
      {transitions.map(({ item, props: animation, key }) => {
        return <>
          <RoundedContainer>
            <Game key={key} background={item.image} style={animation}>
              <a href={item.url} target='_blank' rel='noreferrer noopener'><div></div></a>
            </Game>
            <Tag href={item.url} target='_blank' rel='noreferrer noopener'>
              <div>{item.title}</div>
              <span>View itch.io</span>
            </Tag>
          </RoundedContainer>
        </>
      })}
      <Power>
        <div></div>
        <span>BATTERY</span>
      </Power>
      <CartridgeContainer>
        {games.map(game => {
          return <Cartridge onClick={() => set(game.id)} title={game.title}>
          </Cartridge>
        })}
      </CartridgeContainer>
    </GamesContainer>
  )
}
