import React from 'react';
import BackArrow from './BackArrow';
import { useRecoilState } from 'recoil';
import { searchTermState, statsSwitchState } from '../recoil';

const Header = ({ isBackArrow, isSearchBar }) => {
  const [statsSwitch, setStatsSwitch] = useRecoilState(statsSwitchState);
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  return (
    <header>
      <div>{isBackArrow && <BackArrow />}</div>
      <div>
        {isSearchBar ? (
          <>
            <input
              type='text'
              placeholder='Wyszukaj polskie słówko'
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              autoFocus
            />
          </>
        ) : (
          <>
            <h1>Dictionair</h1>
            <h4>by VoyTech</h4>
          </>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setStatsSwitch(!statsSwitch);
          }}
        >
          <h1>Statystyki</h1>
          <svg
            width='32'
            height='32'
            version='1.1'
            viewBox='0 0 28.176 52.917'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g transform='translate(-60.738 -80.501)'>
              <path
                d='m88.053 133.42h-.86089l-26.454-26.458 26.454-26.458h1.7218v1.7177l-24.736 24.741 24.736 24.741v1.7177z'
                strokeWidth='.26458'
              />
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
