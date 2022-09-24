import React from 'react'
import styled from 'styled-components'
import Landing from '../components/landing/Landing'
import Nav from '../components/nav/Nav'

function Home() {
  return (
    <Container>
        <Nav/>
        <Landing/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
`