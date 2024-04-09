'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Page from '../../components/Page';

const AboutPage = () => {
  return (
    <Page title='About Me'>
      <p>Let&apos;s build something awesome.</p>
      <div className='my-5 space-x-4'>
        <Link
          className='inline-block border border-zinc-500 px-2 py-1 text-center hover:bg-zinc-500'
          href='mailto:gabe.santos.codes@gmail.com'
        >
          Email
        </Link>
        <Link
          className='inline-block border border-zinc-500 px-2 py-1 text-center hover:bg-zinc-500'
          href='https://www.linkedin.com/in/gabesantoscodes/'
          target='_blank'
        >
          LinkedIn
        </Link>
        <motion.a
          className='inline-block border border-zinc-500 px-2 py-1 text-center hover:bg-zinc-500'
          href='https://www.instagram.com/gabe.santos/'
          target='_blank'
        >
          Instagram
        </motion.a>
      </div>
    </Page>
  );
};

export default AboutPage;
