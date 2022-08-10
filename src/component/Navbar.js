import AdbIcon from '@mui/icons-material/Adb';
import { AppBar, Button, Container, Typography } from '@mui/material';
import { useState, useEffect } from "react"
import { ThreeDots } from 'react-loader-spinner'
import Hero from './Hero';

function Navbar() {
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoader(false)
    }, 3000);
  }, [])


  return (
    <>
      <AppBar position='sticky' style={{ background: '#E9DAC1' }}>
        <Container style={{ display: 'flex', alignItems: 'center', height: '10vh' }} maxWidth="xl">
          <AdbIcon style={{ color: '#000' }} />
          <Typography style={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#000000',
            textDecoration: 'none',
          }}>
            LOGO
          </Typography>
          <Button onClick={() => { setShow(true); setLoader(true) }} style={{ color: '#000000', borderColor: '#000000', marginLeft: '20px' }} variant="outlined">Get User</Button>
        </Container>
      </AppBar>
      {loader && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color='#2A0944'
            ariaLabel='three-dots-loading'
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
      <Hero show={show} />
    </>
  )
}

export default Navbar