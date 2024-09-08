import React from 'react'
import styled from '@emotion/styled'
import Image from './assets/143272.jpg'

const Cards = () => {
  return (
    <>
        <Container>
            <Up>
                <Circle></Circle>
            </Up>
            <Down>
                <ImageHolder>
                    <img  src={Image} />
                </ImageHolder>
                <Name>Samuel Joshua</Name>
                <Text>Alice works from home, but sometimes she commute to co-working space,
          where she has the opportunity to share </Text>
            </Down>
            <IconDiv></IconDiv>
        </Container>
    </>
  )
}

export default Cards



const IconDiv = styled.div`

`

const Text = styled.h5`
width: 80%;
text-align: center;
margin: 18px;
color: grey;
`

const Name = styled.h4`
margin-top: -20px;
`

const ImageHolder = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
position: relative;
top: -34px;
overflow: hidden;
border: 4px solid #e4e4e4;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const Down = styled.div`
height: 72%;
background: white;
display: flex;
align-items: center;
flex-direction: column;
`

const Circle = styled.div`
width: 30px;
height: 30px;
background: #70FFD5;
border-radius: 50%;
position: relative;
top: -10px;
right: -10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`

const Up = styled.div`
width: 100%;
height: 28%;
background: #70FFD5;
display: flex;
justify-content: flex-end;
`

const Container = styled.div`
width: 280px;
height: 330px;
`