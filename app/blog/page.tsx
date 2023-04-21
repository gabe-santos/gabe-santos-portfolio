'use client';

import { motion } from 'framer-motion';

export default function Blog() {
	return (
		<motion.section
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.2, duration: 0.5 }}>
			<h1 className='text-3xl font-sans'>Blog</h1>
			<p className='my-5 text-neutral-800 dark:text-neutral-200'>
				Coming soon 🤫
			</p>
		</motion.section>
	);
}
