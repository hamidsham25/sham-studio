import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import { ContactModalProvider } from "@/components/ContactModalContext";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Artikel zu Webdesign, Webentwicklung, SEO und Conversion von Sham Studio.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    url: `${SITE_URL}/blog`,
    title: "Blog & Insights | Sham Studio",
    description:
      "Praxisnahe Inhalte zu Website-Strategie, SEO und digitaler Sichtbarkeit.",
  },
};

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-white text-zinc-900">
        <Header />
        <main>
          <BlogHero />

          <section className="relative z-0 bg-white">
            <div className="mx-auto max-w-6xl px-6 pb-20 md:px-8 md:pb-28 lg:px-10">
              <p className="mb-14 max-w-xl text-lg text-zinc-600">
                Hier teilen wir Strategien und Praxiswissen rund um Webdesign,
                Technik, SEO und Conversion fuer Unternehmen, die online sichtbar
                wachsen wollen.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-xl border border-zinc-200/90 bg-zinc-50/40 p-6 transition-colors hover:border-zinc-300"
                  >
                    <article>
                      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                        {dateFormatter.format(new Date(post.date))}
                      </p>
                      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-cyan-700">
                        {post.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-zinc-600">
                        {post.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-cyan-700">
                        Artikel lesen
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
