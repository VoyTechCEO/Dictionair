import React, { useEffect, useState } from 'react';
import CreatorInput from '../components/CreatorInput';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { addChapterState, wordsState } from '../recoil';

import { useSpring, animated } from 'react-spring';

const CreatorWords = () => {
  const { chapterName } = useParams();
  const [words, setWords] = useRecoilState(wordsState);
  const [addChapter, setAddChapter] = useRecoilState(addChapterState);
  const [wordPL, setWordPL] = useState(``);
  const [wordFor, setWordFor] = useState(``);
  const [wordsList, setWordsList] = useState([]);
  const [chapterList, setChapterList] = useState(words[0].chapters);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      `storeWords`,
      JSON.stringify([{ chapters: [...chapterList] }])
    );
    setAddChapter(chapterName);
    if (
      words[0].chapters.some((chp) => {
        return chp.name === chapterName;
      })
    ) {
      navigate(`/chapters`);
    }
  }, [chapterList]);

  // animations
  const [initForm, api] = useSpring(() => ({
    from: { x: 100, opacity: 0 },
  }));

  const [hoverBtnBg, animateHoverBtnBg] = useSpring(() => ({
    from: { width: `100%`, y: 0 },
  }));

  const [hoverBtnNonBg, animateHoverBtnNonBg] = useSpring(() => ({
    from: { width: `0`, y: 0 },
  }));

  useEffect(() => {
    api.start({
      x: 0,
      opacity: 1,
    });
  }, []);

  return (
    <animated.form style={initForm}>
      <CreatorInput
        value={wordPL}
        setValue={setWordPL}
        id='wordPL'
        placeholder='Polskie tłumaczenie'
      />
      <CreatorInput
        value={wordFor}
        setValue={setWordFor}
        id='wordFor'
        placeholder='Obcojęzyczne tłumaczenie'
      />
      <div className='btn-container'>
        <button
          type='submit'
          onMouseOver={() => {
            animateHoverBtnBg.start({ width: `0` });
          }}
          onMouseOut={() => {
            animateHoverBtnBg.start({ width: `100%` });
          }}
          onClick={(e) => {
            e.preventDefault();
            if (
              wordPL.replace(/\s/g, '') !== `` &&
              wordFor.replace(/\s/g, '') !== ``
            ) {
              const wordObject = {
                wordPL: `${wordPL}`,
                wordENG: `${wordFor}`,
              };
              setWordsList([...wordsList, wordObject]);
              setWordPL(``);
              setWordFor(``);
            }
          }}
        >
          <animated.div className='cover' style={hoverBtnBg}>
            <span>Dodaj</span>
          </animated.div>
          <span>Dodaj</span>
        </button>
        <button
          onMouseOver={() => {
            animateHoverBtnNonBg.start({ width: `100%` });
          }}
          onMouseOut={() => {
            animateHoverBtnNonBg.start({ width: `0` });
          }}
          onClick={(e) => {
            e.preventDefault();
            const newChapter = {
              name: `${chapterName}`,
              words: wordsList,
            };
            setChapterList([...chapterList, newChapter]);
            window.location.reload();
          }}
        >
          <span>Zapisz</span>
          <animated.div className='underline' style={hoverBtnNonBg} />
        </button>
      </div>
    </animated.form>
  );
};

export default CreatorWords;
