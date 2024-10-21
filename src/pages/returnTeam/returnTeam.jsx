import React from 'react'
import './index.scss'
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';


const ReturnTeam = () => {
  return (

    <div>
        <NavBar/>
        <section className='image-ReturnTeam'>

          <section className='text-ReturnTeam'>
          <h1>
            Thank You for Your Submission! <br />
            <br />
          </h1>
          <p>
          Thank you for taking the time to fill out our service<br />
          request form. We appreciate your interest in our <br />
          services, and we are currently reviewing your  <br />
          information. One of our professionals will be in touch<br />
          with you shortly to discuss the next steps.<br />
          <br />
          We look forward to assisting you!
          </p>
        </section>

      </section>
      <Footer/>
    </div>
      
  )
}

export default ReturnTeam