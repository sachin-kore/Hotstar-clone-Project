import React from 'react'
import styled from 'styled-components';

export const Details = () => {
    return (
        <Container>
            <Background>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' />
            </Background>

            <ImageTitle>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' />
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchBtn>
                    <img src='/images/group-icon.png' />
                </GroupWatchBtn>
            </Controls>

            <SubTitle>
                <p>2018 . 7m . Family, Fantasy, Kids, Animation</p>
            </SubTitle>
            <Description>
                <p>A Chinese mom who's sad when her grown son leaves gets another chance at
                    motherhood when one of her dumplings springs to life.
                    But she finds that nothing stays cute and small forever.</p>
            </Description>

        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative
`

const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;
    opacity: 0.8;

    img {
       width:100%;
       height:100%;
       object-fit: cover;
    }
`
const ImageTitle = styled.div`
   height: 30vh;
   min-height:170px;
   width:35vw;
   min-width: 200px;
   margin-top: 20px;

   img {
    width:100%;
    height:100%;
    object-fit: contain;
   }
`

const Controls = styled.div`
     display: flex;
     align-items: center;
     
`
const PlayButton = styled.button`
     border-radius: 4px;
     font-size: 15px;
     display: flex;
     align-items: center;
     height: 56px;
     border: none;
     cursor: pointer;
     padding: 0px 24px;
     margin-right:22px;
     letter-spacing: 1.8px;
     

     &:hover{
        Background: rgb(198, 198, 198);
     }

`
const TrailerButton = styled(PlayButton)`
    Background:rgba(0, 0, 0, 0.3);
    color:white;
    border: 1px solid rgb(249,249,249);
    text-transform:uppercase; 
    cursor: pointer;
`
const AddButton = styled.button`
    height:44px;
    width:44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background: black;
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;

    span{
        font-size: 25px;
        color: white;
    }
`
const GroupWatchBtn = styled(AddButton)`
    // height: 44px;
    // width: 44px;
    // background: black;
    // border: 2px solid white;
    // border-radius: 50%;
    // cursor: pointer;
    // img{
    //     width:100%;
    //     height:100%;

    // }
     background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
color: rgb(249, 249,249);
font-size: 16px;
min-height: 20px;
margin-top: 26px;

`

const Description = styled.div`
line-height:1.4;
color: rgb(249, 249,249);
font-size: 20px;
margin-top: 16px;
max-width: 700px;
`