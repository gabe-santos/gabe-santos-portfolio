import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
	title: {
		default: 'Gabe Santos',
		template: '%s | Gabe Santos',
	},
	description: 'Frontend Engineer',
	openGraph: {
		title: 'Gabe Santos',
		description: 'Frontend Engineer',
		url: 'https://gabesantos.dev',
		siteName: 'Gabe Santos',
		images: [
			{
				url: 'https://gabesantos.dev/favicon.ico',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className='text-black bg-white dark:text-white dark:bg-[#111010]'>
			<body className='antialiased max-w-2xl mx-auto mt-8 md:mt-20 lg:mt-32'>
				<div className='mx-4 mb-4'>
					<div className='md:flex md:flex-row md:justify-between'>
						<Sidebar />
						<main className='flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 mx-auto'>
							{children}
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
