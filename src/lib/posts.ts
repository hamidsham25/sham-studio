import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

export type Post = PostMeta & {
  content: React.ReactNode;
};

function ensurePostsDirectory() {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  return fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".mdx"));
}

function getSlugFromFilename(filename: string) {
  return filename.replace(/\.mdx$/, "");
}

function parsePostFile(filename: string): { slug: string; source: string } {
  const slug = getSlugFromFilename(filename);
  const fullPath = path.join(POSTS_DIR, filename);
  const source = fs.readFileSync(fullPath, "utf8");
  return { slug, source };
}

export function getAllPosts(): PostMeta[] {
  return ensurePostsDirectory()
    .map((filename) => {
      const { slug, source } = parsePostFile(filename);
      const { data } = matter(source);

      return {
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        description: String(data.description ?? ""),
        slug,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  const { content: compiledContent } = await compileMDX<PostFrontmatter>({
    source: content,
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    title: String(data.title ?? ""),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    slug,
    content: compiledContent,
  };
}
