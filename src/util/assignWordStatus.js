const assignWordStatus = (status, currentWord) => {
  const wordsStatsList = JSON.parse(localStorage.getItem(`wordsStatsList`));

  wordsStatsList.forEach((wordObject, index) => {
    if (wordObject.wordENG === currentWord.wordENG) {
      let newWordsStatsList = [...wordsStatsList];
      newWordsStatsList[index].status = status;
      localStorage.setItem(`wordsStatsList`, JSON.stringify(newWordsStatsList));
    }
  });
};

export default assignWordStatus;
