import Head from 'next/head';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';

export default function Home() {
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
