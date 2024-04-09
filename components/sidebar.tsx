'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';
import { avatar } from '../lib/info';

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work',
  },
  '/contact': {
    name: 'contact',
  },
  '/blog': {
    name: 'blog',
  },
};

const Logo = () => {
  return (
    <Link aria-label='Gabe Santos' href='/'>
      <Image
        src={avatar}
        width={80}
        alt='Picture of the author'
        style={{ filter: 'grayscale(100%)', borderRadius: '50%' }}
      />
    </Link>
  );
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className='-mx-4 font-mono md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0'>
      <div className='lg:sticky lg:top-20'>
        <div className=''>{/* <Logo /> */}</div>
        <LayoutGroup>
          <nav
            className='fade relative mt-4 flex scroll-pr-6 flex-row items-start px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0'
            id='nav'
          >
            <div className='mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col'>
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'flex align-middle transition-all hover:text-zinc-900 dark:hover:text-zinc-300',
                      {
                        'text-zinc-500': !isActive,
                        'font-bold': isActive,
                      },
                    )}
                  >
                    <span className='relative px-[10px] py-[5px]'>
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className='absolute inset-0 z-[-1] bg-zinc-400 dark:bg-zinc-700'
                          layoutId='sidebar'
                          transition={{
                            type: 'spring',
                            stiffness: 250,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
