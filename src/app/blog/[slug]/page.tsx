import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactModalProvider } from "@/components/ContactModalContext";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      url: `${SITE_URL}/blog/${post.slug}`,
      title: `${post.title} | Sham Studio`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-white text-zinc-900">
        <Header />
        <main>
          <section className="relative z-0 bg-white pt-32">
            <div className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-20">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Zurück zum Blog
              </Link>

              <p className="mt-8 text-xs font-medium uppercase tracking-widest text-zinc-500">
                {dateFormatter.format(new Date(post.date))}
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl leading-relaxed text-zinc-600">
                {post.description}
              </p>

              <article
                className="mt-12 space-y-6 text-zinc-700
                [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-zinc-900
                [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-zinc-900
                [&_p]:leading-relaxed
                [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
                [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6
                [&_a]:font-medium [&_a]:text-cyan-700 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-cyan-800"
              >
                {post.content}
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
