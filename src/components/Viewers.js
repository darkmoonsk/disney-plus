import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img alt="disney view" src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
            <img alt="pixar view" src="/images/viewers-pixar.png" />
        </Wrap>
        <Wrap>
            <img alt="marvel view" src="/images/viewers-marvel.png" />
        </Wrap>
        <Wrap>
            <img alt="star wars view" src="/images/viewers-starwars.png" />
        </Wrap>
        <Wrap>
            <img alt="national geographic view" src="/images/viewers-national.png" />
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow rgb(0 0 0 / 69%) 0 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.10);
        border-color: rgba(249, 249, 249, 0.8);
    }
`