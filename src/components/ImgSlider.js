import React, {Suspense} from 'react';
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react';



const ImgSlider = () => {





 let settings = {

    dots : true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay: true,
    
 }


  return (
   <>  
    <Carousel  {...settings}>
     

      
     <Wrap>
     <Suspense fallback={<div>Loading...</div>}>
       <img src="/images/slider-badging.jpg" alt="" /> 
       </Suspense>
    </Wrap>
   

    <Wrap>
    <Suspense fallback={<div>Loading...</div>}>
       <img src="/images/slider-badag.jpg" alt="" /> 
       </Suspense>
    </Wrap>

    </Carousel>

    </>
  )
}

export default ImgSlider



const Carousel = styled(Slider)`
margin-top:20px;

.slick-list{
   overflow:visible;
};

ul li button{
   & ::before{
     font-size: 10px;
     color:white;
   }
  
}
li.slick-active button::before {
color:white;
} 


button{
z-index:1;
 
}

`


const Wrap = styled.div`
cursor:pointer;
img{
   border-radius: 4px;
   width:100%;
   height:100%;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   border: 4px solid transparent;
   
   
 &:hover{
   border:4px solid rgba(249, 249, 249, 0.8);
 }

}
    
`