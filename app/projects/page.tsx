'use client';

import Image from 'next/image';
import Link from 'next/link';
import Page from '../../components/Page';

const ProjectsPage = () => {
	return (
		<Page title='Projects'>
			<h2 className='text-2xl font-mono text-zinc-800 dark:text-zinc-300 my-5'>
				The Macrolator
			</h2>
			<div className='relative group'>
				<Link
					className='absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-70 transition flex justify-center items-center'
					href='https://github.com/gabe-santos/calorie-macro-calc'>
					<span className='text-white text-lg'>Github</span>
				</Link>
				<Image
					alt='macrolator gif'
					className=''
					src={require('../../public/macrolator.gif')}
					height={100}
					width={800}
					priority
				/>
			</div>
		</Page>
	);
};

export default ProjectsPage;
