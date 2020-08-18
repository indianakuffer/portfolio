import React, { useEffect } from 'react'
import styled from 'styled-components'

export default function Notification(props) {

  useEffect(() => {
    // const interval = void setInterval(timerEnd, 3000)
    // return clearInterval(interval)
  }, [])

  function timerEnd() {
    alert('time up!')
  }

  return (
    <div>

    </div>
  )
}
