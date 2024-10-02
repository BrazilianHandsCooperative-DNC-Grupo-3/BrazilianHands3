import React from 'react';
import './index.scss';
import TeamForm from '../../components/teamForm/teamForm'
import NavBar from '../../components/navBar/navBar';

const JoinOurTeam = () => {

  return (
    <div>
      <NavBar />

      <section className='container'>
        <section className='text-JoinOurTeam'>
          <h1>
            Join Our Team <br />
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

      <TeamForm />

    </div>
  )
}

export default JoinOurTeam