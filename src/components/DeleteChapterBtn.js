import React from 'react';
import { useRecoilState } from 'recoil';
import { addChapterState, chapterDelState, wordsState } from '../recoil';
import setWordsStatsList from '../util/setWordsStatsList';

import { animated } from 'react-spring';

const DeleteChapterBtn = ({ name, delBtnAni }) => {
  const [words, setWords] = useRecoilState(wordsState);
  const [addChapter, setAddChapter] = useRecoilState(addChapterState);
  const [chapterDel, setChapterDel] = useRecoilState(chapterDelState);

  return (
    <animated.div className='delete-container' style={delBtnAni}>
      <button
        onClick={() => {
          const chapNum = words[0].chapters.length;
          const newWords = words[0].chapters.filter((chapter) => {
            return chapter.name !== name;
          });
          localStorage.setItem(
            `storeWords`,
            JSON.stringify([{ chapters: [...newWords] }])
          );
          setWordsStatsList(JSON.parse(localStorage.getItem(`storeWords`)));
          // if deleting problems occured uncomment the code below
          // window.location.reload();
          setAddChapter(name); // yeet this shit out
          setChapterDel([...chapterDel, name]);
        }}
      >
        <svg
          width='20'
          height='20'
          version='1.1'
          viewBox='0 0 62.967 52.917'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='m7.009 52.917h-7.009l26.454-26.458-26.454-26.458h14.018l17.468 17.463 17.457-17.463h14.024l-26.454 26.458 26.454 26.458h-14.024l-17.457-17.463-17.468 17.463z'
            strokeWidth='.26458'
          />
        </svg>
      </button>
    </animated.div>
  );
};

export default DeleteChapterBtn;
