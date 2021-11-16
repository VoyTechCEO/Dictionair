import React from 'react';

const Stats = () => {
  return (
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
  );
};

export default Stats;
