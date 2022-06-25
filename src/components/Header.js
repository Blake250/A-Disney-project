
import React from 'react';
import styled from "styled-components";


const Header = () => {
    return ( 
       <>
  
        <Nav >   
        <Logo src = "./images/Disney+icon.jpg" />
       
        <NavMenu>
           
              <a>
          <img src="./images/Disney-logo3.jpg" alt="" />
          <span>Home</span>
          
         </a>
     
         <a>
         <img src="./images/search-btn.png" alt="" />
         <span>Search</span>
         </a>
         <a>
            
         </a>
         <a>
            
         </a>
          
         
            
        </NavMenu> 
        </Nav>   
        </>
    )
}

export default Header


const Nav = styled.nav `
height: 70px;
background:#090b13;

`

const Logo = styled.img `
width: 40px;
display:flex;
align-items:flex-start;
padding: 16px;
vertical-align:middle;

`
/*const NavMenu = styled.div `

display:flex;

a{
    & :first-child{
    img{
        height:20px;
       
       position:fixed;
       left:70px;
       top:26px;
    
    }
    span{
          position:fixed;
          left:100px;
          font-size:12px;
          top:30px;
          color:white;
          letter-spacing:0.1rem;
    }
}
}
    
`*/
const NavMenu = styled.div`
img{
    height:25px;
    
    margin-top:-200px;
    margin-bottom:0;
    
    
    }

    span{
   //color:white;
}

    

`



