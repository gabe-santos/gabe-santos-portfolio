'use client';

import Link from 'next/link';
import Image from 'next/image';
import SlideInSection from '../components/SlideInSection';
// import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
// import {
// 	ArrowIcon,
// 	GitHubIcon,
// 	TwitterIcon,
// 	ViewsIcon,
// } from 'components/icons';
import { name, avatar, about, bio } from '../lib/info';

export const revalidate = 60;
import { motion } from 'framer-motion';

export default async function HomePage() {
	// 	let starCount, views, tweetCount;

	// 	try {
	// 		[starCount, views, tweetCount] = await Promise.all([
	// 			getStarCount(),
	// 			getBlogViews(),
	// 			getTweetCount(),
	// 		]);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}

	return (
		<SlideInSection>
			<h1 className='text-5xl font-mono font-bold'>{name}</h1>
			<p className='my-5 max-w-[460px] text-zinc-800 dark:text-zinc-300 font-mono'>
				{about()}
			</p>

			<Image
				alt={name}
				className='rounded-full grayscale'
				src={avatar}
				placeholder='blur'
				width={100}
				priority
			/>

			<p className='my-5 max-w-[600px] text-zinc-800 dark:text-zinc-300'>
				{bio()}
			</p>
		</SlideInSection>
	);
}
