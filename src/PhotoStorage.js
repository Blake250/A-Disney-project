import {storage} from './firebase'
import styled from 'styled-components'
import {React, useState, useEffect} from 'react';
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import db from "./firebase"

import {v4} from "uuid"



const PhotoStorage = () => {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])


  const ListAllRefImg = ref(storage, "imageFiles/")

    const UploadImage = ()=>{
      if(imageUpload == null) return;
       

      const imageRef = ref(storage,`imageFiles/ ${imageUpload.name + v4()}`) 

      uploadBytes(imageRef, imageUpload).then((snapshot)=>{
        getDownloadURL(snapshot.ref).then((url)=>{
          imageList((prev)=> [...prev, url])

          
        })
        
      }) 
      

    }
    
    useEffect(()=>{
      listAll(ListAllRefImg).then((response)=>{
        console.log(response)
        response.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            setImageList((prev)=> [...prev, url])


          })
        })

      })
 
    },[])

  /*const upDateForm = document.querySelector(".update")
 upDateForm.addEventListener((e)=>{
  e.preventDefault()

 const docRef =   doc(db, "movies", upDateForm.id.value)

  updateDoc(docRef, {
    title : image-url
  }).then(()=>{
    upDateForm.reset()
  })
 })*/




  return (
    <>

    <Container>





<div >
    <input type="file"onChange={(e)=>{setImageUpload(e.target.files[0])}} />
    <button onClick={UploadImage}> Upload Image</button>
    {imageList.map((url)=>(
      <img src={url}/>
     
   )
   
      
    )}
     


    


</div>


 

        
        
    </Container>  

    </>
  )
}

export default PhotoStorage




const Container = styled.div`

  /*width: 100vw;
  height: 100vh;
  display: flex;
  align-items: space-between;;
 flex-direction: row;
  
  justify-content:space-evenly;
  background-color: white;

img {
  width: 40px;
  margin:5px
  
  
  //align-items:space-between
}*/

`