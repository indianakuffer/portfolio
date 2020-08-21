import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, useTrail, animated } from 'react-spring'

const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 40px;
  // background-color: green;
  column-count: 4;
  colum-gap: 1em;
  height: fit-content;
  img {
    margin: 0 0 1em 0;
    max-width: 100%;
    display: inline-block;
    user-drag: none;
  }
`
const Preview = styled(animated.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,0.5);
  img {
    height: 95%;
    transform: translateY(-10px);
    user-drag: none;
  }
`
const images = [
  'https://i.imgur.com/YpMbroe.jpg',
  'https://i.imgur.com/oy9Yoiu.jpg',
  'https://i.imgur.com/LU4ioyC.jpg',
  'https://i.imgur.com/9TD4m9y.jpg',
  'https://i.imgur.com/Z7ygo3n.jpg',
  'https://i.imgur.com/Egu2Ank.jpg',
  'https://i.imgur.com/Ffg6AEZ.jpg',
  'https://i.imgur.com/6kLF5h4.jpg',
  'https://i.imgur.com/jZK4Lt2.jpg',
  'https://i.imgur.com/qzUJFnC.jpg',
  'https://i.imgur.com/KkhIke9.jpg',
  'https://i.imgur.com/72a0EKr.jpg',
  'https://i.imgur.com/7BLZ0rW.jpg',
  'https://i.imgur.com/cAECXvj.jpg',
  'https://i.imgur.com/lpPIhBP.jpg',
  'https://i.imgur.com/zPgqBj1.jpg'
]

export default function Photography() {
  const [showPreview, setShowPreview] = useState(false)

  const trailAnim = useTrail(images.length, {
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: 80 },
    config: { mass: 5, tension: 2000, friction: 200 }
  })

  const fadeIn = useTransition(showPreview, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, pointerEvents: 'none' }
  })

  const handleClick = (url) => {
    setShowPreview(url)
  }

  return (
    <>
      <PhotoContainer>
        {trailAnim.map(({ x, ...rest }, index) => (
          <animated.img
            key={`image-${index}`}
            src={images[index]}
            style={{ ...rest, transform: x.interpolate(x => `translateY(${x}px)`) }}
            onClick={() => handleClick(images[index])}
          />
        ))}
      </PhotoContainer>
      {fadeIn.map(({ item, key, props }) =>
        item &&
        <Preview style={props} onClick={() => setShowPreview(false)}>
          <img src={showPreview} />
        </Preview>
      )}
    </>
  )
}
