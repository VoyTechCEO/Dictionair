const getRandomExam = (chapterWords) => {
  let randomNums = [];
  let maxNum = 20;

  if (chapterWords.length < 20) {
    maxNum = chapterWords.length;
  }

  for (let i = 0; i < maxNum; i++) {
    let number = Math.floor(Math.random() * chapterWords.length);

    while (
      randomNums.some((num) => {
        return number === num;
      })
    ) {
      number = Math.floor(Math.random() * chapterWords.length);
    }

    randomNums = [...randomNums, number];
  }

  const examWords = chapterWords.filter((word, index) => {
    const passedWordNum = randomNums.find((number) => {
      return number === index;
    });
    return passedWordNum === index;
  });
  localStorage.setItem(`examWords`, JSON.stringify(examWords));
};

export default getRandomExam;
