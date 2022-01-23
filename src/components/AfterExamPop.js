import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { afterExamPopState } from '../recoil';

const AfterExamPop = () => {
  const [afterExamPop, setAfterExamPop] = useRecoilState(afterExamPopState);
  const navigate = useNavigate();

  return (
    <div className='exam-pop-container'>
      <article className='exam-pop'>
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
            onClick={() => {
              setAfterExamPop(false);
            }}
          >
            OK
          </Link>
        </div>
      </article>
    </div>
  );
};

export default AfterExamPop;
