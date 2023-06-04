import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import axios from 'axios';
import 'api';

import SearchForm from 'components/SearchForm/SearchForm';
import SearchResults from 'components/SearchResults/SearchResults';

// ###############################

export default function Movies() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    let cancel;

    // GET 'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=true&language=en-US&page=1'

    async function getResults() {
      try {
        setError(null);
        setIsLoading(true);

        const response = await axios.get(`/search/movie?query=${query}`, {
          cancelToken: new axios.CancelToken(c => (cancel = c)),
        });

        setResults(response.data.results);
        console.log('response.data: ', response.data);
      } catch ({ message }) {
        if (message !== 'canceled') {
          setError(message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getResults();

    return () => cancel();
  }, [query]);

  return (
    <>
      <SearchForm action={setSearchParams} />
      {isLoading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {results && <SearchResults data={results} />}
    </>
  );
}
