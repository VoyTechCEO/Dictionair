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
        <svg
          width='20'
          height='20'
          version='1.1'
          viewBox='0 0 62.967 52.917'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='m7.009 52.917h-7.009l26.454-26.458-26.454-26.458h14.018l17.468 17.463 17.457-17.463h14.024l-26.454 26.458 26.454 26.458h-14.024l-17.457-17.463-17.468 17.463z'
            stroke-width='.26458'
            fill='#ff2e2e'
          />
        </svg>
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
