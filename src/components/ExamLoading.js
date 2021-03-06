import React from 'react';

const ExamLoading = () => {
  return (
    <>
      <h1 className='head'>PRZETŁUMACZ</h1>
      <h4 className='exam-num'>1 z 20</h4>
      <svg
        className='spinner'
        width='125'
        height='125'
        version='1.1'
        viewBox='0 0 52.832 52.832'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          transform='scale(.26458)'
          d='m99.84 0a99.839 99.839 0 0 0-99.84 99.84 99.839 99.839 0 0 0 99.84 99.84 99.839 99.839 0 0 0 99.84-99.84 99.839 99.839 0 0 0-0.99805-14.049l-15.596 3.3418a83.953 83.953 0 0 1 0.70703 10.707 83.953 83.953 0 0 1-83.953 83.953 83.953 83.953 0 0 1-83.953-83.953 83.953 83.953 0 0 1 83.953-83.953 83.953 83.953 0 0 1 2.9102 0.099609l0.24414-15.932a99.839 99.839 0 0 0-3.1543-0.054688z'
          color='#000000'
        />
      </svg>
    </>
  );
};

export default ExamLoading;
