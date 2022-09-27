import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './hambuger.css'
function Nav() {
    const [showMenu, setShowMenu] = useState(false)
    const togglemenu = ()=>{
        setShowMenu(!showMenu)
    }

    const [scroll, setScroll] = useState(false)

    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true)
        return window.onscroll(null)
    }
  return (
    <Container bg={scroll ? "#0b0b0bcf" : null}>
        <Logo cl={scroll ? "#fff" : null}>
            ulo
        </Logo>

        <Options  cl={scroll ? "#fff" : null}>
            <Link to='/'>Home</Link>
            <Link to='/'>Rent</Link>
            <Link to='/'>Buy</Link>
            <Link to='/'>AirBnB</Link>
        </Options>

        <Auth>
            <Link to='register'><button>Sign Up</button></Link>
        </Auth>

        <div onClick={togglemenu} className='menu'>
            <button class={showMenu ? 'hamburger hamburger--spin is-active':'hamburger hamburger--spin'} type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>

        {
            showMenu &&
            <MobileMenu className='slide-in-right'>
                <div className="option">
                <div className="options">
                    <Link to='/'>Home</Link>
                </div>

                <div className="options">
                    <Link to='/'>Rent</Link>
                </div>

                <div className="options">
                    <Link to='/'>Buy</Link>
                </div>

                <div className="options">
                    <Link to='/'>AirBnB</Link>
                </div>

                <div className="reg">
                    <Link to='/register' onClick={togglemenu}>Sign Up</Link>
                </div>
                </div>
            </MobileMenu>
        }
    </Container>
  )
}

export default Nav

const Container = styled.nav`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 999999;
    background: linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3) 50%);
    background-color: ${props => props.bg};
    transition: all .5s linear;
    .menu{
        @media (min-width: 768px) {
            display: none;
        }
        margin-right: 2%;
        margin-top: 2%;
        z-index: 9999999999999999999999999;
    }
    .slide-in-right {
	-webkit-animation: slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2022-9-24 6:35:59
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-right
 * ----------------------------------------
 */
 @-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
.option{
    width: 100%;
    height: auto;
    margin-top: 25%;
    display: flex;
    flex-direction: column;
    .options{
        width: 100%;
        height: 8vh;
        margin-bottom: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            font-size: 1.5rem;
            text-decoration: none;
            color: #000;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
        }
    }
    .reg{
        width: 90%;
        margin: auto;
        height: 8vh;
        background: #2f53e9;
        margin-bottom: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            font-size: 1.5rem;
            text-decoration: none;
            color: #fff;
            font-family: 'Poppins', sans-serif;
            
        }
    }
}
`
const Logo = styled.h1`
    @media (max-width: 767px) {
        font-size: 3rem;
    }
    font-family: 'Lobster', cursive;
    font-size: 3vw;
    color: ${props=>props.cl};
`
const Options = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
    width: 40%;
    display: flex;
    justify-content: space-between;
    font-size: 1.5vw;
    align-items: flex-end;
    height: 100%;
    a{
        text-decoration: none;
        color: #000;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        color: ${props =>props.cl};
        &:hover{
            color: #000;
        }
    }
`
const Auth = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
    width: 10%;
    margin-right: 2%;
    a{
        button{
            border: none;
            width: 100%;
            height: 8vh;
            background: #2f53e9;
            color: #fff;
            font-size: 1.3vw;
            cursor: pointer;
        }
    }
`
const MobileMenu = styled.div`
    background:#f8f8f8;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
`