import React from 'react';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
import Exam from './pages/Exam';
import Dictionary from './pages/Dictionary';

import { Routes, Route, Navigate } from 'react-router-dom';

import { loadingState, wordsState } from './recoil';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react/cjs/react.development';
import getWords from './util/getWords';
import setWordsStatsList from './util/setWordsStatsList';

function App() {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [words, setWords] = useRecoilState(wordsState);
  useEffect(() => {
    getWords(setWords, setLoading);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  // wpakuj wszystkie słówka to localStorage, dostań się do rozdziałów i przeiteruj przez nie po prostu, dodając słówka z każdego do jednego wielkiego localStorage, potem odnajdujesz wpisane podczas egzaminu poprawne słówko w localStorage i zmieniasz mu wartość statusu na correct czy coś (wcześniej musisz przeiterować wszystkie słówka localStorage i im dodać ten status do objectu)

  if (!localStorage.getItem(`wordsStatsList`)) {
    setWordsStatsList(words);
  }
  console.log(words);

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/chapters' element={<Chapters />} />
      <Route exact path='/exam/:chapter' element={<Exam />} />
      <Route path='/dictionary' element={<Dictionary />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
