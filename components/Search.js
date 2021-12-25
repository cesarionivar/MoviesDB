import { useState } from 'react';
import Swal from 'sweetalert2';
import { useGlobalState } from '../hooks/useGlobalState';
import { getMovies } from '../services/getMovies';
import { types } from '../types';

export const Search = () => {
  const [term, setTerm] = useState('');
  const [, dispatch] = useGlobalState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!term) return null;

    dispatch({ type: types.setLoading });

    const { data } = await getMovies(term);
    if (!data) {
      setTerm('');
      return Swal.fire('Error', 'No movies found', 'error');
    }

    dispatch({
      type: types.loadMovies,
      payload: data,
    });

    setTerm('');
  };

  return (
    <section className='search'>
      <h1 className='title'>Search Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search...'
        />
      </form>
    </section>
  );
};
