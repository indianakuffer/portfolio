import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { __RouterContext } from 'react-router'
import { useTransition, animated } from 'react-spring'
import { easeCubicInOut, easeCubicOut } from 'd3-ease'
import Os from './components/screens/Os/Os'
import Home from './components/screens/Home/Home'

function App() {
  const { location } = useContext(__RouterContext)
  const homeTransition = useTransition(location, location => location.pathname, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000, easing: (t) => easeCubicOut(t) }
  })
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000, easing: (t) => easeCubicInOut(t) }
  })

  return (
    <>
      {homeTransition.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path='/' component={Home} />
          </Switch>
        </animated.div>
      ))}
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path='/os' component={Os} />
          </Switch>
        </animated.div>
      ))}
    </>
  )
}

export default App
