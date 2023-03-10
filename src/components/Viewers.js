import React from 'react';
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
     <Wrap>
    <img src="/images/viewers-disney.png" alt="" />
     </Wrap>
     <Wrap>
    <img src="/images/viewers-pixar.png" alt="" />
     </Wrap>
     <Wrap>
    <img src="/images/viewers-marvel.png" alt="" />
     </Wrap>
     <Wrap>
    <img src="/images/viewers-starwars.png" alt="" />
     </Wrap>
     <Wrap>
    <img src="/images/viewers-national.png" alt="" />
     </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    
    margin-top:30px;
display:grid;
grid-template-columns: repeat(5, minmax(0, 1fr));
grid-gap:25px;
padding:30px 0 26px;

`





 const Wrap =styled.div`

 img{
    width:100px;
    height:70px;
    object-fit:cover;
    border:3px solid rgba(249, 249, 249, 0.1);
    border-radius:15px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;

    &:hover{
    transform :scale(1.05);
    border-color:rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
 }




 }



 @media (max-width: 768px) {
  
    img{
    width:80%;
    height:40px;
    object-fit:cover;
    border:3px solid rgba(249, 249, 249, 0.1);
    border-radius:10px;

    &:hover{
    transform :scale(1.05);
    border-color:rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 73) 0 16px 10px -10px;
 }

 }

    
 }


     
    `
 