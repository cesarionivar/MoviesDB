import Image from 'next/image';
import Link from 'next/link';

export const Movies = () => {
  return (
    <section className='movies'>
      <div className='movie__card'>
        <Link href='/movie/1'>
          <a className='movie'>
            <Image
              src='https://images.pexels.com/photos/2859016/pexels-photo-2859016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              width={350}
              height={400}
            />
            <p className='movie__description'>Spider man 2</p>
          </a>
        </Link>
      </div>
    </section>
  );
};
