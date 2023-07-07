import React, {useEffect} from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useSelector }  from 'react-redux';
import { useNavigate, useLocation} from "react-router-dom"
import { useState } from 'react';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';




const Movies = () => {
 



  const films = useSelector((state)=> state.movie?.movies)
 console.log(films)
 
  const location = useLocation()
  const keyProps = location.pathname

  const [imageError, setImageError] = useState(false);


const fallBackPhoto = `${process.env.PUBLIC_URL}/images/backupImg.jpg`;



const [sliderKey, setSliderKey] = useState(keyProps)


useEffect(()=>{
  setSliderKey(keyProps)
},[keyProps])


//console.log("films:", films);
 
  return ( 
   
    <>
    <Container>
      <ImgSlider keyProps={sliderKey}/>
      <Viewers/>
  
  <h4>Recommended for you</h4>
    
  
 
 
  <Contain>  
 
  {

films && films.map((movie )=>(
 
  <Wrap key={movie.id}>
  



<LinkPics to={`/detail/${movie.id}`}>



{movie.image_url ? (
                    <img src={movie.image_url} alt="" />
                  ) : (
                    <img src={fallBackPhoto} alt="" />
                  )}
     
 


</LinkPics>




  </Wrap>
  
))
  
  }
    
  </Contain>

    </Container>
    </>
  )
}

export default Movies;

const Container = styled.div`
//z-index:999 !important;
//position: relative;


h4{
    text-align:start;
    font-size:18px;
    font-weight:bold;
    text-transform:uppercase;
    font-style:italic;
    padding-left:40px;
 
color:white;

    
  }  

  @media (max-width:768px) {

       
  h4{
    text-align:center;
    font-size:18px;
    font-weight:bold;
    text-transform:uppercase;
    font-style:italic;
   // padding-top:20px;

  
  }  

    
  }
    
`



const LinkPics = styled(Link)`
//margin-top:20px;


 

  

  



`

const Contain= styled.div`
 
  padding-top:30px;
   
   display:grid;
grid-gap:5px;
grid-template-columns: repeat(4, minmax(0, 1fr));




`

const Wrap = styled.div`
border-radius:10px;
display:inline-block;
//margin:4px;
  padding-left:30px;

transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  
    @media (max-width:768px) {
     padding-left:15px !important;
    }


    img{
       
        //object-fit:cover;
        border: 3px solid rgba(249, 249, 249, 0.1);
        box-shadow: rgb(0 0 0 / 73%) 0 16px 10px -10px;
        width:250px;
        height:170px;
        border-radius:15px;
      
     //   z-index:999;
 // position: relative;
     
      @media (max-width:768px) {
          width:100px;
          height:70px;
          
        
      }
    
     
     
    
    }
 &:hover{
   transform:scale(1.05);
   box-shadow: rgb(0 0 0 / 73%) 0 16px 10px -10px;
    
 }
Link{

  opacity:1;
  //padding:10px
}


`