import React from 'react';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
import Exam from './pages/Exam';
import Dictionary from './pages/Dictionary';
import { loadingState, wordsState } from './recoil';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react/cjs/react.development';
import getWords from './util/getWords';

function App() {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [words, setWords] = useRecoilState(wordsState);
  useEffect(() => {
    getWords(setWords, setLoading);
  }, []);
  if (!loading) {
    console.log(words);
  }

  return <Home />;
}

export default App;
