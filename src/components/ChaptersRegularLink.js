import React, { useEffect } from 'react';
import DeleteChapterBtn from '../components/DeleteChapterBtn';

import { useRecoilState } from 'recoil';
import { chapterDelState } from '../recoil';

import { Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';

const ChaptersRegularLink = ({
  name,
  url,
  setExamPop,
  setLoadingExam,
  linkIndex,
}) => {
  const [chapterDel, setChapterDel] = useRecoilState(chapterDelState);

  // animations
  const [initChapterLink, api] = useSpring(() => ({
    from: { x: -100, opacity: 0 },
  }));

  const [delBtnAni, animateDelBtnAni] = useSpring(() => ({
    rotateZ: 90,
    from: { opacity: 0 },
  }));

  useEffect(() => {
    api.start({
      x: 0,
      opacity: 1,
      delay: 100 * linkIndex,
    });
  }, []);

  return (
    <animated.li
      onMouseOver={() => {
        animateDelBtnAni.start({ rotateZ: 0, opacity: 1 });
      }}
      onMouseOut={() => {
        animateDelBtnAni.start({ rotateZ: 90, opacity: 0 });
      }}
      style={
        chapterDel.some((chapter) => chapter === name)
          ? { display: 'none', ...initChapterLink }
          : { ...initChapterLink }
      }
    >
      <Link
        className='chapter-link'
        to={url}
        onClick={() => {
          if (url === `/chapters/${name}`) {
            setExamPop(true);
          }
          if (url === `/exam/${name}`) {
            setLoadingExam(true);
            localStorage.setItem(`currentChapter`, name);
          }
        }}
      >
        {name}
      </Link>
      <DeleteChapterBtn name={name} delBtnAni={delBtnAni} />
    </animated.li>
  );
};

export default ChaptersRegularLink;
