import React from 'react'
import './index.scss'
import ContactForm from '../../components/contactForm/contactForm'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'

const ContactUS = () => {
  return (
    <div>
      <NavBar />
      <section className='container'>
        <section className='text-JoinOurTeam'>
          <h1>
            Contact Us
          </h1>
          <p>
            Contact us by providing your details below, along with the<br />
            service you need, so that one of our professionals can get in<br />
            touch with you.<br />
          </p>
        </section>
      </section>
      <div className='display'>
      <ContactForm />
      <Footer/>
      </div>
    </div>
  )
}

export default ContactUS