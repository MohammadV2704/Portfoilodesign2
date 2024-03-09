import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
// import About from './Component/routes/About'
const Footer = () => {
  return (
    <>
     {/* <div className='h'></div> */}
     
      <section className='services' id='services'>
        <h2>What I Can<span> Do</span></h2>
        <div className='services-container'>
          <div className='services-box'>
            <i class="fa-solid fa-code"></i>
            <h3>Web Development</h3>
            <p>I specialize in turning stunning designs into functional and high-performing websites and provide a seamless and Enjoyable user experience</p>
          </div>

          <div className='services-box'>
            <i class="fa-brands fa-hive"></i>
            <h3>Blockchain Development</h3>
            <p>I am working as a full stack Blockchain  developer from past 2 years I specialize in turning stunning designs into functional and high-performing websites</p>
          </div>
          <div className='services-box'>
            <i class="fa-solid fa-chart-simple"></i>
            <h3>Best Performance</h3>
            <p>i am skilled in Developing high-performing websites and Blockchain Applications that provide a<br /> seamless and Enjoyable user experience</p>
          </div>
        </div>
      </section>
     
    </>
  )
}

export default Footer
{/* <p>Hello I'm Mohammad Vohra I'm From patan,GUJRAT I do My B.tech Dregree in
                         Computer Engineering For Sankalchand Patel University ,Visnagar.I am Working as a Full stack Blockchain Developer
                          From past 1 year and is Such WonderFull Experience.</p> */}