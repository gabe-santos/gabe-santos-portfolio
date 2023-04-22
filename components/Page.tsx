import SlideInSection from './SlideInSection';

type PageProps = {
	title: string;
	children: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ title, children }) => {
	return (
		<SlideInSection>
			<h1 className='text-5xl font-mono'>{title}</h1>
			<div className='mt-6 max-w-[460px] text-zinc-800 dark:text-zinc-300 font-mono'>
				{children}
			</div>
		</SlideInSection>
	);
};

export default Page;
