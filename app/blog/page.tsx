'use client';

import { motion } from 'framer-motion';

export default function Blog() {
	return (
		<motion.section
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.2, duration: 0.5 }}>
			<h1 className='font-bold text-3xl font-sans'>Blog</h1>
			<p>Coming soon 🤫</p>
		</motion.section>
	);
}
