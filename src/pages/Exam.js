import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import ExamCorrect from '../components/ExamCorrect';
import ExamLoading from '../components/ExamLoading';
import ExamTranslate from '../components/ExamTranslate';
import ExamTranslateAgain from '../components/ExamTranslateAgain';
import ExamWrong from '../components/ExamWrong';

import { useRecoilState } from 'recoil';
import {
  wordsState,
  loadingExamState,
  examStatusState,
  userAnswerState,
} from '../recoil';
import getRandomExam from '../util/getRandomExam';

import { useParams } from 'react-router-dom';

const Exam = () => {
  const { chapter } = useParams();
  const [loadingExam, setLoadingExam] = useRecoilState(loadingExamState);
  const [examStatus, setExamStatus] = useRecoilState(examStatusState);
  const [words, setWords] = useRecoilState(wordsState);
  const [userAnswer, setUserAnswer] = useRecoilState(userAnswerState);
  const chapterNum = words[0].chapters.findIndex((item) => {
    return item.name === chapter;
  });

  useEffect(() => {
    if (!localStorage.getItem(`examWords`)) {
      if (chapter === `allWords`) {
        getRandomExam(
          JSON.parse(localStorage.getItem(`wordsStatsList`)),
          setLoadingExam
        );
      } else {
        const chapterWords = words[0].chapters[chapterNum].words;
        getRandomExam(chapterWords, setLoadingExam);
      }
    }
    setLoadingExam(false);
  }, []);

  const examWords = JSON.parse(localStorage.getItem(`examWords`));

  return (
    <section className='exam'>
      <div className='container'>
        <div className='exam-content'>
          {loadingExam && <ExamLoading />}
          {!loadingExam && examStatus === `translate` && (
            <ExamTranslate
              setExamStatus={setExamStatus}
              examWords={examWords}
            />
          )}
          {!loadingExam && examStatus === `correct` && (
            <ExamCorrect setExamStatus={setExamStatus} />
          )}
          {!loadingExam && examStatus === `translateAgain` && (
            <ExamTranslateAgain
              setExamStatus={setExamStatus}
              examWords={examWords}
              setUserAnswer={setUserAnswer}
            />
          )}
          {!loadingExam && examStatus === `wrong` && (
            <ExamWrong
              setExamStatus={setExamStatus}
              examWords={examWords}
              userAnswer={userAnswer}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Exam;
