import React from 'react'
import Banner from './Assement/Banner'
import Headfile from './Assement/Headfile'
import BodySection from './Assement/BodySection'
import SecondBan from './Assement/SecondBan'
import Foooter from './Assement/Foooter'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Container>
        <Headfile />
        <Banner />
        <BodySection />
        <SecondBan />
        <Foooter />
      </Container>

    </>

  )
}

export default App