import React from 'react'
import carImg from '../assets/heroCar.png'
import Slider from '../Component/Slider'
import ClassicCarsSection from '../Component/sectionHome'

function Home() {

  return (
    <>

<div style={{ position: "relative" }}>
  <p  className="absolute top-[200px] left-[370px] text-white font-[cursive] text-[84px] font-bold ">
    Driven By Drivers
  </p>

  <img  className="h-[700px] w-full" src={carImg} />
</div>


    <div className='text-center font-extrabold dark:bg-gray-900 text-white ' style={{height:"250px" }}>
        <p style={{fontSize:"40px",fontFamily:"cursive"}}>Welcome to Classic – Your destination for timeless classic cars</p>
        <p className="font-[cursive] text-[25px]"  >"Are you a fan of classic cars? Here at Classic, we offer a curated selection of original classic cars that combine luxury and history. Browse our collection of unique vehicles and enjoy an exceptional buying experience. Every car has a story, discover the story that sets you apart.". 🚗✨.</p>
    </div>


<Slider/>

<ClassicCarsSection/>



    </>
  )
}

export default Home
