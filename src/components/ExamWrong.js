import React from 'react';

const ExamWrong = () => {
  return (
    <>
      <h1 className='head wrong'>ŹLE</h1>
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
      <div className='wrong-answer'>
        <p>identity</p>
      </div>
      <div className='input-line wrong'>
        <label htmlFor='translation'>ENG</label>
        <input
          type='text'
          id='translation'
          name='translation'
          readOnly
          value='identify'
        />
      </div>
      <button>Następne</button>
    </>
  );
};

export default ExamWrong;
