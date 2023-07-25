// Contains all the functions for sanity

import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';

//Instead for declearing type everywhere when variable is created we can define the return type
export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: 'rw69g7b2',
    dataset: 'production',
    apiVersion: '2023-03-04',
  });

  // This contain the GROQ query
  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}
