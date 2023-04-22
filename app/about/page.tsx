'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Page from '../../components/Page';

const AboutPage = () => {
	return (
		<Page title='About Me'>
			<p>
				I love developing software that not only improves people&apos;s
				lives, but also brings them joy when using it.
			</p>
			<div className='my-5 space-x-4'>
				<Link
					className='border border-zinc-500 py-1 px-2 text-center inline-block hover:bg-zinc-500'
					href='mailto:gabe.santos.codes@gmail.com'>
					Email
				</Link>
				<Link
					className='border border-zinc-500 py-1 px-2 text-center inline-block hover:bg-zinc-500'
					href='https://www.linkedin.com/in/gabesantoscodes/'
					target='_blank'>
					LinkedIn
				</Link>
				<motion.a
					className='border border-zinc-500 py-1 px-2 text-center inline-block hover:bg-zinc-500'
					href='https://www.instagram.com/gabe.santos/'
					target='_blank'>
					Instagram
				</motion.a>
			</div>
		</Page>
	);
};

export default AboutPage;
