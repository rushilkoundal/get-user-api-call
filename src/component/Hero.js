import { Box, Typography } from "@mui/material"
import heroImg from '../assets/hero.png'
import UserCard from "./UserCard"

function Hero({ show }) {

  return (
    <>
      {show ? (
        <UserCard />
      ) : (
        <>
          <Box style={{ width: '100vw', height: '70vh', display: 'flex', justifyContent: 'center' }}><img style={{ width: '500px', objectFit: 'contain', opacity: '0.7' }} src={heroImg} alt="nothing to show here" /></Box>
          <Typography style={{ display: 'flex', justifyContent: 'center', opacity: '0.7', fontSize: '1.8rem' }}>Nothing to show here yet</Typography>
        </>
      )}


    </>
  )
}

export default Hero