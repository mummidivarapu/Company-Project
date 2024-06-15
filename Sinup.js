import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import "./sin.css";
import {motion} from 'framer-motion'

const Sinup = () => {
    let navigate=useNavigate();
    const[data,setData]=useState(
        {
            username:'',
            email:'',
            password:'',
            conformpassword:'',

        }
    )
    const{username,password,email,conformpassword}=data;
    const onChange =e=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submithandler =e=>{
        e.preventDefault();
        if(username.length<=5){
            alert("username must contains at least five letters")
        }
        else if(password.length && conformpassword.length <6){
            alert("password contain less than 6 letters");
        }
        else{
                navigate('/Home');
                console.log(data);
               }
    }


  return (
    <div className='form'>
        <center><br/>
        <motion.h1   
          initial={{x:-800}}
          animate={{x:0}}
          transition={{
            duration:2,
            delay:0.1
          }}

        >Enter User Details</motion.h1>
            <form onSubmit={submithandler} className='form1'><br/><br/>
                Username   : <motion.input 
                               initial={{x:800}}
                                animate={{x:0}}
                                 transition={{
                                  duration:1,
                                 delay:0.5  }}
                     type='text' placeholder='enter the username' name={'username'} value={username} onChange={onChange}  /><br /><br />
                UserEmail : < motion.input 
                               initial={{x:800}}
                               animate={{x:0}}
                                transition={{
                                 duration:1,
                                delay:0.5  }}
      
                    type='email' placeholder='enter the email' name={"email"} value={email} onChange={onChange}/> <br /><br />
                Password  : <motion.input 
                                initial={{x:800}}
                                animate={{x:0}}
                                 transition={{
                                  duration:1,
                                 delay:0.5  }}
                    type='password' placeholder='enter the password' name={"password"} value={password} onChange={onChange} /> <br /><br />
                Verification:< motion.input 
                                initial={{x:800}}
                                animate={{x:0}}
                                 transition={{
                                  duration:1,
                                 delay:0.5  }}
                    type='password' name={"conformpassword"} value={conformpassword} onChange={onChange} placeholder='enter the' /> <br /><br />
                {password !== conformpassword ? <p style={{"color":"red"}}>password are not matching</p>:null}
                < motion.input 
                               initial={{x:800}}
                               animate={{x:0}}
                                transition={{
                                 duration:1,
                                delay:0.5  }}
                    type='submit' name='submit' />
            </form>
        </center>
      
    </div>
  )
}

export default Sinup
