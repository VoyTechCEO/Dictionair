import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { afterExamPopState, currentWordNumberState } from '../recoil';
import { useNavigate } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';

const ExamWrong = ({ setExamStatus, examWords, userAnswer }) => {
  const [currentWordNumber, setCurrentWordNumber] = useRecoilState(
    currentWordNumberState
  );
  const [afterExamPop, setAfterExamPop] = useRecoilState(afterExamPopState);
  const currentWord = examWords.find((word, index) => {
    return index + 1 === currentWordNumber;
  });

  const navigate = useNavigate();

  // animations
  const [initWrong, api] = useSpring(() => ({
    from: { width: `100%` },
  }));

  useEffect(() => {
    api.start({
      width: `0`,
    });
  }, []);

  return (
    <>
      <h1 className='head wrong'>ŹLE</h1>
      <h4 className='exam-num'>
        {currentWordNumber} z {examWords.length}
      </h4>
      <div className='input-line'>
        <label htmlFor='untranslated'>PL</label>
        <input
          type='text'
          id='untranslated'
          name='untranslated'
          readOnly
          value={currentWord.wordPL}
        />
      </div>
      <div className='wrong-answer'>
        <div className='svg-container'>
          <animated.div className='cover' style={initWrong} />
          <svg
            width='20'
            height='20'
            version='1.1'
            viewBox='0 0 62.967 52.917'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m7.009 52.917h-7.009l26.454-26.458-26.454-26.458h14.018l17.468 17.463 17.457-17.463h14.024l-26.454 26.458 26.454 26.458h-14.024l-17.457-17.463-17.468 17.463z'
              strokeWidth='.26458'
              fill='#ff2e2e'
            />
          </svg>
        </div>
        {userAnswer.replace(/\s/g, '') !== `` && <p>{userAnswer}</p>}
      </div>
      <div className='input-line wrong'>
        <label htmlFor='translation'>ENG</label>
        <input
          type='text'
          id='translation'
          name='translation'
          readOnly
          value={currentWord.wordENG}
        />
      </div>
      <button
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          if (currentWordNumber < examWords.length) {
            setCurrentWordNumber(currentWordNumber + 1);
          } else {
            setCurrentWordNumber(1);
            localStorage.removeItem(`examWords`);
            navigate(`/`);
            setAfterExamPop(true);
          }
          setExamStatus(`translate`);
        }}
      >
        Następne
      </button>
    </>
  );
};

export default ExamWrong;
