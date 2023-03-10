
import React from 'react';
import styled from "styled-components"; 
import { useSelector } from 'react-redux';
///import userSlice from '../features/user/userSlice';
import groupIcon from  "../features/backGrd/groupIcon.png"
import {auth, provider} from "../firebase"
import { signInWithPopup } from 'firebase/auth';
import {setUserLogin}  from '../features/user/userSlice';
import { useDispatch} from "react-redux";




const Header = () => {
  const dispatch = useDispatch();
  const userName  = useSelector ((state)=> state.name)
  const userPhoto = useSelector ((state)=> state.photo)



  const signIn = (()=>{
    signInWithPopup(auth, provider).then((resp)=>{
      console.log(resp)
      let user = resp.user
      dispatch(setUserLogin({
        name: user.displayName,
        email:user.email,
        photo:user.photoURL

       

      }))
    }).catch((err)=>(err.message))

  })
    return ( 
      <>

        <Nav> 
          

    <Logo src={`${process.env.PUBLIC_URL}./images/Disney+icon.jpg`} /> 
         
       
        {!userName ? (
         <LoginContainer>
          <Login  onClick={signIn}> LOGIN</Login> 
         </LoginContainer>
         ):

        <>
        <NavMenu> 
        <a>   
        
   
        <img src="./images/home-logo.png" alt="" />
          <span>HOME</span>
          </a>
      
        <a>  
        <img  src="./images/search-btn.png"   alt="" />
         <span>SEARCH</span>
         </a>
       
       
         <a>
         
        <span>WATCHLIST</span>   
         </a>

         <a>
         <img   src={`${process.env.PUBLIC_URL}./images/star.png`}    alt="" />
     
           <span>ORIGINALS</span>
          
     
           </a>
       
         <a>
           <img  src= "./images/film.png" /> 
           <span>MOVIES</span>
         </a>

         <a>
        
         <img src="./images/series.png" alt="" />
           <span>SERIES</span>
         </a>
      
                     
        
  </NavMenu>
  
 
  <UserImg>
          <img src="./images/profile.jpg" alt="" />
          </UserImg>  
  
         
    </>
      }

    
</Nav>
</>
 )

 }


export default Header



const Nav = styled.nav `
height: 60px;
background:#090b13;

display:flex;
padding-right:5px;

`

const Logo = styled.img `
@media (max-width:768px) {


  width: 40px;
  height:40px;
display:flex;
align-items:flex-start;
position: static;
margin-left:7px;
margin-top:1px;
  
}

width:60px;
display:flex;
align-items:flex-start;
margin-left:20px;
margin-top:1px;
position:static;


`

const NavMenu = styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
position:static;
left:330px;
top:3px;



@media (max-width:768px) {
  display:flex;
flex:1;
align-items:center;
justify-content:center;
position: static;
left:55px;
top:0;


}



a{
    
  display:inline-flex;
  justify-content:center;
  align-items:center;
  margin-left:30px;

 
  @media (max-width: 768px) {
    display:inline-flex;
  justify-content:center;
  align-items:center;
  margin-left:7px;
  }
    img{
     height:18px;
     margin:4px;
   
    background-position:center;
  background-color:white;
  padding:1px;
   border-radius:50px;
  display:flex;
  @media (max-width: 768px) {
    height:12px;
    margin:2px;
  
   background-position:center;
 background-color:white;
 padding:1px;
  border-radius:50px;
 display:flex;



   
 
   }
   

    }


        span{
    font-size:10px;
    color:white;
    letter-spacing:1px;
    margin-left:5px;
   
    position:relative;
    
  
  

    &:after{
        content: "";
        height:2px;
        background:white;
        position:absolute;
        left:0;
        right:0;
        bottom:-6px;
       opacity:0;
       transform-origin:left center;
       transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
       transform:scaleX(0);

    }
    &:hover{
      span:after{
         
            transform: scaleX(1);
            opacity: 1;
            color:yellow;
        }
    } 




    @media (max-width: 768px) {

      font-size:8px;
    color:white;
    letter-spacing:1px;
    margin-right:2px;
   
    //position:relative;
    
  
  

    &:after{
        content: "";
        height:2px;
        background:white;
        position:absolute;
        left:0;
        right:0;
        bottom:-6px;
       opacity:0;
       transform-origin:left center;
       transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
       transform:scaleX(0);

    }
    &:hover{
      span:after{
         
            transform: scaleX(1);
            opacity: 1;
            color:yellow;
        }


    }
 
  }
  
 }
 
    
  
}

  

`
const UserImg = styled.div`
display:flex;
flex:1;
justify-content:flex-end;

//position:relative;

img{
    border-radius:50px;
   margin-right:-20px;
    height:53px;
    width:53px;
    position:static;
    right:35px;
    top:0;
    margin-top:7px;

}




 @media (max-width:768px) {

  display:flex;
flex:1;
justify-content:flex-end;
position:relative;

img{
    border-radius:50px;
   margin-right:-23px;
    height:38px;
    width:38px;
    position:static;
    right:35px;
    top:3px;
    margin-top:1px;

}

 
}


`

const Login = styled.div`






  border: 1px solid #f9f9f9;
  padding:4px 10px;
border-radius:4px;
font-size:10px;
letter-spacing:1.5px;
text-transform:uppercase;

background-color:#32303099;
color:white;
transition:all 0.2s ease 0s;
cursor:pointer;
margin-bottom:20px;

&:hover{
  background-color:#f9f9f9;
  color:#000;
  border-color:transparent;

}





`

const LoginContainer = styled.div`
flex:1;
margin-top:0;
display:flex;
justify-content: flex-end;

align-items:center;
  
`





