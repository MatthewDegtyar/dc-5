import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import { Page } from "../types/Page";

const currentDate = new Date();
currentDate.setDate(currentDate.getDate()); // Set the date to yesterday
const apiVersion = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
//console.log(apiVersion)

const client = createClient({
  projectId: 'pazbl27w',
  dataset: 'production',  
  apiVersion: apiVersion,
});

const projectFields = `
  _id,
  _createdAt,
  name,
  author,
  tagline,
  author_link,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  closing
`;

const pageFields = `
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  content
`;

export async function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project"]{${projectFields}} | order(_createdAt desc)`);
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(groq`*[_type == "project" && slug.current == $slug][0]{${projectFields}}`, { slug });
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(groq`*[_type == "page"]{${pageFields}}`);
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(groq`*[_type == "page" && slug.current == $slug][0]{${pageFields}}`, { slug });
}

{/** force no cache for testing
export async function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project"]{${projectFields}}`, { 'cache-control': 'no-store' });
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(groq`*[_type == "project" && slug.current == $slug][0]{${projectFields}}`, { slug, 'cache-control': 'no-store' });
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(groq`*[_type == "page"]{${pageFields}}`, { 'cache-control': 'no-store' });
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(groq`*[_type == "page" && slug.current == $slug][0]{${pageFields}}`, { slug, 'cache-control': 'no-store' });
}


*/}