
import React, { useEffect } from 'react';
import styled from "styled-components"; 
import { useSelector } from 'react-redux';
//import userSlice from '../features/user/userSlice';
import groupIcon from  "../features/backGrd/groupIcon.png"
import {auth, provider} from "../firebase"
import { signInWithPopup, signOut,onAuthStateChanged } from 'firebase/auth';
import {setUserLogin, setUserLogOut}  from '../features/user/userSlice';
import { useDispatch} from "react-redux";
import { useNavigate, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';






const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const userName  = useSelector ((state)=> state.user?.name)
  console.log(userName)
//  const userPhoto = useSelector ((state)=> state.photo)

  const signIn = (()=>{
    signInWithPopup(auth, provider).then((resp)=>{
    
  
     navigate("/")

  
      const  user = resp.user
      dispatch(setUserLogin({
        name: user.displayName,
        email:user.email,
        photo:user.photoURL

       

      })
       )
  
    }).catch((err)=>(err.message))

  })




 const signOutBtn = (()=>{
  console.log(`this is an error from the ${signOutBtn}` )
    signOut(auth).then((res)=>{
    
      dispatch(setUserLogOut())
      setTimeout(()=>{
        navigate("/login")
      }, 3000)
    }).catch((err)=> console.log(err))
  })
 
useEffect(()=>{
onAuthStateChanged(auth, (user)=>{
  navigate("/")
  if(user){
    dispatch(setUserLogin({
      name: user.displayName,
      email:user.email,
      photo:user.photoURL



    } ))
    
   
  }else{dispatch(setUserLogOut())

  }

  
})




}, [])

  
  
  

    return ( 
      <>

        <Nav> 
         
        <Link  to={"/movies"} >    
       <Logo  src={`${process.env.PUBLIC_URL}./images/Disney+icon.jpg`}/> 
       </Link>
    
  
         
         
    <Container>     
        {userName ? 
(

<NavMenu> 
 
<a >   

  
<img src="./images/home-logo.png" alt="" />
  <span>HOME</span>
 
  </a>


<a>  
<img  src="./images/search-btn.png"   alt="" />
 <span>SEARCH</span>
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

 
 <UserImg   onClick={signOutBtn}>
          <img src="./images/profile.jpg" alt="" />
     </UserImg> 
 
             

</NavMenu>



         )
         :
     

      (


         <LoginContainer>
         <Login  onClick={ signIn}> LOGIN</Login> 
        </LoginContainer>


    )
        
      
}
   

 
         
    
     
  
  </Container>

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
width:20px;


img{
 
  vertical-align:middle;
  width:60px !important;

}



@media (max-width:768px) {


  width:35px;
  height:35px;
display:flex;
align-items:flex-start;

margin-left:10px;
margin-top:17px;
vertical-align:center;
  
}

width:60px;
display:flex;
align-items:flex-start;
margin-left:20px;
margin-top:1px;
position:static;


`

const Container = styled.div`
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:15px;

`


const NavMenu = styled.div`
display:flex;
flex:1;

justify-content:center;
align-items:center;
position: relative;
z-index:999;







@media (max-width:768px) {
  display:flex;
flex:1;
align-items:center;
justify-content:center;
position: static;
left:55px;
top:0; 
//bottom:50px;


}



a{
    
  display:flex;
  justify-content:center !important;
  vertical-align:center;
  align-items:center;
  margin-left:80px;
  //position:absolute;
  padding-left:20px;
  padding-top:30px;
  position:relative;
    z-index:999;



  /*&>img{
    object-fit:contain;
    vertical-align:middle;
  }*/

 
  @media (max-width: 768px) {
   // display:inline-flex;
  justify-content:center;
  align-items:center;
  margin-left:17px;
  padding-left:0;


 
  }
    img{
     height:18px;
     margin:4px;
     object-fit:contain !important;

   
    background-position:center;
  background-color:white;
  padding:3px;
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
 object-fit:contain;



   
 
   }
   

    }


        span{
    font-size:10px;
    color:white;
    letter-spacing:1px;
    margin-left:5px;
   
    position:relative;
    z-index:999;
    
  
  

    &:after{
        content: "";
        height:2px;
        background:white;
        position:absolute;
        left:0;
        right:0;
        bottom:-6px;
      // bottom:0;
       opacity:0;
       transform-origin:left center;
       transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
       transform:scaleX(0);
      // transform: translateX(-50%);
    

    }
  
 



    @media (max-width: 768px) {

      font-size:8px;
    color:white;
    letter-spacing:1px;
    margin-right:2px;
   
    //position:relative;
  
   
 
  }
  
 }
 
 &:hover{
      span:after{
         
            transform: scaleX(1);
            opacity: 1;
           // color:yellow;
        }
    } 

  
}

  

`
const UserImg = styled.div`
display:flex;
//flex:1;
justify-content:flex-end;
align-items:flex-end !important;
z-index:999;
position:relative;

img{
    border-radius:50px;
 margin-left:30px;
    height:53px;
    width:53px;
    position:absolute;
  


    left:50px;
   top:-16px;


   //bottom:-60px;

}




 @media (max-width:768px) {

  display:flex;
flex:1;
justify-content:flex-end;
position:relative;
margin-top:29px;
padding-right:50px !important;
align-items:center;

img{
    border-radius:50px;

    height:33px;
    width:33px;
    position:absolute;
    margin-left:-20px;
  

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

display:flex;
align-items:flex-end;
justify-content:flex-end !important;
position:absolute;
top:1px;
left:69rem;
@media (max-width:768px) {
  position:absolute;
top:1px;
left:24rem;
}




&:hover{
  background-color:#f9f9f9;
  color:#000;
  border-color:transparent;

}





`

const LoginContainer = styled.div`
flex:1;
//margin-top:0;
display:flex;
justify-content: center;


align-items:center;
position: relative;
  
`





