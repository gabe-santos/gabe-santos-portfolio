import me from '../public/avatar.jpg';

export const name = 'Gabe Santos';
export const avatar = me;
export const about = () => {
	return (
		<>
			Hi, I'm Gabe. I'm a Frontend Engineer from San Diego, CA. I build
			interfaces that optimize both form and function.
		</>
	);
};

export const bio = () => {
	return <>Let's build something awesome.</>;
};
