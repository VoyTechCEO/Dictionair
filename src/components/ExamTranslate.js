import React from 'react';

const ExamTranslate = () => {
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
      <div className='input-line'>
        <label htmlFor='translation'>ENG</label>
        <input type='text' id='translation' name='translation' autoFocus />
      </div>
      <button>Zatwierdź</button>
    </>
  );
};

export default ExamTranslate;
