import me from '../public/avatar.jpg';

export const name = 'Gabe Santos';
export const avatar = me;
export const about = () => {
	return (
		<>
			Hi, I&apos;m Gabe. I&apos;m a{' '}
			<span className='font-mono font-bold'>
				Frontend Engineer from San Diego, CA
			</span>
			. I build interfaces that optimize both form and function.
		</>
	);
};

export const bio = () => {
	return <>Let&apos;s build something awesome.</>;
};
