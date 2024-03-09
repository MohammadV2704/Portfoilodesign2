import React from 'react'
import './Contact2.css'
const Contact2 = () => {
  return (
    <section id='contact'>
    <h2>Connect with<span> Me</span></h2>
    <div className='container Contact_container'>
      <div className='contact_options'>
        <article className='contact__option'>
        <i class="fa-solid fa-envelope"></i>
        <h4><span>E</span> mail</h4>
        <h5>Vohramohammad2704@gmail.com</h5>
        <a href='mailto:Vohramohammad2704#gmail.com' target='_blank'>Send a message</a>
        </article>

        <article className='contact__option'>
        <i class="fa-brands fa-telegram"></i>
        <h4><span>M</span> essenger</h4>
        <h5>Vohramohammad5253</h5>
        <a href='https://t.me/vohramohammad5253' target='_blank'>Send a message</a>
        </article>

          
        <article className='contact__option'>
        <i class="fa-brands fa-whatsapp"></i>
        <h4><span>W</span> hatsapp</h4>
        <h5>7096365253</h5>
        <a href='https://api.whatsapp.com/send?phone7096365253' target='_blank'>Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      {/* <form action=''>
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='Email' name='Email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send message</button>
      </form> */}
    </div>
     </section>
  )
}

export default Contact2

