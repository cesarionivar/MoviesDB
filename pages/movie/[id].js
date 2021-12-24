import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function () {
  return (
    <main className='movie container'>
      <Image
        src='https://images.pexels.com/photos/2859016/pexels-photo-2859016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        width={400}
        height={600}
      />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          impedit, quis fugiat porro minus labore animi molestiae ab error
          tenetur.
        </p>
        <Link href='/'>
          <a className='btn'>Return home</a>
        </Link>
      </div>
    </main>
  );
}
