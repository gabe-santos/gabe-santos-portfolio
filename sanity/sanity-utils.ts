import { createClient, groq } from 'next-sanity';

export async function getProjects() {
  const client = createClient({
    projectId: 'lo6he41g',
    dataset: 'production',
    apiVersion: '2024-03-02',
  });

  return client.fetch(groq`*[_type == "project"]{
		_id,
		_createdAt,
		name,
		"slug": slug.current,
		"gallery": gallery[].asset->url,
		content
	}`);
}

export async function getProject(slug: string) {
  const client = createClient({
    projectId: 'lo6he41g',
    dataset: 'production',
    apiVersion: '2024-03-02',
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == "${slug}"][0]{
			_id,
			_createdAt,
			name,
			"slug": slug.current,
			"gallery": gallery[].asset->url,
			content
	}`,
  );
}
