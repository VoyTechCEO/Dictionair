import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  currentWordNumberState,
  examStatusState,
  loadingExamState,
} from '../recoil';

const FinishExamPop = ({ setExamPop }) => {
  const { chapter } = useParams();
  const [loadingExam, setLoadingExam] = useRecoilState(loadingExamState);
  const [examStatus, setExamStatus] = useRecoilState(examStatusState);
  const [currentWordNumber, setCurrentWordNumber] = useRecoilState(
    currentWordNumberState
  );
  const navigate = useNavigate();

  return (
    <div className='exam-pop-container'>
      <article className='exam-pop'>
        <button
          onClick={() => {
            setExamPop(false);
            navigate(`/chapters`);
          }}
        >
          <svg
            width='15'
            height='15'
            version='1.1'
            viewBox='0 0 62.967 52.917'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m7.009 52.917h-7.009l26.454-26.458-26.454-26.458h14.018l17.468 17.463 17.457-17.463h14.024l-26.454 26.458 26.454 26.458h-14.024l-17.457-17.463-17.468 17.463z'
              strokeWidth='.26458'
            />
          </svg>
        </button>
        <h1>Ukończ egzamin!</h1>
        <p>
          Zanim przystąpisz do kolejnego egzaminu, zakończ rozwiązywanie
          poprzedniego. Możesz również wygenerować nowy egzamin.
        </p>
        <div className='btn-container'>
          <Link
            to={`/exam/${localStorage.getItem('currentChapter')}`}
            className='clr-bg'
            onClick={() => {
              setLoadingExam(true);
            }}
          >
            Dokończ
          </Link>
          <Link
            to={`/exam/${chapter}`}
            onClick={() => {
              setExamStatus(`translate`);
              setLoadingExam(true);
              setCurrentWordNumber(1);
              localStorage.setItem(`currentChapter`, chapter);
              console.log(localStorage.getItem(`currentChapter`));
              localStorage.removeItem(`examWords`);
            }}
          >
            Generuj
          </Link>
        </div>
      </article>
    </div>
  );
};

export default FinishExamPop;
