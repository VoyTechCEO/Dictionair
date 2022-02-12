import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { statsSwitchState, addChapterState, chapterDelState } from '../recoil';

import { useSpring, animated } from 'react-spring';

const Stats = () => {
  const [statsSwitch, setStatsSwitch] = useRecoilState(statsSwitchState);
  const [addChapter, setAddChapter] = useRecoilState(addChapterState);
  const [chapterDel, setChapterDel] = useRecoilState(chapterDelState);
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

  // animations
  const [showStatsAni, api] = useSpring(() => ({
    from: { x: `18.75rem`, opacity: 0 },
  }));

  if (statsSwitch) {
    api.start({
      x: `0`,
      opacity: 1,
    });
  } else {
    api.start({
      x: `18.75rem`,
      opacity: 0,
    });
  }

  return (
    <animated.div className='stats' style={showStatsAni}>
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
        <div className='reset-container'>
          <button
            onClick={() => {
              localStorage.removeItem(`storeWords`);
              localStorage.removeItem(`wordsStatsList`);
              localStorage.removeItem(`examWords`);
              setChapterDel([]);
              setAddChapter(Date.now());
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
            <span>Wyczyść zmiany</span>
          </button>
          <p>
            Po wciśnięciu strona powróci do pierwotnego stanu (rozdziały,
            postęp, itp.)
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default Stats;
