import { Card } from '@material-ui/core'
import React, { useState } from 'react'
import St from '../../assests/Stone.svg'
import Pa from '../../assests/Paper.svg'
import Sc from '../../assests/Scissor.svg'
const Input = (props) => {
  let imgNo = 0;
  const selectImage= (e) => {
    e.preventDefault()
    props.OnSelect(+imgNo)
  }
    return (
      <Card
      style={{ backgroundColor: "#0f3057"}}
        elevation={5}>
        <form onSubmit={selectImage}>
        <input onClick={()=>imgNo=0} type="image" src={St} />
        <input onClick={()=>imgNo=1} type="image" src={Pa} />
        <input onClick={()=>imgNo=2} type="image" src={Sc} />
        </form>
      </Card>
    );
}

export default Input
