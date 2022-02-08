import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const CreatorName = () => {
  const [name, setName] = useState(``);
  const navigate = useNavigate();

  return (
    <form>
      <input
        type='text'
        id='add-chapter'
        name='add-chapter'
        placeholder='Nazwa rozdziału'
        autoComplete='off'
        autoFocus
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className='btn-container'>
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            if (name.replace(/\s/g, '') !== ``) {
              navigate(`/chapters/create/${name}`);
            }
          }}
        >
          Zatwierdź
        </button>
      </div>
    </form>
  );
};

export default CreatorName;
