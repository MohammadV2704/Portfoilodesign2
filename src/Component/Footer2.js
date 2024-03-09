import React from 'react'
import './Footer2.css';

const Footer2 = () => {
  return (
    <>
      <footer>
        <div className='row'>
          {/* <div className='col'>
            <h3><span>A</span>DDRESS</h3>
            <p>Sai BaBa Road</p>
            <p>8 Parth Exzotica Society, Patan</p>
            <p className='email-id'>Vohramohammad5253@gmail.com</p>
            <h4><span>+91</span>-7096365253</h4>
          </div> */}
          <div className='col'>
            <h3>GET IN<span> TOUCH</span></h3>
            <p>Is there anything i can help you with? inbox and social media are <br />
              always open to you , feel free to ask, i will try my best fot you.
              Thank You for visting.</p>
            <h4><span>+91</span>-7096365253</h4>
              {/* <a href='/' className='btn'>Say Hi..</a> */}
              <div className='button'>
              <a href='/'>Say Hi..</a>
             </div>
          </div>
        </div>
        <hr />
        <p className='copyright'>Design & Build With By Mohammad Vohra</p>
      </footer>
      {/* <section id='row' className='row'>
      <div className='col1'>
            <h3><span>A</span>DDRESS</h3>
            <p>Sai BaBa Road</p>
            <p>8 Parth Exzotica Society, Patan</p>
            <p className='email-id'>Vohramohammad5253@gmail.com</p>
            <h4><span>+91</span>-7096365253</h4>
          </div>
          <div className='col2'>
          <h3>GET IN<span> TOUCH</span></h3>
            <p>Is there anything i can help you with? inbox and social media are <br />
              always open to you , feel free to ask, i will try my best fot you.
              Thank You for visting.</p>
            <a href='/' className='btn'>Say Hi..</a>
          </div>
          <hr />
        <p className='copyright'>Design & Build With By Mohammad Vohra</p>
      </section> */}
    </>
  )
}

export default Footer2
