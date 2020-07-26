import React, { useState, useEffect } from 'react'
import ScreenContainer from '../../shared/ScreenContainer/ScreenContainer'
import Window from '../../shared/Window/Window'
import Desktop from '../../Desktop/Desktop'

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
      <Desktop showWindow={() => setShowWindow(true)} />
      {showWindow &&
        <Window title='Window Title' size={{ x: 500, y: 400 }} mousePos={mousePos} closeFunction={() => setShowWindow(false)}>
          Etsy cardigan chillwave migas banjo four dollar toast. Flannel ramps pabst hammock PBR&B street art cred everyday carry activated charcoal deep v viral whatever retro vinyl blue bottle. Migas mlkshk asymmetrical shaman. Aesthetic tilde scenester 8-bit live-edge, raclette kale chips before they sold out godard lumbersexual umami poutine direct trade crucifix thundercats.<br /><br />
          3 wolf moon migas cloud bread echo park vexillologist seitan cornhole. Pinterest austin intelligentsia lyft, flexitarian XOXO venmo shaman typewriter ugh direct trade. Godard art party fanny pack wolf unicorn activated charcoal XOXO asymmetrical fingerstache taxidermy flannel deep v next level. Everyday carry austin flexitarian blue bottle asymmetrical subway tile.<br /><br />
          Yuccie raclette snackwave, health goth retro pinterest hella cred unicorn glossier whatever banjo tumblr tousled. Church-key chartreuse readymade taiyaki subway tile irony vice yr kogi portland. Man braid bushwick you probably haven't heard of them distillery, four loko skateboard DIY hella. Cornhole leggings jianbing typewriter, distillery cloud bread heirloom plaid sriracha +1. Whatever la croix art party taxidermy edison bulb.<br /><br />
          Brooklyn cronut artisan locavore PBR&B skateboard try-hard beard street art man braid chambray direct trade copper mug tumeric. Salvia chartreuse farm-to-table wayfarers actually roof party disrupt bicycle rights franzen mumblecore hella offal tilde readymade drinking vinegar. Meh four dollar toast palo santo, keffiyeh plaid live-edge tote bag mumblecore succulents snackwave kinfolk PBR&B. Fashion axe meggings seitan trust fund portland tumblr. Dreamcatcher retro cred try-hard succulents everyday carry artisan chartreuse DIY swag shoreditch post-ironic helvetica.<br /><br />
          Neutra retro tattooed godard. Tote bag williamsburg artisan drinking vinegar mixtape blog fanny pack gluten-free. Lo-fi ramps shabby chic schlitz tumblr lumbersexual viral polaroid kogi readymade cardigan chartreuse. Pinterest chillwave health goth chia craft beer copper mug green juice coloring book ethical live-edge brooklyn gochujang. Whatever gochujang letterpress kombucha, migas VHS DIY.<br /><br />
        </Window>
      }
    </ScreenContainer>
  )
}
