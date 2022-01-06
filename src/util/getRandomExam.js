const getRandomExam = (chapterWords, setLoadingExam) => {
  let randomNums = [];
  for (let i = 0; i < 20; i++) {
    let number = Math.floor(Math.random() * chapterWords.length);

    while (
      randomNums.find((num) => {
        return number === num;
      })
    ) {
      number = Math.floor(Math.random() * chapterWords.length);
    }

    randomNums = [...randomNums, number];
  }
  console.log(randomNums);

  const examWords = chapterWords.filter((word, index) => {
    const passedWordNum = randomNums.find((number) => {
      return number === index;
    });
    return passedWordNum === index;
  });
  console.log(examWords);
  setLoadingExam(false);
};

export default getRandomExam;
