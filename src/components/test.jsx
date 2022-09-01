import React, { useEffect, useState } from 'react'
import './test.scss'
import Sun  from './sun'
import Moon  from './moon'

const test = () => {


const [celestial, setCelestial] = useState({celestial: 'sun' , element: <Sun/>})
const [dayNightCycle, setDayNightCycle] = useState(false)
const [animationType, setAnimationType] = useState('celestial change_animation_out')


  const handleCelestialClick = () => {
    if (celestial.celestial === 'sun') {
      setCelestial({celestial: 'moon' , element: <Moon/>})
    } else {  // celestial == <Moon/>
      setCelestial({celestial: 'sun' , element: <Sun/>})
    }
  }

  const handleAnim = () => {
    setDayNightCycle(true)

    setTimeout(() => {
      setAnimationType('celestial change_animation_in')
      handleCelestialClick()
    }, 2500);

    setTimeout(() => {
      setAnimationType('celestial change_animation_out')
      setDayNightCycle(false)
    }, 5500);
  }

  return (
      <div>
        <div className="day_night" style={celestial.celestial === 'sun'? {opacity: 0}: {opacity: 1}}></div>
        <div className={dayNightCycle? animationType : 'celestial'} onClick={handleAnim}>{celestial.element}</div>
      </div>
  )
}
export default test