import md from "markdown-it";
import { getAllPosts, getPostsBySlug } from "../../lib/api";

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPostsBySlug(slug);
  return {
    props: post,
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <section className="px-6">
      <div className="max-w-4xl mx-auto py-12">
        <div className="prose mx-auto">
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </div>
    </section>
  );
}
