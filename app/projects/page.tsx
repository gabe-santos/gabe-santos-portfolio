'use client';

import Image from 'next/image';
import Link from 'next/link';
import Page from '../../components/Page';
import excursionistGif from '../../public/excursionist.gif';
import macrolatorGif from '../../public/macrolator.gif';
import portfolioGif from '../../public/porfolio.gif';

const Project = ({ link, name, gifPath }) => {
  return (
    <>
      <h2 className='my-5 font-mono text-2xl text-zinc-800 dark:text-zinc-300'>
        {name}
      </h2>
      <div className='group relative'>
        <Link
          className='absolute inset-0 flex items-center justify-center bg-zinc-900 opacity-0 transition group-hover:opacity-70'
          href={link}
        >
          <span className='text-lg text-white'>Github</span>
        </Link>
        <Image
          alt='macrolator gif'
          className=''
          src={gifPath}
          height={100}
          width={800}
          priority
        />
      </div>
    </>
  );
};

const ProjectsPage = () => {
  return (
    <Page title='Projects'>
      <Project
        link='https://github.com/gabe-santos/excursionist'
        name='Excursionist'
        gifPath={excursionistGif}
      />
      <Project
        link='https://github.com/gabe-santos/calorie-macro-calc'
        name='The Macrolator'
        gifPath={macrolatorGif}
      />
    </Page>
  );
};

export default ProjectsPage;
