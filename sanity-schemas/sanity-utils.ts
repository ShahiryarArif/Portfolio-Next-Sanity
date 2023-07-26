// Contains all the functions for sanity

import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

//Instead for declearing type everywhere when variable is created we can define the return type
export async function getProjects(): Promise<Project[]> {
  const client = createClient(clientConfig);

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

export async function getProject(slug: string): Promise<Project> {
  const client = createClient(clientConfig);

  // This contain the GROQ query
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug[0]]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
    { slug }
  );
}
