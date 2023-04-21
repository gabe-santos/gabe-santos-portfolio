'use client';

import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';

export default function ProjectsPage() {
	return (
		<SlideInSection>
			<h1 className='text-3xl font-mono font-bold dark:text-zinc-300'>
				Projects
			</h1>
			<p className='my-5 '>projects I have worked on</p>
		</SlideInSection>
	);
}
