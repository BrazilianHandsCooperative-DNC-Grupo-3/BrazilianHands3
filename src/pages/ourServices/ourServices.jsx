import React from 'react';
import './index.scss';
import NavBar from '../../components/navBar/navBar.jsx'
import CardService from '../../components/cardService/cardService.jsx';


const services = [
  {
    img: "/services1.svg",
    title: "Residential Cleaning",
    descr: "Transform Your Home with Our Professional Cleaning and Deep Clean Services!",
    text: "Our expert cleaners will make your home sparkle from top to bottom. Whether you need regular weekly cleaning or a comprehensive deep clean, we take care of every detail with precision and care. Enjoy a spotless home without lifting a finger – let us handle all your cleaning needs!"
  },
  {
    img: "/services2.svg",
    title: "Garden Cleaning",
    descr: "Dreaming of an Impeccable Garden? Let Our Professional Landscapers Make It a Reality!",
    text: "Our expert landscapers will care for your plants, prune your trees, and ensure your garden stays green and lush all year round. From plant maintenance to tree trimming, we handle every detail to create the perfect outdoor space for you."
  },
  {
    img: "/services3.svg",
    title: "Painting",
    descr: "Transform Your Space with a Fresh Coat of Paint!",
    text: "Our skilled and passionate painters specialize in bringing your vision to life with vibrant, cozy colors. Whether you're refreshing a single room or painting your entire home, we ensure a flawless finish that transforms your space into a warm, inviting environment."
  },
  {
    img: "/services4.svg",
    title: "Sewing and Repairs",
    descr: "Need Garment Adjustments or Repairs? Our Expert Seamstresses Ensure Perfect Results!",
    text: "Whether you need to adjust a garment or fix something, our skilled seamstresses are here to deliver flawless results. With years of experience, we guarantee precision and quality in every alteration and repair, ensuring your clothing fits perfectly and looks great."
  },
  {
    img: "/services5.svg",
    title: "Nails and Beauty",
    descr: "Want Stunning Nails? Our Expert Manicurists and Pedicurists Will Pamper Your Hands and Feet!",
    text: "Achieve beautiful nails with our skilled manicurists and pedicurists, who provide exceptional care for your hands and feet. From precise nail art to relaxing treatments, we ensure your nails look fabulous and your hands and feet feel revitalized."
  },
  {
    img: "/services6.svg",
    title: "Manual Labour",
    descr: "Need Help with Furniture Assembly, Small Repairs, or Other Handyman Tasks? We're Here for You!",
    text: "Whether it's assembling furniture, tackling small repairs, or handling any other manual task, our skilled team is ready to assist you. We ensure efficient and reliable service for all your handyman needs, making your life easier and your home more functional."
  }
];

const OurServices = () => {
  return (
    <div>
      <NavBar/>
      <div className='services_page'>
        <div className='services_banner'>
          <h1>Explore Our Exceptional Services!</h1>
          <p>Welcome to our comprehensive service page, where you can discover how we can assist with all your needs. From transforming your home with professional cleaning and vibrant paint to perfecting your garden and providing expert garment adjustments, we are dedicated to delivering top-notch results.</p>
        </div>

        <div className='services_cards'>
          {services.map((service, index) => (
            <div className='Cards' key={index}>
              <CardService
                img={service.img}
                title={service.title}
                descr={service.descr}
                text={service.text}
              />
            </div>
          ))}
        </div>

        <div className='services_footer'>
          <h2>Contact Us</h2>
          <p>Get in touch with our talented and dedicated team today!</p>
          <button className='botaoEspecial'>Click here to be directed to our form</button>
        </div>
        </div>
    </div>
  );
};

export default OurServices;
