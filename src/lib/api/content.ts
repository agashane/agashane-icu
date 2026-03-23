import { getCollection, getEntry } from "astro:content";

// Get contents
export const getContent = async (locale: string = "en") => {
  const posts = await getCollection("blog");
  return posts.filter((post) => !post.data.isDraft && post.id.startsWith(locale));
};

// Get tags
// export const getTags = async () => {
//   const tags = await getCollection("tags");
//   return tags;
// };

export const getPost = async (slug: string) => {
  const post = await getEntry("blog", slug);
  return post;
};
