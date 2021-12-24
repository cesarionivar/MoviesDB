import { useGlobalState } from '../hooks/useGlobalState';
import { Loader } from './Loader';
import { MovieItem } from './MovieItem';

export const Movies = () => {
  const [{ movies, loading }] = useGlobalState();

  if (loading) {
    return <Loader />;
  }

  return (
    <section className='movies'>
      {movies.map((movie) => (
        <MovieItem key={movie} />
      ))}
    </section>
  );
};
