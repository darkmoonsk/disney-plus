import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recomendado para Você</h4>
        <Content>
            <Wrap>
                <img alt="movie image1" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6279C832AB2F12CE97942F61FE09992B71CBA13A3CA61243E8C5C09B31F719F/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img alt="movie image2" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6279C832AB2F12CE97942F61FE09992B71CBA13A3CA61243E8C5C09B31F719F/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img alt="movie image3" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6279C832AB2F12CE97942F61FE09992B71CBA13A3CA61243E8C5C09B31F719F/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img alt="movie image4" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6279C832AB2F12CE97942F61FE09992B71CBA13A3CA61243E8C5C09B31F719F/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img alt="movie image5" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6279C832AB2F12CE97942F61FE09992B71CBA13A3CA61243E8C5C09B31F719F/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
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