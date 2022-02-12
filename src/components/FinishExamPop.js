import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  currentWordNumberState,
  examStatusState,
  loadingExamState,
} from '../recoil';

import { useSpring, animated } from 'react-spring';

const FinishExamPop = ({ setExamPop }) => {
  const { chapter } = useParams();
  const [loadingExam, setLoadingExam] = useRecoilState(loadingExamState);
  const [examStatus, setExamStatus] = useRecoilState(examStatusState);
  const [currentWordNumber, setCurrentWordNumber] = useRecoilState(
    currentWordNumberState
  );
  const navigate = useNavigate();

  // animations
  const [initPop, api] = useSpring(() => ({
    from: { y: -100 },
  }));

  const [hoverBtnBg, animateHoverBtnBg] = useSpring(() => ({
    from: { width: `100%`, y: 0 },
  }));

  const [hoverBtnNonBg, animateHoverBtnNonBg] = useSpring(() => ({
    from: { width: `0`, y: 0 },
  }));

  useEffect(() => {
    api.start({
      y: 0,
    });
  });

  return (
    <div className='exam-pop-container'>
      <animated.article className='exam-pop' style={initPop}>
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
            onMouseOver={() => {
              animateHoverBtnBg.start({ width: `0` });
            }}
            onMouseOut={() => {
              animateHoverBtnBg.start({ width: `100%` });
            }}
            onClick={() => {
              setLoadingExam(true);
            }}
          >
            <animated.div className='cover' style={hoverBtnBg}>
              <span>Dokończ</span>
            </animated.div>
            <span>Dokończ</span>
          </Link>
          <Link
            to={`/exam/${chapter}`}
            onMouseOver={() => {
              animateHoverBtnNonBg.start({ width: `100%` });
            }}
            onMouseOut={() => {
              animateHoverBtnNonBg.start({ width: `0` });
            }}
            onClick={() => {
              setExamStatus(`translate`);
              setLoadingExam(true);
              setCurrentWordNumber(1);
              localStorage.setItem(`currentChapter`, chapter);
              localStorage.removeItem(`examWords`);
            }}
          >
            <span>Generuj</span>
            <animated.div className='underline' style={hoverBtnNonBg} />
          </Link>
        </div>
      </animated.article>
    </div>
  );
};

export default FinishExamPop;
