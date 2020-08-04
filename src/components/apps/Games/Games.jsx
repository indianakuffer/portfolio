import React from 'react'
import styled from 'styled-components'

const GamesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  overflow: hidden;
`
const ArcadeContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-self: flex-end;
  margin-left: 20px;
`
const Arcade = styled.img`
  height: 400px;
  z-index: 1;
`
const Game = styled.img`
  position: absolute;
  height: 285px;
  width: 285px;
  object-fit: cover;
`
const Chalkboard = styled.div`
  background: black;
  border: 4px solid green;
  border-radius: 10px;
  align-self: center;
  min-height: 50%;
  min-width: 200px;
  flex-grow: 1;
  margin: 0 50px;
  color: white;
`

export default function Games() {
  return (
    <GamesContainer>
      <ArcadeContainer>
        <Arcade src={require('../../../images/icons/arcade-machine.svg')} />
        {/* <Game src='https://img.itch.zone/aW1hZ2UvMjQyMzI1LzExNTYzMzguZ2lm/original/DUmmSR.gif' /> */}
        <Game src='https://img.itch.zone/aW1hZ2UvNTE5Nzg3LzI3MDAyMDIuZ2lm/794x1000/%2F2lZGN.gif' />
      </ArcadeContainer>
      <Chalkboard>
        <div>Game Name</div>
        <div>Game Info</div>
        <div>Game Link</div>
      </Chalkboard>
      {/* <iframe src="https://itch.io/embed/242325?linkback=true" width="552" height="167" frameborder="0"><a href="https://indianakuffer.itch.io/ants">Ants by indianakuffer</a></iframe>
      <iframe src="https://itch.io/embed/104983" width="552" height="167" frameborder="0"><a href="https://indianakuffer.itch.io/bread-and-circuses">Bread and Circuses by indianakuffer</a></iframe>
      <iframe src="https://itch.io/embed/120432" width="552" height="167" frameborder="0"><a href="https://indianakuffer.itch.io/cait-sidhe">Cait Sidhe by indianakuffer</a></iframe>
      <iframe src="https://itch.io/embed/172009" width="552" height="167" frameborder="0"><a href="https://indianakuffer.itch.io/fencer">Fencer by indianakuffer</a></iframe>
      <iframe src="https://itch.io/embed/698160" width="552" height="167" frameborder="0"><a href="https://tuna.itch.io/outoftown">Out Of Town by tuna, Jannnnnnnno, indianakuffer</a></iframe>
      <iframe src="https://itch.io/embed/519787" width="552" height="167" frameborder="0"><a href="https://indianakuffer.itch.io/rhythm-is-2020">Rhythm is 20/20 by indianakuffer</a></iframe>
      <iframe src="https://itch.io/embed/111897" width="552" height="167" frameborder="0"><a href="https://indianakuffer.itch.io/zzz-train">ZZZ Train by indianakuffer</a></iframe> */}
    </GamesContainer>
  )
}
