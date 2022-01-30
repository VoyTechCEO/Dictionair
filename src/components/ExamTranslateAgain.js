import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useRecoilState } from 'recoil';
import { currentWordNumberState } from '../recoil';
import assignWordStatus from '../util/assignWordStatus';

const ExamTranslateAgain = ({ setExamStatus, examWords, setUserAnswer }) => {
  const [currentWordNumber, setCurrentWordNumber] = useRecoilState(
    currentWordNumberState
  );
  const currentWord = examWords.find((word, index) => {
    return index + 1 === currentWordNumber;
  });
  const [answer, setAnswer] = useState(``);

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
      <div className='input-line try-again'>
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
      <p className='try-again'>Błędna odpowiedź, spróbuj jeszcze raz.</p>
      <button
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          if (answer === currentWord.wordENG) {
            setExamStatus(`correct`);
            assignWordStatus(`correct`, currentWord);
          } else {
            setExamStatus(`wrong`);
            setUserAnswer(answer);
            assignWordStatus(`wrong`, currentWord);
          }
        }}
      >
        Zatwierdź
      </button>
    </>
  );
};

export default ExamTranslateAgain;
