import React from 'react';
import ExamCorrect from '../components/ExamCorrect';
import ExamLoading from '../components/ExamLoading';
import ExamTranslate from '../components/ExamTranslate';
import ExamTranslateAgain from '../components/ExamTranslateAgain';
import ExamWrong from '../components/ExamWrong';

import { useRecoilState } from 'recoil';
import { loadingExamState } from '../recoil';

import { Link, useParams } from 'react-router-dom';

const Exam = () => {
  const { chapter } = useParams();
  console.log(chapter);
  const [loadingExam, setLoadingExam] = useRecoilState(loadingExamState);

  return (
    <section className='exam'>
      <div className='container'>
        <div className='exam-content'>
          {loadingExam && <ExamLoading />}
          {!loadingExam && <ExamTranslate />}
        </div>
      </div>
    </section>
  );
};

export default Exam;
