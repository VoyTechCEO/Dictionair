import React, { useRef } from 'react';

import { useSpring, animated } from 'react-spring';

const CreatorInput = ({ value, setValue, id, placeholder }) => {
  const labelRef = useRef(null);

  // animations
  const [focusInput, animateFocusInput] = useSpring(() => ({
    from: { y: 0, zIndex: 9 },
  }));

  return (
    <div className='input-container'>
      <animated.label htmlFor={id} ref={labelRef} style={focusInput}>
        <svg
          width='25'
          height='25'
          version='1.1'
          viewBox='0 0 32.208 43.356'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g transform='translate(-.3)'>
            <path
              d='m16.404 43.356h-16.104v-39.881h5.2562v-1.3583h6.0854v-2.1167h9.525v2.1167h6.0854v1.3583h5.2562l-.3 39.881zm0-1.2521h14.852v-37.377h-4.0042v1.3583h-21.696v-1.3583h-4.0042v37.377zm-8.0698-4.7979h-3.0427v-6.0854h6.0854v6.0854zm0-.79375h2.249v-4.4979h-4.4979v4.4979zm12.171-1.3229h-7.276v-1.8521h14.552v1.8521zm-12.171-7.6729h-3.0427v-6.0854h6.0854v6.0854zm0-.79375h2.249v-4.4979h-4.4979v4.4979zm12.171-1.3229h-7.276v-1.8521h14.552v1.8521zm-12.513-7.2069-.49456.60051-.48261-.53327-.4826-.53327h-1.2409v-1.1706l-2.2268-2.269h2.2268v-2.6458h2.8948l3.231.006.44971-.53154.74071-.004h1.1995l-1.2151 1.4793-1.2696 1.5337.0545 1.6458v1.9558h-1.372l-1.641.0175zm1.9295-1.2598h.66145l-.00044-.98019.011-.97609-.4918.63427-.93526 1.1281-.14449.19694.23803-.003zm-2.4831-.59165.17134-.2021.80326-.94672.79085-.9343.75817-.88677.62176-.74656-.002-.16052-2.3489-.0293h-2.1481v2.4794l1.1506 1.2247zm13.066-.73127h-7.276v-1.8521h14.552v1.8521z'
              strokeWidth='.26458'
            />
          </g>
        </svg>
        <span>{placeholder}</span>
      </animated.label>
      <input
        type='text'
        id={id}
        name={id}
        autoComplete='off'
        required
        onFocus={() => {
          animateFocusInput.start({ y: -32, zIndex: 999 });
          labelRef.current.style.zIndex = 999;
        }}
        onBlur={() => {
          if (value.replace(/\s/g, '') === ``) {
            animateFocusInput.start({ y: 0, zIndex: 9 });
          }
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default CreatorInput;
