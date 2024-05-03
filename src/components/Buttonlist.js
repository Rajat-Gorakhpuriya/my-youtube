import React from 'react'
import { Button } from './Button'

const Buttonlist = () => {
  return (
    <div className='flex'>
      <Button name="All"></Button>
      <Button name="Game"></Button>
      <Button name="Songs"></Button>
      <Button name="Cricket"></Button>
      <Button name="Movies"></Button>
      <Button name="Sports"></Button>
      <Button name="Programming"></Button>
      <Button name="News"></Button>
      <Button name="Environment"></Button>
      <Button name="Fashion"></Button>
    </div>
  )
}

export default Buttonlist