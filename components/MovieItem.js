import Image from 'next/image';
import Link from 'next/link';

export const MovieItem = ({ Title, imdbID, Poster }) => {
  return (
    <div className='movie__card'>
      <Link href={`/movie/${imdbID}`}>
        <a>
          {Poster.includes('http') && (
            <Image src={Poster} width={350} height={400} />
          )}
          <p className='movie__description'>{Title}</p>
        </a>
      </Link>
    </div>
  );
};
