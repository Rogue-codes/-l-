import React from 'react'
import styled from 'styled-components'
import Landing from '../components/landing/Landing'

function Home() {
  return (
    <Container>
        <Landing/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`