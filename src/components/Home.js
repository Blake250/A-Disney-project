import React, {useEffect} from 'react';
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from "./Movies";
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

import { setMovies } from './app/movie/filmSlice';




const Home = () => {
  const dispatch = useDispatch()
 
useEffect(()=>{ 
  const colRef  = collection(db, "movies")
  getDocs(colRef)
  .then((resp)=>{
    let film = []
    resp.docs.forEach((doc)=>{
  
      film.push({  ...doc.data(),  id:doc.id })
    })
  console.log(film)
   dispatch(setMovies(film))
   



   

})
  .catch((err)=> console.log(err))
   
  
}, [])
 
 


  return (
    
    <Container>
 
 
      <Movies/>
      </Container>
  )
}

export default Home

const Container = styled.main`
height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 2px);
position:relative;
color:white;
//overflow:hidden;



&:before{
background: url("./images/home-background.png") center center / cover no-repeat fixed;



content: "";
position: absolute;
top:0;
left:5px;
right:0;
bottom:0;
z-index:-1;





}

`

