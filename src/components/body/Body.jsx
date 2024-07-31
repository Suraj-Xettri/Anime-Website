import React from 'react'
import BodyTop from './BodyTop'
import BodySecond from './BodySecond'
import BodyFinal from './BodyFinal'
const Body = () => {
  return (
    <div className='pt-[60px] md:pt-[80px]'>
        <BodyTop/>
        <BodySecond/>
        <BodyFinal/>
    </div>
  )
}

export default Body