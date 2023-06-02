import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// ###############################

export default function SearchForm({}) {
  //
  const [input, setInput] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log('query: ', query);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: input });
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
