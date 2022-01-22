const getRandomExam = (chapterWords) => {
  let randomNums = [];
  for (let i = 0; i < 20; i++) {
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
  console.log(examWords);
  localStorage.setItem(`examWords`, JSON.stringify(examWords));
};

export default getRandomExam;
