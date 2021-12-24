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

export const getStaticProps = async () => {
  const { Search: movies } = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_APIKEY}&s=matrix`
  ).then((res) => res.json());

  return {
    props: {
      movies,
    },
  };
};
