import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Stats from '../components/Stats';
import FinishExamPop from '../components/FinishExamPop';
import DeleteChapterBtn from '../components/DeleteChapterBtn';

import { useRecoilState } from 'recoil';
import { wordsState, loadingExamState, chapterDelState } from '../recoil';

import { Link } from 'react-router-dom';

const Chapters = () => {
  const [words, setWords] = useRecoilState(wordsState);
  const [loadingExam, setLoadingExam] = useRecoilState(loadingExamState);
  const [chapterDel, setChapterDel] = useRecoilState(chapterDelState);
  const [examPop, setExamPop] = useState(false);

  useEffect(() => {
    setLoadingExam(true);
  }, []);

  return (
    <section className='dictionary'>
      <Header isBackArrow={true} />
      {examPop && <FinishExamPop setExamPop={setExamPop} />}
      <div className='container'>
        <div className='chapters-content'>
          <h1>Wybierz rozdział</h1>
          <ul>
            <li>
              <Link to='/chapters/create' className='create-chapter-btn'>
                <svg
                  height='17'
                  version='1.1'
                  viewBox='0 0 52.917 52.917'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g transform='translate(-115.79 -19.591)'>
                    <path d='m142.25 72.508h-2.6458v-23.813h-23.812v-5.2917h23.812v-23.813h5.2917v23.813h23.812v5.2917h-23.812v23.813z' />
                  </g>
                </svg>
                <span>Dodaj rozdział</span>
              </Link>
            </li>
            {words[0].chapters.map((chapter, index) => {
              let name = chapter.name;
              name[0].toUpperCase();

              //=== Return if exam is already set ===//
              // If you want to edit some of the stuff below or anything that's related to chapters' navigation you better check code at FinishExamPop.js in components.
              if (localStorage.getItem(`examWords`)) {
                return (
                  <li
                    key={`chapter${index}`}
                    style={
                      chapterDel.some((chapter) => chapter === name)
                        ? { display: 'none' }
                        : {}
                    }
                  >
                    <Link
                      className='chapter-link'
                      to={`/chapters/${name}`}
                      onClick={() => {
                        setExamPop(true);
                      }}
                    >
                      {name}
                    </Link>
                    <DeleteChapterBtn name={name} />
                  </li>
                );
              }
              //=====================================//

              return (
                <li
                  key={`chapter${index}`}
                  style={
                    chapterDel.some((chapter) => chapter === name)
                      ? { display: 'none' }
                      : {}
                  }
                >
                  <Link
                    className='chapter-link'
                    to={`/exam/${name}`}
                    onClick={() => {
                      setLoadingExam(true);
                      localStorage.setItem(`currentChapter`, name);
                    }}
                  >
                    {name}
                  </Link>
                  <DeleteChapterBtn name={name} />
                </li>
              );
            })}
            <li>
              <Link
                className='chapter-link'
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
            </li>
          </ul>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Chapters;
