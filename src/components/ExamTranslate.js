import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useRecoilState } from 'recoil';
import { addChapterState, currentWordNumberState } from '../recoil';
import assignWordStatus from '../util/assignWordStatus';

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
      <button
        type='submit'
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
        Zatwierdź
      </button>
    </>
  );
};

export default ExamTranslate;
