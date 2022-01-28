import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { useRecoilState } from 'recoil';
import { addChapterState, wordsState } from '../recoil';
import setWordsStatsList from '../util/setWordsStatsList';

const CreatorWords = () => {
  const { chapterName } = useParams();
  const [words, setWords] = useRecoilState(wordsState);
  const [addChapter, setAddChapter] = useRecoilState(addChapterState);
  const [wordPL, setWordPL] = useState(``);
  const [wordFor, setWordFor] = useState(``);
  const [wordsList, setWordsList] = useState([]);
  const [chapterList, setChapterList] = useState(words[0].chapters);

  useEffect(() => {
    localStorage.setItem(
      `storeWords`,
      JSON.stringify([{ chapters: [...chapterList] }])
    );
    setAddChapter(chapterName);
    setWordsStatsList(words);
  }, [chapterList]);

  return (
    <form>
      <input
        type='text'
        id='add-chapter'
        name='add-chapter'
        placeholder='Polskie tłumaczenie'
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
        value={wordFor}
        onChange={(e) => {
          setWordFor(e.target.value);
        }}
      />
      <div className='btn-container'>
        <button
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
          type='submit'
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
