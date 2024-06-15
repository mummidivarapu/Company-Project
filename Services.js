import React,{useEffect} from 'react'
import "./sin.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

function Services(){
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
 
  return (
    <div style={{width: "100%",
    height: "1500px",
    
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
      <div className='content'>
        
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://media.istockphoto.com/id/1324904634/photo/multiethnic-young-business-people-working-together-in-the-office.jpg?s=612x612&w=0&k=20&c=rBaY3zUDzZnjDlICJ03y8CCtJzDh_ZQ3z6es4hzfnJ8=' alt=''/>
          <h3>Project sucess</h3>
          </a>
        </div>
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://24slides.com/presentbetter/content/images/wordpress/2018/12/company-profile-presentation-tips.jpg' alt=''/>
          <h3>Client Thems</h3>
        
          </a>
        </div>
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://www.smallbusiness.nsw.gov.au/sites/default/files/styles/1280/public/2023-07/iStock-1492719618.jpg?itok=T1vG28Cx' alt=''/>
          <h3>Working place</h3>
          </a>
        </div >
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://lh3.googleusercontent.com/proxy/3YVA4igcdan-86CguPxje3nT449eRE8_anbgqO2rXVNTDT1oq3QlGtx3zoADVaH7AnPN6dec3a4b_GbVBIZOgNv4ijJjUmUznlQJHVbIB8cF' alt=''/>
         <h3> Company Architecture</h3>
          </a>
        </div>
      </div>
      <div className='content1'>
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg' alt=''/>
          <h3> Our Company</h3>
          </a>
        </div>
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://thumbs.dreamstime.com/b/got-some-questions-group-young-people-sitting-conference-together-one-men-raising-his-hand-73266884.jpg' alt=''/>
          <h3>Business Solution</h3>
          </a>
        </div>
      </div>
      <div className='content'>
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://st3.depositphotos.com/10638998/15140/i/450/depositphotos_151403040-stock-photo-business-team-celebrating-success.jpg' alt=''/>
          <h3>Business Solution</h3>
          </a>
        </div>
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://img.indiafilings.com/learn/wp-content/uploads/2016/09/12010621/Company-Management.jpg' alt=''/>
          <h3>Client Thems</h3>
          </a>
        </div>
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://tweakyourbiz.com/wp-content/uploads/2022/05/A-good-manager.jpg' alt=''/>
          <h3>Project Discussion</h3>
          </a>
        </div >
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://blog.ipleaders.in/wp-content/uploads/2018/03/BV-Acharya.jpg' alt=''/>
          <h3>No One Can Beat</h3>
          </a>
        </div>
      </div>
      
      <div className='content1'>

        <div data-aos="zoom-in">
        <a href="">
          <img src='https://www.indiafilings.com/learn/wp-content/uploads/2019/08/Registrar-of-Companies.jpg' alt=''/>
          <h3>Infratecture</h3>
          </a>
        </div>
        <div data-aos="zoom-in">
        <a href="">
          <img src='https://media.istockphoto.com/id/1479421288/photo/money-transfers-from-different-currencies-internationally-and-currency-exchange-online.jpg?s=612x612&w=0&k=20&c=U8eRCvmc5oYOJ233beHUg2MeuCFjyMj2TknDd9fcooI=' alt=''/>
          <h3>Applications</h3>
          </a>
        </div>
      </div>
      
      
    </div>
  )
}

export default Services
