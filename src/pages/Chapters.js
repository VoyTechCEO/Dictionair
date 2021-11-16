import React from 'react';
import Header from '../components/Header';
import Stats from '../components/Stats';

const Chapters = () => {
  return (
    <section>
      <Header isBackArrow={true} />
      <div className='container'>
        <div className='chapters-content'>
          <h1>Wybierz rozdział</h1>
          <ul>
            <li>
              <button>Rozdział 1</button>
            </li>
            <li>
              <button>Rozdział 2</button>
            </li>
            <li>
              <button>Rozdział 3</button>
            </li>
            <li>
              <button>Rozdział 4</button>
            </li>
            <li>
              <button>Cały zakres</button>
            </li>
          </ul>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Chapters;
