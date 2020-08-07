import React from 'react'
import { useEffect } from 'react'
import Notification from '../shared/Notification/Notification'

export default function NotificationCenter() {

  useEffect(() => {

  }, [])

  return (
    <div>
      <Notification timer={4000} />
    </div>
  )
}
