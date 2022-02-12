import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { afterExamPopState } from '../recoil';

import { useSpring, animated } from 'react-spring';

const AfterExamPop = () => {
  const [afterExamPop, setAfterExamPop] = useRecoilState(afterExamPopState);
  const navigate = useNavigate();

  // animations
  const [initPop, api] = useSpring(() => ({
    from: { y: -100 },
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
            setAfterExamPop(false);
            navigate(`/`);
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
        <h1>Egzamin zakończony</h1>
        <p>
          Gratulujemy podejścia do egzaminu. Możesz sprawdzić swoje wyniki w
          statystykach na stronie głównej.
        </p>
        <div className='btn-container after-exam-btn'>
          <Link
            to='/'
            onMouseOver={() => {
              animateHoverBtnNonBg.start({ width: `100%` });
            }}
            onMouseOut={() => {
              animateHoverBtnNonBg.start({ width: `0` });
            }}
            onClick={() => {
              setAfterExamPop(false);
            }}
          >
            <span>OK</span>
            <animated.div className='underline' style={hoverBtnNonBg} />
          </Link>
        </div>
      </animated.article>
    </div>
  );
};

export default AfterExamPop;
