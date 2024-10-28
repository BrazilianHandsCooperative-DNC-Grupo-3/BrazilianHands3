import React, { useState, useEffect } from 'react';
import './index.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar.jsx';
import Footer from '../../components/footer/footer.jsx';
import BotaoWhatsapp from '../../components/Botaowhatsapp/botaoWhatsapp.jsx';


function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Função que detecta se a tela é mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); //limite de 768px para mobile
    };

    // Chama a função quando a página carregar e também quando redimensionar a janela
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <NavBar />
      <BotaoWhatsapp/>
      <div className="container">
        <div className="container_Itens">
          <section className="container_Itens_Section1">
            <div className="container_Itens_Section1_Content">
              <div className="container_Itens_Section1_Content_1">
                <img src="star.svg" alt="avaliation" />
                <h2>Exceptional Services for Your Home</h2>
              </div>
              <div className="container_Itens_Section1_Content_2">
                <h1>Reliable, High-Quality Services for You</h1>
                <p>
                  Talented Brazilians Making Your Home Beautiful and Life Easier
                  with Various Services
                </p>
              </div>
              <Link to="/contactUS">
                <button>Get Started</button>
              </Link>
            </div>
          </section>

          {/* Condicional para mobile ou desktop */}
          <section className="container_Itens_Section2">
            <div className="container_Itens_Section2_display">
              {isMobile ? (
                // Layout para Mobile
                <>
                  <div className="container_Itens_Section2_display_Content">
                    <div className="container_Itens_Section2_display_Content_text">
                      <h3>Quality Services Co-operative</h3>
                      <p>
                        Talented Brazilians offering reliable and high-quality
                        services to make your life easier.
                      </p>
                    </div>
                    <div className="container_Itens_Section2_display_Content_text">
                      <h3>Professional Residential Cleaning Service</h3>
                      <p>
                        Our cleaning experts leave your home sparkling with
                        weekly or deep cleaning services.
                      </p>
                    </div>
                    <div className="container_Itens_Section2_display_Content_text">
                      <h3>Impeccable Garden Care Service</h3>
                      <p>
                        Our landscapers take care of plants, trees, and keep
                        your garden green and lush.
                      </p>
                    </div>
                    <div className="container_Itens_Section2_display_Content_text">
                      <h3>Transform Your Space with Painting</h3>
                      <p>
                        Skilled painters creating cosy environments with a new
                        colour for your space.
                      </p>
                    </div>
                    <img src="image 27.webp" alt="img" />

                  </div>
                  <div className="container_Itens_Section2_display">
                    <Link to="/ourServices">
                      <button>Come and discover our services.</button>
                    </Link>
                  </div>
                </>
              ) : (
                // Layout para Desktop
                <>
                  <div className="container_Itens_Section2_display_Content">
                    <div className="container_Itens_Section2_display_Content_text">
                      <h3>Quality Services Co-operative</h3>
                      <p>
                        Talented Brazilians offering reliable and high-quality
                        services to make your life easier.
                      </p>
                    </div>
                    <div className="container_Itens_Section2_display_Content_text">
                      <h3>Professional Residential Cleaning Service</h3>
                      <p>
                        Our cleaning experts leave your home sparkling with
                        weekly or deep cleaning services.
                      </p>
                    </div>
                    <div className="container_Itens_Section2_display_Content_text">
                      <h3>Impeccable Garden Care Service</h3>
                      <p>
                        Our landscapers take care of plants, trees, and keep
                        your garden green and lush.
                      </p>
                    </div>
                    <div className="container_Itens_Section2_display_Content_text">
                      <h3>Transform Your Space with Painting</h3>
                      <p>
                        Skilled painters creating cosy environments with a new
                        colour for your space.
                      </p>
                    </div>
                    <Link to="/ourServices">
                      <button>Come and discover our services.</button>
                    </Link>
                  </div>
                  <div className="container_Itens_Section2_display">
                    <img src="section2image.webp" alt="img" />
                  </div>
                </>
              )}
            </div>
          </section>

          <section className="container_Itens_Section3">
            <div className="container_Itens_Section3_Content">
              <h2>Meet Our Talented Brazilian Team</h2>
              <p>
                Discover the skilled and dedicated individuals behind Brazilian
                Hands Co-operative, offering a variety of high-quality services
                to make your life easier and your home more beautiful.
              </p>
            </div>
            <div>
              <Link to="/joinOurTeam">
                <button>Explore</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Home;
