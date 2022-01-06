import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import ExamCorrect from '../components/ExamCorrect';
import ExamLoading from '../components/ExamLoading';
import ExamTranslate from '../components/ExamTranslate';
import ExamTranslateAgain from '../components/ExamTranslateAgain';
import ExamWrong from '../components/ExamWrong';

import { useRecoilState } from 'recoil';
import { wordsState, loadingExamState } from '../recoil';
import getRandomExam from '../util/getRandomExam';

import { Link, useParams } from 'react-router-dom';

const Exam = () => {
  const { chapter } = useParams();
  const [loadingExam, setLoadingExam] = useRecoilState(loadingExamState);
  const [words, setWords] = useRecoilState(wordsState);
  const chapterNum = words[0].chapters.findIndex((item) => {
    return item.name === chapter;
  });
  const chapterWords = words[0].chapters[chapterNum].words;

  useEffect(() => {
    getRandomExam(chapterWords, setLoadingExam);
    console.log(loadingExam);
  }, []);

  console.log(loadingExam);

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
