import React from 'react';

const Loading = () => {
  return (
    <section>
      <div className='container'>
        <article className='loading-content'>
          <svg
            className='spinner'
            width='125'
            height='125'
            version='1.1'
            viewBox='0 0 52.832 52.832'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g transform='translate(4.6405 -125.3)'>
              <path
                transform='scale(.26458)'
                d='m82.301 473.56c-55.14-2e-4-99.84 44.7-99.84 99.84-.000201 55.14 44.7 99.84 99.84 99.84 55.14.00019 99.84-44.7 99.84-99.84-.002-4.7006-.33505-9.3952-.99804-14.049l-7.8496 1.6816c.56464 4.0983.85175 8.2301.85937 12.367.00066 50.729-41.123 91.853-91.852 91.854-50.73.00066-91.854-41.124-91.854-91.854.0004242-50.729 41.125-91.852 91.854-91.852.96699.001 1.9339.0173 2.9004.0488l.25391-7.9823c-1.0511-.0349-2.1026-.0531-3.1543-.0547z'
                color='#000000'
              />
            </g>
          </svg>
        </article>
      </div>
    </section>
  );
};

export default Loading;
