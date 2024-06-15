import React from 'react'
import "./index.css";
//import back from "./1st.jpg";
import {motion} from 'framer-motion'
// import back from "./1st.jpg";
// import { useNavigate } from 'react-router';


const Home = () => {
  // const navigate=useNavigate();

  // const handleclick = ()=>{
  //    navigate('/About');
  // }
  return (
    <center>
    <div style={{width: "100%",
        height: "600px",
         background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", marginTop:"-10px"
         }}
    className='container'>
      <motion.h1
      initial={{x:-500}}
      animate={{x:0}}
      transition={{
        duration:1,
        delay:0.5
      }}
      
      className='heading'>
        Welcome.
      </motion.h1>
      
      <motion.input 
      initial={{x:-500}}
      animate={{x:0}}
      transition={{
        duration:1,
        delay:0.5
      }}
      type='text' className='c1' placeholder='Search'/><br/>
      {/* <img src={back} alt='' className='img' /> */}
      <motion.h3
      initial={{x:800}}
      animate={{x:1}}
      transition={{
        duration:1,
        delay:0.5
      }}
      style={{marginTop: "230px",
        fontSize: "40px",
        fontWeight: "400",
        fontFamily:'Times New Roman', 
        color: "white",marginLeft:"250px"}}
      >Landing page</motion.h3>
     
     <motion.button
     initial={{x:-500}}
     animate={{x:0}}
     transition={{
       duration:1,
       delay:0.5
     }}
      className='but1'>
      See More
     </motion.button>
     <motion.button
     initial={{x:-500}}
     animate={{x:0}}
     transition={{
       duration:1,
       delay:0.5
     }}
      className='but2'>
      Free To Join
     </motion.button>
     

     {/* <img src={back} alt='' onClick={handleclick}/> */}
      </div>
    </center>

  )
}

export default Home
