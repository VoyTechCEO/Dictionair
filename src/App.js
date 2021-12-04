import React from 'react';
import { useEffect } from 'react';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
import Exam from './pages/Exam';
import Dictionary from './pages/Dictionary';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACLR3t0bsFiQ3hlQPUfJop4rkXB6yiWDM',
  authDomain: 'dictionair-ebfbc.firebaseapp.com',
  projectId: 'dictionair-ebfbc',
  storageBucket: 'dictionair-ebfbc.appspot.com',
  messagingSenderId: '173729171514',
  appId: '1:173729171514:web:fba45d43df91c787de4d03',
  measurementId: 'G-WBYRVY1MQ5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

async function getWords(db) {
  const wordsCol = collection(db, 'words');
  const wordsSnapshot = await getDocs(wordsCol);
  const wordsList = wordsSnapshot.docs.map((doc) => doc.data());
  console.log(wordsList[0].chapterDishes[1]);
  return wordsList;
}

function App() {
  useEffect(() => {
    getWords(db);
  }, []);

  return <Dictionary />;
}

export default App;
