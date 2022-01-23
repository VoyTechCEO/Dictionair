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

const statsSwitchState = atom({
  key: `statsSwitchState`,
  default: false,
});

const loadingWordsStatsState = atom({
  key: `loadingWordsStatsState`,
  default: false,
});

const searchTermState = atom({
  key: `searchTermState`,
  default: ``,
});

const afterExamPopState = atom({
  key: `afterExamPopState`,
  default: false,
});

export {
  loadingState,
  wordsState,
  loadingExamState,
  examStatusState,
  currentWordNumberState,
  userAnswerState,
  statsSwitchState,
  loadingWordsStatsState,
  searchTermState,
  afterExamPopState,
};
