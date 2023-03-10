import React from 'react';
import styled from "styled-components";
import {selectMovies} from "../features/movie/movieSlice"; 
import { useSelector }  from 'react-redux';
import { useNavigate} from "react-router-dom"



const Movies = () => {
 


  const films = useSelector((state)=> state.movies)
  //console.log(films)
  let navigate = useNavigate()
  return (
   
    <>
    <Container>
 <h4>Recommended for you</h4>
  <Contain>  
    
  {

films && films.map((movie )=>(
 
  <Wrap key={movie.id}>
  
  <button onClick={()=> {navigate(`/detail/${movie.id}`)}}> 

  <img src={movie.image_url}/>

</button>



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
   
    
    
`


const Contain= styled.div`
 
  
   
   display:grid;
grid-gap:10px;
grid-template-columns: repeat(4, minmax(0, 1fr));

`

const Wrap = styled.div`
border-radius:10px;
display:inline-block;
margin:4px;

transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  
    


    img{
       // height:90px;
       //width:110px;
        object-fit:cover;
        border: 3px solid rgba(249, 249, 249, 0.1);
        box-shadow: rgb(0 0 0 / 73%) 0 16px 10px -10px;
     
   
    
     
     
    
    }
 &:hover{
   transform:scale(1.05);
   box-shadow: rgb(0 0 0 / 73%) 0 16px 10px -10px;
    
 }


`