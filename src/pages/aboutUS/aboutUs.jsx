import './index.scss'
import NavBar from '../../components/navBar/navBar.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.jsx'

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <section className='container'>
        <div>
          <div className="container__about-us">
            <div><h1>About Us</h1>
              <p>
                Brazilian Hands Cooperative is a residential services provider operating in Ireland's major cities, including Dublin, Cork, Galway, and Limerick. We specialize in offering deep clean, garden cleaning, and home maintenance services, always committed to combining high quality with excellent cost-effectiveness.
              </p>
              <p>
                With a dedicated and skilled team, our mission is to transform our clients' living spaces by providing services that ensure comfort, safety, and well-being in daily life. Every detail is carefully planned to offer a unique experience, whether through deep cleaning or regular home care.
              </p>
            </div>
          </div>
        </div>
        <div className='container__mission'>
          <div>
            <h2>Mission</h2>
            <p>
              Our mission is to provide excellent residential services, ensuring clean, organized, and functional environments for our clients throughout Ireland. We aim to be the number one choice for home services, standing out for our quality, efficiency, and affordability.
            </p>
            <h2>Vision</h2>
            <p>
              We strive to be recognized across Ireland as the most reliable and efficient company in the residential services sector, offering high-standard solutions that exceed our clients’ expectations. We aim to expand our operations while continuously focusing on customer satisfaction and ongoing improvement.
            </p>
          </div>

        </div>
        <div className='container__vision'>
          <h2>Vision</h2>
          <p >
            <b>Quality:</b> Committed to excellence in every detail, delivering results that truly make a difference.
          </p>
          <p >
            <b>Trust:</b> We cultivate transparent and trustworthy relationships with our clients, creating long-lasting partnerships.
          </p>
          <p>
            <b>Sustainability:</b> We prioritize environmentally friendly practices, using eco-friendly products whenever possible.
          </p>
          <p>
            <b>Cost-Effectiveness:</b> We provide high-quality solutions at competitive prices without compromising service efficiency.
          </p>
        </div>
        <div className='container__missionb'>
          <div>
            <h2>Why Choose Brazilian Hands Cooperative?</h2>
            <p>
              At Brazilian Hands Cooperative, we understand that your home is your sanctuary, and we are committed to keeping it spotless. Operating in Ireland's largest cities, we stand out for our punctuality, attention to detail, and dedication to exceeding client expectations. By combining experience and innovation, we offer services that transform any space while maintaining excellent cost-effectiveness.
            </p>
          </div>
        </div>
        <div className='container__visionb'>
          <div>
            <h2>Contact Us</h2>
            <p>Get in touch with our talented and dedicated team today!</p>
            <Link to="/contactUS">
              <button className='contactButton'>Click here to be directed to our form.</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default AboutUs