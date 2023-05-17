'use client';

import Image from 'next/image';
import Link from 'next/link';
import Page from '../../components/Page';
import excursionistGif from '../../public/excursionist.gif';
import macrolatorGif from '../../public/macrolator.gif';
import portfolioGif from '../../public/porfolio.gif';

const Project = ({ link, name, gifPath }) => {
	return (
		<>
			<h2 className='text-2xl font-mono text-zinc-800 dark:text-zinc-300 my-5'>
				{name}
			</h2>
			<div className='relative group'>
				<Link
					className='absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-70 transition flex justify-center items-center'
					href={link}>
					<span className='text-white text-lg'>Github</span>
				</Link>
				<Image
					alt='macrolator gif'
					className=''
					src={gifPath}
					height={100}
					width={800}
					priority
				/>
			</div>
		</>
	);
};

const ProjectsPage = () => {
	return (
		<Page title='Projects'>
			<Project
				link='https://github.com/gabe-santos/excursionist'
				name='Excursionist'
				gifPath={excursionistGif}
			/>
			<Project
				link='https://github.com/gabe-santos/calorie-macro-calc'
				name='The Macrolator'
				gifPath={macrolatorGif}
			/>
			<Project
				link='https://github.com/gabe-santos/gabe-santos-portfolio'
				name='Porfolio Website'
				gifPath={portfolioGif}
			/>
		</Page>
	);
};

export default ProjectsPage;
