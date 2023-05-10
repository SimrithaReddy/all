import { useEffect,useState } from 'react';
import Header from './header';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

export default function App() {
  const [itemData, setitemData]=useState([])
  // eslint-disable-next-line
  const [selectimg, setSelectimg]=useState("")
  const [index, setindex]=useState(-1)
  useEffect(()=>{
    if(selectimg===""){
      fetch('https://backend-gallery.onrender.com/')
      .then(res => res.json()).then((d) => {
        console.log(d)
        setitemData(d)
      }).catch((e) => { console.log(e.message) })
    }else{
      fetch(`https://backend-gallery.onrender.com/${selectimg}`)
      .then(res => res.json()).then((d) => {
        console.log(d)
        setitemData(d)
      }).catch((e) => { console.log(e.message) })
    }
  },[selectimg])

  const handleDel=async(e,item)=>{
    e.preventDefault();
    await fetch(`https://backend-gallery.onrender.com/${item._id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json()).then((d) => {
        console.log(d)
        alert(`${item.title} deleted successfully`)
      }).catch((e) => { console.log(e.message) })
  }

  return (
    <>
    <Header setSelectimg={setSelectimg}/>
    <Box className='my-app'>
      <ImageList variant="masonry"  gap={18} cols={3}>
        {itemData.map((item,i) => (
          <ImageListItem key={item.PostImage}>
           <img
              src={`${item.PostImage}`}
              srcSet={`${item.PostImage}`}
              alt={item.title}
              loading="lazy"
              onMouseEnter={(e)=>setindex(i)}
            />
           {
            index===i && <div className='imagelistitem'>
              <h3>{item.title}</h3>
              <span className='fl'><DeleteIcon onClick={(e)=>handleDel(e,item)}/></span>
            </div>
           }
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </>
  );
}