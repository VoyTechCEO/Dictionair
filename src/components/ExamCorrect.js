import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useRecoilState } from 'recoil';
import { currentWordNumberState } from '../recoil';
import { useNavigate } from 'react-router-dom';

const ExamCorrect = ({ setExamStatus }) => {
  const [currentWordNumber, setCurrentWordNumber] = useRecoilState(
    currentWordNumberState
  );

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentWordNumber < 20) {
        setCurrentWordNumber(currentWordNumber + 1);
      } else {
        setCurrentWordNumber(1);
        localStorage.removeItem(`examWords`);
        navigate(`/`);
      }
      setExamStatus(`translate`);
    }, 2000);
  }, []);

  return (
    <>
      <h1 className='head'>PRZETŁUMACZ</h1>
      <h4 className='exam-num'>{currentWordNumber} z 20</h4>
      <svg
        width='125'
        height='125'
        version='1.1'
        viewBox='0 0 62.766 52.818'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='m56.866 1.4e-5 -33.655 44.883-1.4552-1.8464-15.825-21.17h-5.9314l21.756 29.104 1.4552 1.8464 39.555-52.752-5.9004-0.06563z'
          strokeWidth='.26458'
          fill='#00CF0C'
        />
      </svg>
    </>
  );
};

export default ExamCorrect;
