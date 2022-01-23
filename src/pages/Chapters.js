import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Header from '../components/Header';
import Stats from '../components/Stats';
import FinishExamPop from '../components/FinishExamPop';

import { useRecoilState } from 'recoil';
import { wordsState, loadingExamState } from '../recoil';

import { Link } from 'react-router-dom';

const Chapters = () => {
  const [words, setWords] = useRecoilState(wordsState);
  const [loadingExam, setLoadingExam] = useRecoilState(loadingExamState);
  const [examPop, setExamPop] = useState(false);

  useEffect(() => {
    setLoadingExam(true);
  }, []);

  return (
    <section>
      <Header isBackArrow={true} />
      {examPop && <FinishExamPop setExamPop={setExamPop} />}
      <div className='container'>
        <div className='chapters-content'>
          <h1>Wybierz rozdział</h1>
          <ul>
            {words[0].chapters.map((chapter, index) => {
              let name = chapter.name;
              name[0].toUpperCase();

              //=== Return if exam is already set ===//
              // If you want to edit some of the stuff below or anything that's related to chapters' navigation you better check code at FinishExamPop.js in components.
              if (localStorage.getItem(`examWords`)) {
                return (
                  <Link
                    key={`chapter${index}`}
                    to={`/chapters/${name}`}
                    onClick={() => {
                      setExamPop(true);
                    }}
                  >
                    {name}
                  </Link>
                );
              }
              //=====================================//

              return (
                <Link
                  key={`chapter${index}`}
                  to={`/exam/${name}`}
                  onClick={() => {
                    setLoadingExam(true);
                    localStorage.setItem(`currentChapter`, name);
                  }}
                >
                  {name}
                </Link>
              );
            })}
            <Link
              to={
                localStorage.getItem(`examWords`)
                  ? `/chapters/allWords`
                  : `/exam/allWords`
              }
              onClick={() => {
                setLoadingExam(true);
                if (localStorage.getItem(`examWords`)) {
                  setExamPop(true);
                } else {
                  localStorage.setItem(`currentChapter`, `allWords`);
                }
              }}
            >
              cały zakres
            </Link>
          </ul>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Chapters;
