import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useRecoilState } from 'recoil';
import { addChapterState, currentWordNumberState } from '../recoil';
import assignWordStatus from '../util/assignWordStatus';

import { useSpring, animated } from 'react-spring';

const ExamTranslate = ({ setExamStatus, examWords }) => {
  const [addChapter, setAddChapter] = useRecoilState(addChapterState);
  const [currentWordNumber, setCurrentWordNumber] = useRecoilState(
    currentWordNumberState
  );
  const currentWord = examWords.find((word, index) => {
    return index + 1 === currentWordNumber;
  });
  const [answer, setAnswer] = useState(``);
  console.log(currentWord);

  // animations
  const [hoverBtnNonBg, animateHoverBtnNonBg] = useSpring(() => ({
    from: { width: `0`, height: `0`, y: 0 },
  }));

  const [hideBorder, animateHideBorder] = useSpring(() => ({
    from: { borderRadius: `4px` },
  }));

  return (
    <>
      <h1 className='head'>PRZETŁUMACZ</h1>
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
      <div className='input-line'>
        <label htmlFor='translation'>ENG</label>
        <input
          type='text'
          id='translation'
          name='translation'
          autoFocus
          autoComplete='off'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <animated.button
        type='submit'
        style={hideBorder}
        onMouseOver={() => {
          animateHoverBtnNonBg.start({ width: `100%`, height: `100%` });
          animateHideBorder.start({ borderRadius: `0` });
        }}
        onMouseOut={() => {
          animateHoverBtnNonBg.start({ width: `0`, height: `0` });
          animateHideBorder.start({ borderRadius: `4px`, delay: 400 });
        }}
        onClick={(e) => {
          e.preventDefault();
          if (answer === currentWord.wordENG) {
            setExamStatus(`correct`);
            assignWordStatus(`correct`, currentWord, setAddChapter);
          } else {
            setExamStatus(`translateAgain`);
          }
        }}
      >
        <span>Zatwierdź</span>
        <animated.div className='underline' style={hoverBtnNonBg} />
      </animated.button>
    </>
  );
};

export default ExamTranslate;
