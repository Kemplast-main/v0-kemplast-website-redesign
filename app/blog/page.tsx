import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, User, FolderOpen } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Industrial Equipment & Processes Blog",
  description:
    "Read the latest insights, guides, and news about industrial equipment, process instrumentation, and valve testing from Kemplast.",
  alternates: {
    canonical: "https://kemplast.in/blog",
  },
}

export default function BlogListingPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Kemplast Industry Insights</h1>
          <p className="text-xl text-muted-foreground">
            Expert knowledge, product guides, and industry trends on process instrumentation and industrial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    <FolderOpen className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="text-sm flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-primary flex items-center hover:underline"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
