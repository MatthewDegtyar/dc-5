import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  author: string;
  author_link: string;
  tagline: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
  closing: PortableTextBlock[];

}