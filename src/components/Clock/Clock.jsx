import React, { useState, useEffect } from 'react'

export default function Clock(props) {
  let [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => tick(), 3000)
    return () => { clearInterval(timer) }
  })

  function tick() {
    setTime(new Date())
  }

  const day = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(time)
  const hour = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(time)
  let minute = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(time)
  if (minute.length === 1) { minute = '0' + minute }

  return (
    <div>
      {`${day} ${hour.slice(0, -3)}:${minute} ${hour.slice(-3, hour.length)}`}
    </div>
  )
}
