import { Card } from '@material-ui/core'
import React from 'react'
import img3 from '../../assests/scissor1.svg'
import img2 from '../../assests/paper1.svg'
import img1 from '../../assests/stone1.svg'
const Player = (props) => {
    const imgArr =[img1,img2,img3]
    return (
      <Card
        style={{ backgroundColor: "#126e82", borderRadius: "10%" }}
        elevation={5}
      >
        <img src={imgArr[props.index]} alt='' />
      </Card>
    );
}

export default Player
