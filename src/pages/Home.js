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
    </section>
  );
};

export default Home;
