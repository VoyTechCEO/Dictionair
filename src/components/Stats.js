import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useRecoilState } from 'recoil';
import { statsSwitchState } from '../recoil';

const Stats = () => {
  const [statsSwitch, setStatsSwitch] = useRecoilState(statsSwitchState);
  const wordsStatsList = JSON.parse(localStorage.getItem(`wordsStatsList`));
  const unknownWords = wordsStatsList.filter((wordObject) => {
    return wordObject.status === ``;
  });
  const correctWords = wordsStatsList.filter((wordObject) => {
    return wordObject.status === `correct`;
  });
  const wrongWords = wordsStatsList.filter((wordObject) => {
    return wordObject.status === `wrong`;
  });
  const [newWordsStatsList, setNewWordsStatsList] = useState([
    ...wordsStatsList,
  ]);

  return (
    <div className={statsSwitch ? 'stats show-stats' : 'stats'}>
      <div className='content'>
        <div className='stat'>
          <h4>Zapamiętane słówka</h4>
          <h4>{correctWords.length}</h4>
        </div>
        <div className='stat'>
          <h4>Problematyczne słówka</h4>
          <h4>{wrongWords.length}</h4>
        </div>
        <div className='stat'>
          <h4>Oczekujące słówka</h4>
          <h4>{unknownWords.length}</h4>
        </div>
        <button
          onClick={() => {
            setNewWordsStatsList(
              newWordsStatsList.map((wordObject) => {
                wordObject.status = ``;
                return wordObject;
              })
            );
            localStorage.setItem(
              `wordsStatsList`,
              JSON.stringify(newWordsStatsList)
            );
          }}
        >
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
