import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

require(`dotenv`).config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
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

const getWords = async (setWords, setLoading) => {
  try {
    const wordsCol = collection(db, 'words');
    const wordsSnapshot = await getDocs(wordsCol);
    const wordsList = wordsSnapshot.docs.map((doc) => doc.data());
    if (!localStorage.getItem(`storeWords`)) {
      localStorage.setItem(`storeWords`, JSON.stringify(wordsList));
    }
    setWords(JSON.parse(localStorage.getItem(`storeWords`)));
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export default getWords;
