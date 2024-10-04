import React from 'react'
import './index.scss'
import ContactForm from '../../components/contactForm/contactForm'
import NavBar from '../../components/navBar/navBar'

const ContactUS = () => {
  return (
    <div>
      
         <NavBar />
         <section className='container'>
        <section className='text-JoinOurTeam'>
          <h1>
          schedule your service <br />
            <br />
          </h1>
          <p>
            Work with us. Please provide your details below and describe <br />
            the services you offer to join our team <br />
            <br />
            Join Brazilian Hands Cooperative: Where Your Skills Meet <br />
            Opportunity!
          </p>
        </section>
      </section>
      
         
        <ContactForm />
    </div>
  )
}

export default ContactUS