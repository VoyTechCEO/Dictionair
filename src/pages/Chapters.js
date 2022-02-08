import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Stats from '../components/Stats';
import FinishExamPop from '../components/FinishExamPop';
import ChaptersRegularLink from '../components/ChaptersRegularLink';

import { useRecoilState } from 'recoil';
import { wordsState, loadingExamState } from '../recoil';

import { Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';

const Chapters = () => {
  const [words, setWords] = useRecoilState(wordsState);
  const [loadingExam, setLoadingExam] = useRecoilState(loadingExamState);
  const [examPop, setExamPop] = useState(false);

  useEffect(() => {
    setLoadingExam(true);
  }, []);

  // animations
  const [initChapterLink, api] = useSpring(() => ({
    from: { x: -100, opacity: 0 },
  }));

  const [rotateAddBtnAni, animateRotateAddBtnAni] = useSpring(() => ({
    from: { rotateZ: 0 },
  }));

  const [underlineAddBtnAni, animateUnderlineAddBtnAni] = useSpring(() => ({
    from: { width: `0` },
  }));

  useEffect(() => {
    api.start({
      x: 0,
      opacity: 1,
      delay: 100 * words[0].chapters.length,
    });
  }, []);

  return (
    <section className='dictionary'>
      <Header isBackArrow={true} />
      {examPop && <FinishExamPop setExamPop={setExamPop} />}
      <div className='container'>
        <div className='chapters-content'>
          <h1>Wybierz rozdział</h1>
          <ul>
            <li
              onMouseOver={() => {
                animateRotateAddBtnAni.start({ rotateZ: 90 });
                animateUnderlineAddBtnAni.start({ width: `100%` });
              }}
              onMouseOut={() => {
                animateRotateAddBtnAni.start({ rotateZ: 0 });
                animateUnderlineAddBtnAni.start({ width: `0` });
              }}
            >
              <Link to='/chapters/create' className='create-chapter-btn'>
                <animated.svg
                  style={rotateAddBtnAni}
                  height='17'
                  version='1.1'
                  viewBox='0 0 52.917 52.917'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g transform='translate(-115.79 -19.591)'>
                    <path d='m142.25 72.508h-2.6458v-23.813h-23.812v-5.2917h23.812v-23.813h5.2917v23.813h23.812v5.2917h-23.812v23.813z' />
                  </g>
                </animated.svg>
                <span>Dodaj rozdział</span>
              </Link>
              <animated.div className='underline' style={underlineAddBtnAni} />
            </li>
            {words[0].chapters.map((chapter, index) => {
              let name = chapter.name;
              name[0].toUpperCase();

              //=== Return if exam is already set ===//
              // If you want to edit some of the stuff below or anything that's related to chapters' navigation you better check code at FinishExamPop.js in components.
              if (localStorage.getItem(`examWords`)) {
                return (
                  <ChaptersRegularLink
                    key={`chapter${index}`}
                    name={name}
                    url={`/chapters/${name}`}
                    setExamPop={setExamPop}
                    setLoadingExam={setLoadingExam}
                    linkIndex={index}
                  />
                );
              }
              //=====================================//

              return (
                <ChaptersRegularLink
                  key={`chapter${index}`}
                  name={name}
                  url={`/exam/${name}`}
                  setExamPop={setExamPop}
                  setLoadingExam={setLoadingExam}
                  linkIndex={index}
                />
              );
            })}
            <animated.li style={initChapterLink}>
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
            </animated.li>
          </ul>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Chapters;
