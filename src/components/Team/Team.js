import React from 'react';
import './Team.css';
import Team1 from '../../images/team-1.jpg';
import Team2 from '../../images/team-2.jpg';
import Team3 from '../../images/team-3.jpg';
import Team4 from '../../images/team-4.jpg';

const Team = () => {
  return (
    <>
      <section className='team-section' id='team'>
        <div className='container'>
          <div className='row'>
            <div className='section-title'>
              <h1>Tim Kami</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='team-items'>
              <div className='item'>
                <img src={Team1} alt='team' />
                <div className='inner'>
                  <div className='info'>
                    <h5>Desy Indriani</h5>
                    <p>English Teacher</p>
                    <div className='social-links'>
                      <a href='#hero'>
                        <span className='fab fa-facebook'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-twitter'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-linkedin'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-instagram'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <img src={Team2} alt='team' />
                <div className='inner'>
                  <div className='info'>
                    <h5>Rijal Azizi</h5>
                    <p>Math Teacher</p>
                    <div className='social-links'>
                      <a href='#hero'>
                        <span className='fab fa-facebook'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-twitter'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-linkedin'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-instagram'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <img src={Team3} alt='team' />
                <div className='inner'>
                  <div className='info'>
                    <h5>Dhani Armand</h5>
                    <p>Science Teacher</p>
                    <div className='social-links'>
                      <a href='#hero'>
                        <span className='fab fa-facebook'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-twitter'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-linkedin'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-instagram'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <img src={Team4} alt='team' />
                <div className='inner'>
                  <div className='info'>
                    <h5>Andra Irawan</h5>
                    <p>Physics Teacher</p>
                    <div className='social-links'>
                      <a href='#hero'>
                        <span className='fab fa-facebook'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-twitter'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-linkedin'></span>
                      </a>
                      <a href='#hero'>
                        <span className='fab fa-instagram'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
