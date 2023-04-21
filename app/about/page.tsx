'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
	return (
		<motion.section
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.2, duration: 0.5 }}>
			<h1 className='text-3xl font-sans'>About Me</h1>
			<p className='my-5'>
				This is my about page. Irure Lorem tempor voluptate ullamco
				cillum incididunt esse commodo ad. Aute laboris consequat est
				eiusmod sint est amet voluptate labore. Mollit tempor incididunt
				magna excepteur duis et non consectetur nulla ex sint aliquip.
				Proident mollit officia irure dolore veniam excepteur culpa
				consequat sint labore dolor.
			</p>
		</motion.section>
	);
}
