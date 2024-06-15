import React from 'react'
//import back from"./1s.webp"
import back from "./1st.jpg"
import "./index.css";
import {motion} from 'framer-motion'
import one from"./1o.avif";
import two from "./2nd.jpg";
import three from "./3rd.jpg";
import four from "./4th.jpg";
import five from "./5th.jpg";
import six from "./6th.jpg";
import seven from "./7th.jpg";
import eight from "./8th.png";
import nine from "./11.webp";


const About = () => {
  return (
    <div>
      <img src={back} alt='' style={{width:"100%",height:"500px"}}/><br /><br /><br />
      <motion.h1   
          initial={{y:300}}
          animate={{y:0}}
          transition={{
            duration:2,
            delay:0.1
          }}
          whileHover={{scale:1.5}}
      
      
      style={{fontSize:"40px"}}>WHAT DRIVES US</motion.h1>
      <motion.div
      className='grid' >
        <motion.div    
        initial={{x:-500}}
        animate={{x:0}}
        transition={{
          duration:2,
          delay:0.1
        }}
        whileHover={{scale:1.1}}
        className='grid1'>
            <center>
            <motion.h1   
                  initial={{y:700}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }}
          whileHover={{scale:1.1}}
            >SPIRITE OF UR COMPANY</motion.h1>
            <motion.p  
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }}
           whileHover={{scale:1.1}}
          >These values are our bedrock.They define<br /> and make us. Our character and <br/>destinies are energized by our values.</motion.p>
            <motion.h4  
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }} 
          whileHover={{scale:1.1}}
          >Be passionate about clients success</motion.h4>
            <motion.h4  
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }} 
          whileHover={{scale:1.1}}
          >Treat each person with respect</motion.h4>
            <motion.h4   
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }} 
          whileHover={{scale:1.1}}
          >Be global and responsible</motion.h4>
            <motion.h4 
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }} 
          whileHover={{scale:1.1}}
          >Unyielding integrity in everything we do</motion.h4>
            </center>
        </motion.div>
        <motion.div    
        initial={{x:500}}
        animate={{x:0}}
        transition={{
          duration:2,
          delay:0.1
        }}
        whileHover={{scale:1.1}}
        className='grid2' >
            <center><br />
            <motion.h1
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }}
          whileHover={{scale:1.1}}
          
            >FIVE HABITS</motion.h1><br />
            <motion.p 
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1,
          }}
           whileHover={{scale:1.1}}
            >When our behaviors and ways of working<br/> consistently reflect our values.<br/> We see the five habits in action.</motion.p><br />
            <motion.h4 
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }}
          whileHover={{scale:1.1}}
          >Being Respectful</motion.h4>
            <motion.h4 
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }}
          whileHover={{scale:1.1}}
          > 
            Being Responsive</motion.h4>
            <motion.h4 
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }}
          whileHover={{scale:1.1}}
          >
                Always Communicating</motion.h4>
            <motion.h4 
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1
          }} 
          whileHover={{scale:1.1}}
          >Demonstrating Stewardship</motion.h4>
          <motion.h4 
                  initial={{y:1000}}
                   animate={{y:0}}
                   transition={{
                  duration:2,
                  delay:0.1}}
                  whileHover={{scale:1.1}}
                  >
                    Building Trust</motion.h4>
        
            </center>
        </motion.div>
      </motion.div>
   <center>
   <div className='cont'>
    <motion.div  
       whileHover={{scale:1.1}}
    className='first'><br/><br/>
        <img src={one} alt='' /><br /><br/>
        <h2>Selfie Mood</h2><br />
        <button className='button'>Read More</button>
    </motion.div>
    <motion.div  
       whileHover={{scale:1.1}} className='first'><br/><br/>
        <img src={two} alt='' /><br /><br/>
        <h2>Selfie Mood</h2><br />
        <button className='button'>Read More</button>
    </motion.div>
    <motion.div  
       whileHover={{scale:1.1}} className='first'><br/><br/>
        <img src={three} alt='' /><br /><br/>
        <h2>Selfie Mood</h2><br />
        <button className='button'>Read More</button>
    </motion.div>
   </div>
   
   <div className='cont'>
    <motion.div  
       whileHover={{scale:1.1}} className='first'><br/><br/>
        <img src={four} alt='' /><br /><br/>
        <h2>Selfie Mood</h2><br />
        <button className='button'>Read More</button>
    </motion.div>
    <motion.div  
       whileHover={{scale:1.1}} className='first'><br/><br/>
        <img src={five} alt='' /><br /><br/>
        <h2>Selfie Mood</h2><br />
        <button className='button'>Read More</button>
    </motion.div>
    <motion.div  
       whileHover={{scale:1.1}} className='first'><br/><br/>
        <img src={six} alt='' /><br />
        <h2>Selfie Mood</h2><br /><br/>
        <button className='button'>Read More</button>
    </motion.div>
   </div>
   
   <div className='cont'>
    <motion.div  
       whileHover={{scale:1.1}} className='first'><br/><br/>
        <img src={seven} alt='' /><br />
        <h2>Selfie Mood</h2><br /><br/>
        <button className='button'>Read More</button>
    </motion.div>
    <motion.div  
       whileHover={{scale:1.1}} className='first'><br/><br/>
        <img src={eight} alt='' /><br />
        <h2>Selfie Mood</h2><br /><br/>
        <button className='button'>Read More</button>
    </motion.div>
    <motion.div  
       whileHover={{scale:1.1}} className='first'><br/><br/>
        <img src={nine} alt='' /><br />
        <h2>Selfie Mood</h2><br /><br/>
        <button className='button'>Read More</button>
    </motion.div>
   
   </div>
   </center>
      
    </div>
  )
}

export default About
