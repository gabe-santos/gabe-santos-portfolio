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
	'/about': {
		name: 'about',
	},
	'/projects': {
		name: 'projects',
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
		<aside className='md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-mono'>
			<div className='lg:sticky lg:top-20'>
				<div className=''>
					<Logo />
				</div>
				<LayoutGroup>
					<nav
						className='flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative mt-4'
						id='nav'>
						<div className='flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0'>
							{Object.entries(navItems).map(
								([path, { name }]) => {
									const isActive = path === pathname;
									return (
										<Link
											key={path}
											href={path}
											className={clsx(
												'transition-all hover:text-zinc-900 dark:hover:text-zinc-300 flex align-middle',
												{
													'text-gray-500': !isActive,
													'font-bold': isActive,
												}
											)}>
											<span className='relative py-[5px] px-[10px]'>
												{name}
												{path === pathname ? (
													<motion.div
														className='absolute inset-0 bg-zinc-400 dark:bg-zinc-700 z-[-1]'
														layoutId='sidebar'
														transition={{
															type: 'spring',
															stiffness: 350,
															damping: 30,
														}}
													/>
												) : null}
											</span>
										</Link>
									);
								}
							)}
						</div>
					</nav>
				</LayoutGroup>
			</div>
		</aside>
	);
}
