import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LISTING_TYPES, ROUTES } from '../data/constants';
import { MATERIAL_TYPES } from '../data/constantsJsx';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [randomImage, setRandomImage] = useState<string>('/images/generic/doggo.jpg');
  useEffect(() => {
    setRandomImage('/images/generic/doggo.jpg');
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover compatible<br />3D printers</h1>
          <p>Find the perfect printer for your designs, browse community uploads, and share print experiences.</p>
          <div className="hero-buttons">
            <Link to={ROUTES.LISTINGS} className="btn btn-outline">Browse printers</Link>
          </div>
        </div>
        <div className="floating-pet-icons-container">
          <div className="floating-pet-icon" style={{ top: '15%', left: '10%', '--scale': '1.35', '--start-opacity': '1', '--mid-opacity': '0.3', animationDelay: '0s', animationDuration: '18s' } as React.CSSProperties}>🖨️</div>
          <div className="floating-pet-icon" style={{ top: '65%', left: '15%', '--scale': '0.9', '--start-opacity': '0.4', '--mid-opacity': '1', animationDelay: '-3s', animationDuration: '22s' } as React.CSSProperties}>📐</div>
          <div className="floating-pet-icon" style={{ top: '30%', left: '85%', '--scale': '1.5', '--start-opacity': '0.7', '--mid-opacity': '0.2', animationDelay: '-7s', animationDuration: '25s' } as React.CSSProperties}>⚙️</div>
          <div className="floating-pet-icon" style={{ top: '70%', left: '80%', '--scale': '0.75', '--start-opacity': '0.3', '--mid-opacity': '0.9', animationDelay: '-12s', animationDuration: '20s' } as React.CSSProperties}>🔧</div>
          <div className="floating-pet-icon" style={{ top: '20%', left: '45%', '--scale': '0.6', '--start-opacity': '0.2', '--mid-opacity': '1', animationDelay: '-15s', animationDuration: '23s' } as React.CSSProperties}>🎨</div>
          <div className="floating-pet-icon" style={{ top: '75%', left: '50%', '--scale': '1.25', '--start-opacity': '0.9', '--mid-opacity': '0.4', animationDelay: '-8s', animationDuration: '19s' } as React.CSSProperties}>💡</div>
          <div className="floating-pet-icon" style={{ top: '40%', left: '20%', '--scale': '0.85', '--start-opacity': '0.5', '--mid-opacity': '1', animationDelay: '-14s', animationDuration: '21s' } as React.CSSProperties}>🔩</div>
          <div className="floating-pet-icon" style={{ top: '55%', left: '30%', '--scale': '1.15', '--start-opacity': '0.8', '--mid-opacity': '0.3', animationDelay: '-6s', animationDuration: '24s' } as React.CSSProperties}>📏</div>
          <div className="floating-pet-icon" style={{ top: '25%', left: '70%', '--scale': '0.95', '--start-opacity': '0.3', '--mid-opacity': '0.8', animationDelay: '-11s', animationDuration: '17s' } as React.CSSProperties}>🛠️</div>
          <div className="floating-pet-icon" style={{ top: '62%', left: '75%', '--scale': '1.4', '--start-opacity': '0', '--mid-opacity': '0.9', animationDelay: '-5s', animationDuration: '26s' } as React.CSSProperties}>💎</div>
          <div className="floating-pet-icon" style={{ top: '33%', left: '22%', '--scale': '1.6', '--start-opacity': '0', '--mid-opacity': '0.85', animationDelay: '-9s', animationDuration: '24s' } as React.CSSProperties}>🏗️</div>
          <div className="floating-pet-icon" style={{ top: '18%', left: '65%', '--scale': '0.7', '--start-opacity': '0', '--mid-opacity': '0.7', animationDelay: '-13s', animationDuration: '22s' } as React.CSSProperties}>⚡</div>
        </div>
        <div className="hero-decoration">
          <div className="hero-circle hero-circle-yellow"></div>
        </div>
      </section>

      <section className="content">
        <section className="pet-types">
          <div className="section-header">
            <h2>Browse by material type</h2>
            <p>Find printers compatible with your preferred filament</p>
          </div>
          <div className="pet-types-grid">
            {MATERIAL_TYPES.map(material => (
              <Link
                to={`${ROUTES.LISTINGS}?materialType=${material.id}`}
                key={material.id}
                className="pet-type-card"
              >
                <div className="pet-circle">
                  <span className="pet-icon">{material.icon}</span>
                </div>
                <h3>{material.name}</h3>
              </Link>
            ))}
          </div>
        </section>        <section className="why-section">
          {/* Floating polaroid photos container */}
          <div className="floating-polaroids-container">
            {/* Polaroids arranged around the "Why choose PrintHub" section */}
            <div className="polaroid polaroid-1" style={{ top: '-15%', left: '50%', transform: 'translate(-50%, 0) rotate(-5deg)', animationDelay: '-15s', '--rotate': '-5deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="3D Print" />
              <p>First layer!</p>
            </div>
            <div className="polaroid polaroid-2" style={{ top: '-15%', right: '22%', transform: 'translate3d(0, 0, 0) rotate(7deg)', animationDelay: '-29s', '--rotate': '7deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="Printer" />
              <p>Print day!</p>
            </div>
            <div className="polaroid polaroid-4" style={{ top: '48%', right: '13%', transform: 'translate3d(0, 0, 0) rotate(4deg)', animationDelay: '-33s', '--rotate': '4deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="Design" />
              <p>Nailed it</p>
            </div>
            <div className="polaroid polaroid-5" style={{ bottom: '-10%', right: '22%', transform: 'translate3d(0, 0, 0) rotate(-8deg)', animationDelay: '-21s', '--rotate': '-8deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="Filament" />
              <p>New spool day</p>
            </div>
            <div className="polaroid polaroid-1" style={{ top: '-15%', left: '40%', transform: 'translate(-50%, 0) rotate(7deg)', animationDelay: '-37s', '--rotate': '6deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="Print" />
              <p>Layer by layer</p>
            </div>
            <div className="polaroid polaroid-2" style={{ bottom: '-10%', left: '20%', transform: 'translate3d(0, 0, 0) rotate(-4deg)', animationDelay: '-25s', '--rotate': '-4deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="Build plate" />
              <p>Perfect adhesion</p>
            </div>
            <div className="polaroid polaroid-3" style={{ top: '48%', left: '13%', transform: 'translate3d(0, 0, 0) rotate(9deg)', animationDelay: '-51s', '--rotate': '9deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="Result" />
              <p>Clean finish</p>
            </div>
            <div className="polaroid polaroid-4" style={{ top: '8%', left: '12%', transform: 'translate3d(0, 0, 0) rotate(-7deg)', animationDelay: '-19s', '--rotate': '-7deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="Multi-color" />
              <p>Multi-color magic</p>
            </div>
          </div>

          <div className="section-header">
            <h2>Why choose PrintHub?</h2>
            <p>We make finding compatible printers easy and fun</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-title">
                <span className="feature-icon">🔎</span>
                <h3>Discover</h3>
              </div>
              <p>Find printers compatible with your designs, recommended by the community</p>
            </div>
            <div className="feature-card">
              <div className="feature-title">
                <span className="feature-icon">🤝</span>
                <h3>Connect</h3>
              </div>
              <p>Share experiences and tips with a community of makers</p>
            </div>
            <div className="feature-card">
              <div className="feature-title">
                <span className="feature-icon">⭐</span>
                <h3>Rate & Review</h3>
              </div>
              <p>Help others by rating and reviewing 3D printers</p>
            </div>          
            </div>
        </section>        
        
        <section className="venue-types">

          <div className="section-header">
            <h2>Explore printer categories</h2>
            <p>Discover a variety of 3D printers for every project</p>
          </div>

          <div className="venue-types-grid">
            {LISTING_TYPES.map(type => (
              <div className="venue-card" key={type.id}>
                <div className="venue-media">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/venues/_${type.id}.jpg`}
                    alt={type.name}
                    className="venue-image"
                  />
                </div>
                <div className="venue-info">
                  <h3>{type.name}</h3>
                  <Link to={`${ROUTES.LISTINGS}?listingType=${type.id}`} className="btn btn-small btn-outline">
                    Find printers
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>        <section className="cta-section-container">
          <section className="cta-section">
            <div className="cta-image">
              <img src={`${process.env.PUBLIC_URL}/images/generic/doggo.jpg`} alt="3D printing workspace" />
            </div>
            <div className="cta-content">
              <div className="cta-text">
                <h2>Have a design to share?</h2>
                <p>Help other makers discover great designs for their 3D printers.</p>
              </div>
            </div>          </section>
        </section>
      </section>
    </div>
  );
};

export default Home;