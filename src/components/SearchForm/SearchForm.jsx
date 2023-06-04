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

    if (input.trim() !== '') action({ query: input });
    if (input.trim() === '') alert('Your search request is empty');

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
