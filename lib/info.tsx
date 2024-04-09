import me from '../public/avatar.jpg';

export const name = 'Gabe Santos';
export const avatar = me;
export const about = () => {
  return (
    <>
      I&apos;m a{' '}
      <span className='font-mono font-bold'>
        Frontend Developer from San Diego, CA
      </span>
      . I build thoughtfully crafted websites and apps that are
      <span className='font-bold'> pretty, practical, and performant.</span>
    </>
  );
};

export const bio = () => {
  return <>Let&apos;s build something awesome.</>;
};
