import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical advice, industry analysis, and behind-the-scenes stories from the Innowise Solutions engineering team.",
};

const posts = [
  { title: "AI-driven cloud migration: a practical guide", date: "Coming soon", category: "Cloud" },
  { title: "Ransomware in 2026: what UK businesses need to know", date: "Coming soon", category: "Security" },
  { title: "Dynamics 365 vs custom ERP: which is right for you?", date: "Coming soon", category: "ERP" },
  { title: "Building a data strategy with AI at the core", date: "Coming soon", category: "Data" },
  { title: "The cost of poor IT infrastructure", date: "Coming soon", category: "Managed IT" },
  { title: "How we reduced incident response time by 60%", date: "Coming soon", category: "Case Study" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-36 pb-16 md:pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] mb-6">Blog</p>
          <h1 className="text-[1.5rem] sm:text-5xl lg:text-7xl font-bold text-black max-w-3xl leading-[0.9] sm:leading-[0.85] mb-4 md:mb-6">
            Insights from the team.
          </h1>
          <p className="text-sm md:text-base text-black/65 max-w-xl mb-8 leading-relaxed">
            Practical advice, industry analysis, and behind-the-scenes stories from our engineering team.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.title}
                className="bg-gray-100 border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-brand font-semibold uppercase tracking-widest">{post.category}</span>
                  <span className="text-black/20">·</span>
                  <span className="text-xs text-black/45">{post.date}</span>
                </div>
                <h3 className="text-black font-semibold text-base mb-3 leading-snug">{post.title}</h3>
                <div className="inline-block text-xs text-black/45 border border-black/10 rounded-full px-3 py-1">
                  Post coming soon
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
