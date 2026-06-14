import Link from "next/link";
import type { Metadata } from "next";

const posts = [
  { slug: "ai-driven-cloud-migration-guide", title: "AI-driven cloud migration: a practical guide", category: "Cloud" },
  { slug: "ransomware-2026-uk-businesses", title: "Ransomware in 2026: what UK businesses need to know", category: "Security" },
  { slug: "dynamics-365-vs-custom-erp", title: "Dynamics 365 vs custom ERP: which is right for you?", category: "ERP" },
  { slug: "building-data-strategy-ai", title: "Building a data strategy with AI at the core", category: "Data" },
  { slug: "cost-of-poor-it-infrastructure", title: "The cost of poor IT infrastructure", category: "Managed IT" },
  { slug: "reduced-incident-response-by-60-percent", title: "How we reduced incident response time by 60%", category: "Case Study" },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] mb-4">404</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 leading-tight">Post not found.</h1>
          <Link href="/blog" className="text-brand underline underline-offset-2 text-sm">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="pt-36 pb-16 md:pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/blog" className="text-xs text-black/55 hover:text-brand transition-all duration-200">&larr; Back to blog</Link>
            <span className="text-black/20">·</span>
            <span className="text-xs text-brand font-semibold uppercase tracking-widest">{post.category}</span>
          </div>
          <h1 className="text-[1.5rem] sm:text-4xl lg:text-5xl font-bold text-black leading-[1.1] mb-6">
            {post.title}
          </h1>
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-black/65 text-sm leading-relaxed mb-4">
              This article is coming soon. Check back later for the full post.
            </p>
            <div className="inline-block text-xs text-black/45 border border-black/10 rounded-full px-4 py-1.5">
              Post not yet published
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
