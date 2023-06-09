import fs from "fs";
import matter from "gray-matter";

export function getAllPosts() {
  const files = fs.readdirSync("./posts");
  const posts = files
    .map((fileName) => {
      const slug = fileName.replace(".md", "");
      const { frontmatter } = getPostsBySlug(slug);
      return {
        slug,
        ...frontmatter,
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  console.log(posts);

  return posts;
}

export function getPostsBySlug(slug) {
  const fileName = fs.readFileSync(`./posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    frontmatter,
    content,
  };
}

export function getAllWork() {
  const files = fs.readFileSync("./json/data.json", "utf-8");
  const jsonData = JSON.parse(files);
  return jsonData.work;
}
