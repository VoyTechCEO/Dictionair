import React from 'react';

import { Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';

import { useMediaQuery } from 'react-responsive';

const BackArrow = () => {
  const tablet760 = useMediaQuery({ query: '(max-width: 760px)' });

  // animations
  const [arrowAni, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  return (
    <Link
      to='/'
      onMouseOver={() => {
        api.start({ x: -10 });
      }}
      onMouseOut={() => {
        api.start({ x: 0 });
      }}
    >
      {tablet760 ? (
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
      ) : (
        <animated.svg
          style={arrowAni}
          width='45'
          height='45'
          version='1.1'
          viewBox='0 0 71.66 52.917'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g transform='translate(-34.374 -81.43)'>
            <path
              d='m61.689 134.35h-.86089l-26.454-26.458 26.454-26.458h1.7218v1.7177l-24.736 24.741 24.736 24.741v1.7177zm22.424-25.135h-20.678l-1.2428-1.3229 1.2428-1.3229h41.355l1.2428 1.3229-1.2428 1.3229z'
              strokeWidth='.26458'
            />
          </g>
        </animated.svg>
      )}
    </Link>
  );
};

export default BackArrow;
