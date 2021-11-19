import React from 'react';

const ExamTranslateAgain = () => {
  return (
    <>
      <h1 className='head'>PRZETŁUMACZ</h1>
      <h4 className='exam-num'>1 z 20</h4>
      <div className='input-line'>
        <label htmlFor='untranslated'>PL</label>
        <input
          type='text'
          id='untranslated'
          name='untranslated'
          readOnly
          value='patyk'
        />
      </div>
      <div className='input-line try-again'>
        <label htmlFor='translation'>ENG</label>
        <input type='text' id='translation' name='translation' autoFocus />
      </div>
      <p className='try-again'>Błędna odpowiedź, spróbuj jeszcze raz.</p>
      <button>Zatwierdź</button>
    </>
  );
};

export default ExamTranslateAgain;
