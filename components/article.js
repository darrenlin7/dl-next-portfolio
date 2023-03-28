import Link from "next/link";

export default function Article({ className = "rounded-lg", post }) {
  return (
    <article className={`bg-white p-4 ${className}`}>
      <Link href={`blog/${post.slug}`}>
        <h3 className="text-2xl mb-2 font-medium hover:text-red-400 cursor-pointer">
          {post.title}
        </h3>
      </Link>
      <span className="text-gray-600 mb-4 block">
        <date>{post.date}</date> | {post.tags.map((tag) => tag).join(", ")}
      </span>
      <p className="">{post.description}</p>
    </article>
  );
}
