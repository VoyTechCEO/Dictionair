import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <section>
      <Header />
      <div className='container'>
        <article className='home-content'>
          <div className='option'>
            <a href='#test'>
              <div className='img-container'>
                <div className='img-placeholder'></div>
              </div>
              <h4>Sprawdź się!</h4>
            </a>
          </div>
          <div className='border'></div>
          <div className='option'>
            <a href='#test'>
              <div className='img-container'>
                <div className='img-placeholder'></div>
              </div>
              <h4>Albo się poucz ;(</h4>
            </a>
          </div>
        </article>
      </div>
      <div className='stats show-stats'>
        <div className='content'>
          <div className='stat'>
            <h4>Zapamiętane słówka</h4>
            <h4>173</h4>
          </div>
          <div className='stat'>
            <h4>Problematyczne słówka</h4>
            <h4>28</h4>
          </div>
          <div className='stat'>
            <h4>Oczekujące słówka</h4>
            <h4>119</h4>
          </div>
          <button>Wyczyść statystyki</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
