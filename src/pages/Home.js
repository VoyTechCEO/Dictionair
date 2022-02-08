import React, { useEffect } from 'react';
import Header from '../components/Header';
import Stats from '../components/Stats';
import AfterExamPop from '../components/AfterExamPop';
import HomeOption from '../components/HomeOption';

import { afterExamPopState } from '../recoil';
import { useRecoilState } from 'recoil';

import { useSpring, animated } from 'react-spring';

const Home = () => {
  const [afterExamPop, setAfterExamPop] = useRecoilState(afterExamPopState);

  // animations
  const [initHomeLine, api] = useSpring(() => ({
    from: { rotateZ: 90 },
  }));

  useEffect(() => {
    api.start({ rotateZ: 0 });
  }, []);

  return (
    <section>
      <Header />
      {afterExamPop && <AfterExamPop />}
      <div className='container'>
        <article className='home-content'>
          <HomeOption url='/chapters' title='Sprawdź się!' />
          <animated.div className='border' style={initHomeLine} />
          <HomeOption url='/dictionary' title='Albo się poucz ;(' />
        </article>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
