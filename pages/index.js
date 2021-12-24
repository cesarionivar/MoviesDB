import Head from 'next/head';
import { useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { useGlobalState } from '../hooks/useGlobalState';
import { types } from '../types';

export default function Home({ movies }) {
  const [, dispatch] = useGlobalState();

  useEffect(() => {
    dispatch({
      type: types.loadMovies,
      payload: movies,
    });
  }, []);

  return (
    <div>
      <Head>
        <title>MoviesDB</title>
        <meta name='description' content='MoviesDB' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <Search />
        <Movies />
      </main>
    </div>
  );
}

export const getStaticProps = () => {
  const movies = [1, 2, 3];

  return {
    props: {
      movies,
    },
  };
};
