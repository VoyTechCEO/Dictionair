import React, { useState } from 'react';
import CreatorInput from '../components/CreatorInput';
import { useNavigate } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';

const CreatorName = () => {
  const [name, setName] = useState(``);
  const navigate = useNavigate();

  // animations
  const [hoverBtnBg, animateHoverBtnBg] = useSpring(() => ({
    from: { width: `100%`, y: 0 },
  }));

  return (
    <form>
      <CreatorInput
        value={name}
        setValue={setName}
        id='add-chapter'
        placeholder='Nazwa rozdziału'
      />
      <div className='btn-container'>
        <button
          type='submit'
          onMouseOver={() => {
            animateHoverBtnBg.start({ width: `0` });
          }}
          onMouseOut={() => {
            animateHoverBtnBg.start({ width: `100%` });
          }}
          onClick={(e) => {
            e.preventDefault();
            if (name.replace(/\s/g, '') !== ``) {
              navigate(`/chapters/create/${name}`);
            }
          }}
        >
          <animated.div className='cover' style={hoverBtnBg}>
            <span>Zatwierdź</span>
          </animated.div>
          <span>Zatwierdź</span>
        </button>
      </div>
    </form>
  );
};

export default CreatorName;
