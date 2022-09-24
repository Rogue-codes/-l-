import React from 'react'
import styled from 'styled-components'
import home from '../../Assets/home.webp'
function Landing() {
  return (
    <Container>
        <Card>
          <Header>A Good Home</Header> 
          <Header>Is a Good Life</Header> 
          <Desc>Discover the Most comfortable place for your Future</Desc>
          <View>View</View>
        </Card>
    </Container>
  )
}

export default Landing

const Container = styled.div`
  width: 100%;
  height: 98vh;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  padding-left: 5%;
  background: url(${home});
  background-size: cover;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
`
const Card = styled.div`
  @media (max-width: 767px) {
    width: 95%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000000a3;
  }
  width: 60%;
  height: 60vh;
  margin-top: 5%;
  background: #0000006b;
  padding-left: 2%;
  border-radius: 5px;
`
const Header = styled.h1`
  @media (max-width: 767px) {
    font-size: 2.5rem;
  }
  color: #fff;
  font-family: 'Kanit', sans-serif;
  font-size: 5vw;
`
const Desc = styled.p`
  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 2vw;
`
const View = styled.button`
  width: 30%;
  height: 9vh;
  font-size: 1.3vw;
  margin-top: 8%;
  background: #2f53e9;
  border: none;
  color: #fff;
@media (max-width: 767px) {
  width: 50%;
  height: 7vh;
  font-size: 1rem;
  margin-top: 8%;
  background: #2f53e9;
  border: none;
  color: #fff;
}
`
