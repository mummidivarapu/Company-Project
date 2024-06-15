import React ,{useState,useEffect}from 'react'
import AOS from 'aos'
import "./sin.css"
import { useNavigate } from 'react-router'


const Help = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  let navigate=useNavigate();
    const[data,setData]=useState(
        {
            username:'',
            email:'',
            password:'',
           
            phone:'',
            job:'',

        }
    )
    const{username,password,email,phone,job}=data;
    const onChange =e=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submithandler =e=>{
        e.preventDefault();
        if(username.length<=5){
            alert("username must contains at least five letters")
        }
        else if(password.length  <6){
            alert("password contain less than 6 letters");
        }
        else{
                navigate('/Home');
                console.log(data);
                alert("your request sucessfully send");
               }
    }

  return (
    <div style={{width: "100%",
    height: "1300px",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}} className='form'>
      <img src='https://muplast.in/wp-content/uploads/2023/01/contact-us.jpg' alt=''/>
      <h1   
          initial={{x:-800}}
          animate={{x:0}}
          transition={{
            duration:2,
            delay:0.1
          }}
          data-aos="zoom-in"
          style={{color:"white"}}
        >Enter User Details</h1>
            <form onSubmit={submithandler} className='form1'>
                Username   : <input 
                               initial={{x:800}}
                                animate={{x:0}}
                                 transition={{
                                  duration:1,
                                 delay:0.5  }}
                     type='text' placeholder='enter the username' name={'username'} value={username} onChange={onChange} data-aos="zoom-in" /><br /><br />
                UserEmail : < input 
                               initial={{x:800}}
                               animate={{x:0}}
                                transition={{
                                 duration:1,
                                delay:0.5  }}
      
                    type='email' placeholder='enter the email' name={"email"} value={email} onChange={onChange} data-aos="zoom-in"  /> <br /><br />
                Password  : <input 
                                initial={{x:800}}
                                animate={{x:0}}
                                 transition={{
                                  duration:1,
                                 delay:0.5  }}
                    type='password' placeholder='enter the password' name={"password"} value={password} onChange={onChange} data-aos="zoom-in" /> <br /><br />
  
              
                Mobile No : <input type='tel' placeholder='phone number' name={"phone"} id='phone' data-aos="zoom-in" /><br /><br />
                Qulification:<input type='text' name={"job"} id='job' placeholder='enter your job' data-aos="zoom-in" /><br /><br />
                <textarea rows={4} cols={50} data-aos="zoom-in" >   Message</textarea><br /><br />
                < input 
                               initial={{x:800}}
                               animate={{x:0}}
                                transition={{
                                 duration:1,
                                delay:0.5  }}
                    type='submit' name='submit' data-aos="zoom-in" />
                   
            </form>
       
    </div>
  )
}

export default Help
