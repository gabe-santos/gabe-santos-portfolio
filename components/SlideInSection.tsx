import { motion } from 'framer-motion';

export default function SlideInSection({ children }) {
	return (
		<motion.section
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.1, duration: 0.4 }}>
			{children}
		</motion.section>
	);
}
