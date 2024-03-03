import { Suspense } from 'react';
import { getProject } from '../../../sanity/sanity-utils';

export default async function ProjectPage({ params: { slug } }) {
  const project = await getProject(slug);

  console.log(project);
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <h1>{project.name}</h1>
      </Suspense>
    </div>
  );
}
