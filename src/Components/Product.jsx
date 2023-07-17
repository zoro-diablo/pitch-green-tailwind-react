import {useState} from 'react'
import Banner from '../Container/Banner'
import Specs from './Specs'
import Blog from './Blog'
import SideBar from '../Container/SideBar'
import SpeedBar from '../Container/SpeedBar'


const Product = () => {

    const [isBanner,setIsBanner]=useState(true)

    const onHandleClose=()=>{
        setIsBanner(false)
    }

  return (
    <>
     
      {isBanner ? <Banner onHandleClose={onHandleClose} /> : ''}
      <SpeedBar />
      <Specs />
      <SideBar />
      <Blog />
    </>
  )
}

export default Product
