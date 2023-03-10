import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import backphoto from "../features/backGrd/backphoto.jpg";
import  groupIcon from "../features/backGrd/groupIcon.png";
import db from "../firebase"
import { getDoc,   doc } from 'firebase/firestore';
import { async } from '@firebase/util';






  const Detail = () => {
  let {id}= useParams()
  //console.log(id)
  const [movie, setMovie] = useState([])




 const getData = async ()=>{

  const docRef = doc(db, "movies", "1kEw2jwcVMwzILle1tuD");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    setMovie(docSnap.data())
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
 }
 
  
 
 useEffect(()=>{
  getData()

 }, [])
  
    




  return (

    <div>
      {movie && (
      <>   
    <Container>  
    <BackGround>
 
      <img src={backphoto} alt="" />
    </BackGround>
     
    
    <ImageTitle>
     <h2>{movie.Title}</h2>
    </ImageTitle>
    <Controls>
  <PlayButton>
    <img src="./images/play-icon-black.png" alt="" />
    <span>PLAY</span>
    
  </PlayButton>
  <TrailerButton>
  <img src="./images/play-icon-white.png" alt="" />
    <span>Trailer</span>
  </TrailerButton>

<AddButton>
<span>+</span>
</AddButton>
<GroupWatchButton src= {groupIcon} />
    


</Controls>
<SubTitle>
     
  <h4>{movie.Director}</h4> 
    
    
      
</SubTitle>

<Description>
The Lost City [5] is a 2022 American action-adventure comedy film directed by the Nee brothers, who co-wrote the screenplay with Oren Uziel and Dana Fox,
 from a story conceived by Seth Gordon.[6] 
 It stars Sandra Bullock and Channing Tatum as a romance novelist and her cover model, 
 who must escape a billionaire (Daniel Radcliffe) and find the lost ancient city described in one of her books.
  The film co-stars Da'Vine Joy Randolph, with cameo appearances by Brad Pitt and Stephen Lang.
</Description>

   
    </Container>  

    </>
)}  
    </div>
  )
}


export default Detail


const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0  calc(3.5vw  + 5px);
position: relative;
overflow:hidden;


`

const BackGround = styled.div`
position:fixed;
top:60px;
left:0;
bottom:0;
right:0;
opacity:0.8;
background-image: url(${backphoto});




img{
    width:100%;
    height:100%;
    object-fit:cover;
    
}
    
`


const ImageTitle =  styled.div`

h4{
    color:#ffffff;
   
   filter: brightness(100%);
   font-style:italic;
   font-weight:600;
   font-size:20px;
   position: relative;
  
}

h2{
   color:#ffffff; 
   filter:brightness(100%);
  font-size:100px;
  font-style:oblique;
  font-weight:600;
  position:absolute;
  bottom:280px;
}

`


const Controls = styled.div`
   display:flex; 
   margin-top:120px;
   border-radius:4px;
   align-items:center;
   //justify-content:center;
  
    
  
`

const PlayButton = styled.div`
     color:black;
    filter:brightness(100%);
    background-color:white;
    width:72px;
    height:30px;
    display:flex;
    align-items:center;
    font-size:10px;
    border-radius:4px;
    margin:45px 5px 0;
    
    justify-content:center;
    letter-spacing: 0.4px;
   
   
    
    cursor: pointer;
    img{
        width:25px;
    }
    &:hover{
       background: rgb(198, 198, 198);
    }
  
    
    
 span{
  margin-left:-23px;
 }

  


`

const TrailerButton = styled(PlayButton)`
 
 background: rgba(104, 101, 101, 0.3);  
 color:white;
 border: 1px solid rgb(249, 249, 249);
 text-transform: uppercase;
 display:flex;
  

`

const AddButton = styled.div`
width:30px;
height:30px;
color: black;
background-color: white;
display:flex;
justify-content:center;
align-items:center;
filter: brightness(100%);
border-radius: 50%;
background-color: rgba(255, 255, 255, 0.3);  
color:white; 
border: 1px solid rgba(104, 101, 101, 0.4);
margin: 45px 5px 0;


span{
    font-size: 25px;
    margin-bottom:7px;
  


}
    
    
`
const GroupWatchButton = styled( AddButton)`
background-image: url(${groupIcon});
padding:2px;
background-position:center;










`

const SubTitle = styled.div`
    
color:white;
filter: brightness(100%);
font-size:15px;
min-height:20px;
margin-top:26px;

`

const Description = styled.div`
       
color:white;
filter: brightness(100%); 
line-height:1.4;
font-size:13px;
margin-top:16px;


`

