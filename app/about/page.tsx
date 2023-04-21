'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { avatar } from '../../lib/info';
import SlideInSection from '../../components/SlideInSection';

export default function AboutPage() {
	return (
		<SlideInSection>
			<h1 className='text-3xl font-mono font-bold'>About Me</h1>

			<p className='my-5'>
				This is my about page. Irure Lorem tempor voluptate ullamco
				cillum incididunt esse commodo ad. Aute laboris consequat est
				eiusmod sint est amet voluptate labore. Mollit tempor incididunt
				magna excepteur duis et non consectetur nulla ex sint aliquip.
				Proident mollit officia irure dolore veniam excepteur culpa
				consequat sint labore dolor.
			</p>
		</SlideInSection>
	);
}
