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

export { loadingState, wordsState };
