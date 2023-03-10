import React from 'react';
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
    <Cta>
    <CTALogoOne>
    <img src=" ./images/cta-logo-one.svg" alt="" />
    </CTALogoOne>
    <SignUp>
      GET ALL THERE
    </SignUp>
     <Description>
     Looking for a good Netflix movie or series in the Horror, Sci-Fi or Thriller genre?
      Check out the Netflix news and reviews 
      we’ve done for these genres  both movie reviews and reviews for seasons of a series.
     </Description>
     <CTALogoTwo>
        <img src="./images/cta-logo-two.png" alt="" />
     </CTALogoTwo>
    </Cta>
    </Container>
  )
}

export default Login


const Container = styled.div`
    position:relative;
    height: 100vh;
    color:white;
    display:flex;
    align-items:top;
    justify-content:center;

    &:before{
       background-position:top;
       background-size:cover;
       background-repeat:no-repeat;
       background-image: url("./images/login-background.jpg");

        content:"";
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
        opacity:0.7;
        

    }
    `
const Cta = styled.div`
 max-width:650px;
padding: 80px 40px;
width:80%;
display:flex;
flex-direction:column;
margin-bottom:100px;


`

const CTALogoOne = styled.div`


    
`

const  SignUp = styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
border-radius: 4px;
text-align:center;
padding:8px 0;
font-size:12px;
cursor:pointer;
transition:all 250ms;
letter-spacing:0.8px;
margin-top:8px;
margin-bottom:12px;


&:hover{
  background:#0483ee;
}
    
`


const Description = styled.p`
font-size:11px;
text-align:center;
letter-spacing:0.5px;
`

const CTALogoTwo = styled.div`

img{
   
    width:90%;
}
`



