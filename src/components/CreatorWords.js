import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { useRecoilState } from 'recoil';
import { addChapterState, wordsState } from '../recoil';

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
    console.log(JSON.parse(localStorage.getItem(`storeWords`)));
  }, [chapterList]);

  return (
    <form>
      <input
        type='text'
        id='add-chapter'
        name='add-chapter'
        placeholder='Polskie tłumaczenie'
        autoFocus
        autoComplete='off'
        required
        value={wordPL}
        onChange={(e) => {
          setWordPL(e.target.value);
        }}
      />
      <input
        type='text'
        id='add-chapter'
        name='add-chapter'
        placeholder='Obcojęzyczne tłumaczenie'
        autoComplete='off'
        required
        value={wordFor}
        onChange={(e) => {
          setWordFor(e.target.value);
        }}
      />
      <div className='btn-container'>
        <button
          type='submit'
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
          Dodaj
        </button>
        <button
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
          Zapisz
        </button>
      </div>
    </form>
  );
};

export default CreatorWords;
