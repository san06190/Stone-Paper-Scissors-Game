import { Box, Grid, Typography } from '@material-ui/core';
import Player from './components/Player/Player';
import CPU from './components/CPU';
import InputWeapon from './components/Player/InputWeapon';
import { useState } from 'react';
import clash from './assests/clash.jpg'
function App() {
  const [index, setIndex] = useState({player:0,cpu:0})
  const selectInput = (n) => {
    setIndex({player:n,cpu: Math.floor(Math.random()*3) })
  } 
  let winner  = '';
//  const winner = () => {
    if(index.player===index.cpu)
    winner = 'Draw'
    else if(index.player === 0 && index.cpu === 2 || index.player === 2 && index.cpu === 1 || index.player === 1 && index.cpu === 0  )
    winner = 'Player 1 Wins'
    else
    winner = 'CPU Wins'
//  }
  return (
    <Box mt={10}>
    <Grid
      container
      spacing={3}
      alignItems="center"
      justify="space-around"
    >
      <Grid item md={2} xs={2}>
        <InputWeapon OnSelect={selectInput}/>
      </Grid>

      <Grid item md={3} xs={3}>
        <Player name="john" index={index.player} />
      </Grid>

      <Grid item md={1} xs={1}>
        <img src={clash} alt="" height='150' width='150' style={{borderRadius:'10%'}}/>
      </Grid>

      <Grid item md={3} xs={3}>
        <CPU index={index.cpu} />
      </Grid>

    </Grid>

    <Grid container 
      alignItems="center"
      justify="center">
        <Grid item md={3} xs={3}>
        <h1 style={{color:'#fff',fontSize:'5em'}}>{winner}</h1>
        </Grid>
    </Grid>

    </Box>
  );
}

export default App;
