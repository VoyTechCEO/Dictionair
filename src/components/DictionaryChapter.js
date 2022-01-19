import React from 'react';
import { useRecoilState } from 'recoil';
import { searchTermState } from '../recoil';

const DictionaryChapter = ({ chapter }) => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const searchedWords = chapter.words.filter(({ wordPL, wordENG }) => {
    let re = new RegExp(`${searchTerm.toLowerCase()}`);
    return re.test(wordPL.toLowerCase());
  });

  return (
    <li className={searchedWords.length > 0 ? `chapter` : `chapter hidden`}>
      <h1>{chapter.name}</h1>
      <ul>
        {searchedWords.map(({ wordPL, wordENG }, index) => {
          return (
            <li key={`wordKey${index}`}>
              <p>{wordPL}</p>
              <p>{wordENG}</p>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default DictionaryChapter;
