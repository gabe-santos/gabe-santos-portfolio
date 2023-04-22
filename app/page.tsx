'use client';

import Image from 'next/image';
import Page from '../components/Page';
import SlideInSection from '../components/SlideInSection';
import { name, avatar, about, bio } from '../lib/info';

export const revalidate = 60;

export default async function HomePage() {
	return (
		<Page title={name}>
			{about()}
			<Image
				alt={name}
				className='rounded-full grayscale my-5'
				src={avatar}
				placeholder='blur'
				width={120}
				priority
			/>
			{bio()}
		</Page>
	);
}
