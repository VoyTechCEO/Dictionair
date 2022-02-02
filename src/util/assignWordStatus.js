const assignWordStatus = (status, currentWord, setAddChapter) => {
  const wordsStatsList = JSON.parse(localStorage.getItem(`wordsStatsList`));
  const storeWords = JSON.parse(localStorage.getItem(`storeWords`));

  storeWords[0].chapters.forEach((chapter, chapterIndex) => {
    chapter.words.forEach((wordObject, wordIndex) => {
      if (wordObject.wordENG === currentWord.wordENG) {
        let newStoreWords = [...storeWords];
        newStoreWords[0].chapters[chapterIndex].words[wordIndex].status =
          status;
        localStorage.setItem(`storeWords`, JSON.stringify(newStoreWords));
        setAddChapter(wordObject.wordENG);
      }
    });
  });

  // wordsStatsList.forEach((wordObject, index) => {
  //   if (wordObject.wordENG === currentWord.wordENG) {
  //     let newWordsStatsList = [...wordsStatsList];
  //     newWordsStatsList[index].status = status;
  //     localStorage.setItem(`wordsStatsList`, JSON.stringify(newWordsStatsList));
  //   }
  // });
};

export default assignWordStatus;
