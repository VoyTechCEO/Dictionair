import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import Header from '../components/Header';
import Stats from '../components/Stats';
import { useRecoilState } from 'recoil';
import { wordsState, loadingExamState } from '../recoil';

import { Link } from 'react-router-dom';

const Chapters = () => {
  const [words, setWords] = useRecoilState(wordsState);
  const [loadingExam, setLoadingExam] = useRecoilState(loadingExamState);

  useEffect(() => {
    setLoadingExam(true);
  }, []);

  return (
    <section>
      <Header isBackArrow={true} />
      <div className='container'>
        <div className='chapters-content'>
          <h1>Wybierz rozdział</h1>
          <ul>
            {words[0].chapters.map((chapter, index) => {
              let name = chapter.name;
              name[0].toUpperCase();

              return (
                <Link
                  key={`chapter${index}`}
                  to={`/exam/${name}`}
                  onClick={() => {
                    setLoadingExam(true);
                  }}
                >
                  {name}
                </Link>
              );
            })}
            {/* map this list */}
            <Link to='/exam'>cały zakres</Link>
          </ul>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Chapters;
