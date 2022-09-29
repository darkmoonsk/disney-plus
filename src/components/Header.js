import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu id="menu">
            <a href="#menu">
                <img alt="home icon" src="/images/home-icon.svg"></img>
                <span>INÍCIO</span>
            </a>
            <a href="#menu">
                <img alt="search icon" src="/images/search-icon.svg"></img>
                <span>PESQUISA</span>
            </a>
            <a href="#menu">
                <img alt="watchlist icon" src="/images/watchlist-icon.svg"></img>
                <span>MINHA LISTA</span>
            </a>
            <a href="#menu">
                <img alt="original icon" src="/images/original-icon.svg"></img>
                <span>ORIGINAIS</span>
            </a>
            <a href="#menu">
                <img alt="movie icon" src="/images/movie-icon.svg"></img>
                <span>FILMES</span>
            </a>
            <a href="#menu">
                <img alt="series icon" src="/images/series-icon.svg"></img>
                <span>SÉRIES</span>
            </a>
        </NavMenu>
        <UserImg src="/images/user-image.png"/>

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 40px;
    align-items: center;
    a {
        margin-left: 15px;
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            margin-left: 10px;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`