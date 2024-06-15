import React,{useEffect} from 'react'
import AOS from 'aos'
import "./sin.css"
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div style={{width: "100%",
    height: "500px",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
      <div>
        <div className='animation' data-aos="fade-up"></div>
        <div className='animation' data-aos="fade-up"></div>
        <div className='animation' data-aos="fade-up"></div>
        <div className='animation' data-aos="fade-left"></div>
        <div className='animation' data-aos="flip-right"></div>
        <div className='animation' data-aos="zoom-in"></div>
      </div>
      
    </div>
  )
}

export default Contact
