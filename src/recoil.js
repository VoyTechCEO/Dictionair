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

const currentWordsExamState = atom({
  key: 'currentWordsExamState',
  default: [],
});

const loadingExamState = atom({
  key: 'loadingExamState',
  default: false,
});

export { loadingState, wordsState, loadingExamState };
