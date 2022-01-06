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
        <button>
          <svg
            height='20'
            version='1.1'
            viewBox='0 0 40.217 35.19'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g transform='translate(-64.765 -128.91)'>
              <path d='m87.185 164.1h-13.563l-8.8577-8.8692v-1.5839l24.741-24.736h1.5892l13.887 13.894v1.581l-17.856 17.862h13.623v1.8521zm-7.7466-1.8521h4.2295l3.3271-3.2975-12.039-12.047-7.5463 7.5328 7.7988 7.8118z' />
            </g>
          </svg>
          <span>Wyczyść statystyki</span>
        </button>
      </div>
    </div>
  );
};

export default Stats;
