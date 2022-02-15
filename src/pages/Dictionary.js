import React from 'react';
import { useRecoilState } from 'recoil';
import DictionaryChapter from '../components/DictionaryChapter';
import Header from '../components/Header';
import Stats from '../components/Stats';
import { wordsState } from '../recoil';

const Dictionary = () => {
  const [words, setWords] = useRecoilState(wordsState);

  return (
    <section className='dictionary'>
      <Header isBackArrow={true} isSearchBar={true} />
      <div className='dictionary-container'>
        <ul className='chapters'>
          {words[0].chapters.map((chapter, index) => {
            return (
              <DictionaryChapter
                key={`chapterKey${index}`}
                chapter={chapter}
                index={index}
              />
            );
          })}
        </ul>
      </div>
      <Stats />
    </section>
  );
};

export default Dictionary;
