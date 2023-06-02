import { useState } from 'react-router-dom';

// ###############################

export default function SearchForm({ submitHandler }) {
  //
  const [input, setInput] = useState('');

  const changeHandler = e => {
    setInput(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={input} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
