import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D1D0ADD6E7BD8B119F7EA30FE6662AD5C98FE12B096542023F59420AD5AEDE3/scale?width=1440&aspectRatio=1.78&format=jpeg" />
        </Background>
        <ImgTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8A23DE0029509C77D4D35B94E47182316D7EF6DF63982B0DEAA88B772D645B16/scale?width=1440&aspectRatio=1.78&format=png" />
        </ImgTitle>
        <Controls>
            <PlayButton>
                 <img alt="Play button" src="/images/play-icon-black.png" />
                 <span>ASSISTIR</span>
            </PlayButton>
            <TrailerButton>
                {/* <img alt="Play button" src="/images/play-icon-white.png" /> */}
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img alt="GroupWatch" src="/images/group-icon.png" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2016 • 2h 13min - Ficção científica, Ação e aventura
        </SubTitle>
        <Description>
        "Em uma época de conflito, um grupo de heróis improváveis se une em uma missão para roubar os planos da Estrela da Morte, a maior arma de destruição do Império."
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImgTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    ${'' /* background-color: rgb(255, 255, 255); */}

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;

`

const PlayButton = styled.button`
    cursor: pointer;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1.8px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        background-color: rgb(198, 198, 198);
    }
    
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(255, 255, 255);
    color: white;

    &:hover {
        background: rgb(249, 249, 249);
        color: black;
    }
`

const AddButton = styled.button`
    cursor: pointer;
    width: 44px;
    heigth: 44px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);

    span {
        font-size: 30px;
        color: white;
    }
`
    

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 50%;
`

