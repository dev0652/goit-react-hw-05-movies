import { useState } from 'react';

// ###############################

export default function SearchForm({ action }) {
  //
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    action({ query: input });
    setInput('');
    // or
    // e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={input} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
