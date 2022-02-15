import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { searchTermState } from '../recoil';

import { useSpring, animated } from 'react-spring';

const DictionaryChapter = ({ chapter, index }) => {
  const [searchTerm, _setSearchTerm] = useRecoilState(searchTermState);
  const searchedWords = chapter.words.filter(({ wordPL, wordENG }) => {
    let re = new RegExp(
      `${searchTerm.replace(/[^a-zA-Z ]/g, '').toLowerCase()}`
    );
    return re.test(wordPL.toLowerCase());
  });

  // animations
  const [initChapter, api] = useSpring(() => ({
    from: { x: index % 2 ? 100 : -100, opacity: 0 },
  }));

  useEffect(() => {
    api.start({
      x: 0,
      opacity: 1,
    });
  }, []);

  return (
    <animated.li
      className={searchedWords.length > 0 ? `chapter` : `chapter hidden`}
      style={initChapter}
    >
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
    </animated.li>
  );
};

export default DictionaryChapter;
