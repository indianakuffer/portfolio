import React, { useState, useEffect } from 'react'
import ScreenContainer from '../../shared/ScreenContainer/ScreenContainer'
import Window from '../../shared/Window/Window'

export default function Home() {
  let [showWindow, setShowWindow] = useState(true)
  let [mousePos, setMousePos] = useState({ x: null, y: null })

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const updateMousePosition = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <ScreenContainer>
      {showWindow &&
        <Window title='Window Title' mousePos={mousePos} closeFunction={() => setShowWindow(false)}>
          Etsy cardigan chillwave migas banjo four dollar toast. Flannel ramps pabst hammock PBR&B street art cred everyday carry activated charcoal deep v viral whatever retro vinyl blue bottle. Migas mlkshk asymmetrical shaman. Aesthetic tilde scenester 8-bit live-edge, raclette kale chips before they sold out godard lumbersexual umami poutine direct trade crucifix thundercats.
        </Window>
      }
    </ScreenContainer>
  )
}
