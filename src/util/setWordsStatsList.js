const setWordsStatsList = (words) => {
  let collectedWordsList = [];
  words[0].chapters.forEach((chapter) => {
    let chapterWords = [];
    chapter.words.forEach((wordObject) => {
      let newWordObject = Object.create(wordObject);
      newWordObject = { ...wordObject };
      chapterWords = [...chapterWords, newWordObject];
    });
    collectedWordsList = [...collectedWordsList, ...chapterWords];
  });
  collectedWordsList.forEach((wordObject) => {
    wordObject.status = ``;
  });
  localStorage.setItem(`wordsStatsList`, JSON.stringify(collectedWordsList));
};

export default setWordsStatsList;
