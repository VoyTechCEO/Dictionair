import React from 'react';
import ExamTranslate from '../components/ExamTranslate';
import ExamTranslateAgain from '../components/ExamTranslateAgain';
import ExamWrong from '../components/ExamWrong';

const Exam = () => {
  return (
    <section className='exam'>
      <div className='container'>
        <div className='exam-content'>
          <ExamWrong />
        </div>
      </div>
    </section>
  );
};

export default Exam;
