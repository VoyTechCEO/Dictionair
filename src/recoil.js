import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const loadingState = atom({
  key: `loadingState`,
  default: true,
});

const wordsState = atom({
  key: `wordsState`,
  default: [],
});

const loadingExamState = atom({
  key: 'loadingExamState',
  default: true,
});

const examStatusState = atom({
  key: `examStatusState`,
  default: `translate`,
});

const currentWordNumberState = atom({
  key: `currentWordNumberState`,
  default: 1,
});

const userAnswerState = atom({
  key: `userAnswerState`,
  default: ``,
});

export {
  loadingState,
  wordsState,
  loadingExamState,
  examStatusState,
  currentWordNumberState,
  userAnswerState,
};
