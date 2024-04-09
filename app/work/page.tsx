'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Page from '../../components/Page';
import excursionistGif from '../../public/excursionist.gif';
import macrolatorGif from '../../public/macrolator.gif';
import agency from '../../public/agency-site.png';

interface ProjectProps {
  link: string;
  name: string;
  img: string | StaticImageData;
}

const Project = ({ link, name, img }: ProjectProps) => {
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
        <Image alt='macrolator gif' className='w-full' src={img} />
      </div>
    </>
  );
};

const ProjectsPage = () => {
  const isRebuilding = true;

  return (
    <Page title='Work'>
      {isRebuilding ? (
        <div className=''> 🚧 Rebuilding 🚧 </div>
      ) : (
        <div>
          <Project
            link='https://fr-mentor-arch-studio.vercel.app/'
            name='Agency Website'
            img={agency}
          />
          <Project
            link='https://github.com/gabe-santos/excursionist'
            name='Excursionist'
            img={excursionistGif}
          />
          <Project
            link='https://github.com/gabe-santos/calorie-macro-calc'
            name='The Macrolator'
            img={macrolatorGif}
          />
        </div>
      )}
    </Page>
  );
};

export default ProjectsPage;
