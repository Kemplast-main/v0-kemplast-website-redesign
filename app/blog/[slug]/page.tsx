import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, User, FolderOpen } from "lucide-react"
import { blogPosts, getPostBySlug } from "@/lib/blog-data"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Kemplast Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://kemplast.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://kemplast.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "Kemplast Process Solutions",
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqSchema.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      "@id": "https://kemplast.in/#organization",
      name: "Kemplast Process Solutions",
      logo: { "@type": "ImageObject", url: "https://kemplast.in/images/kemplast-logo-updated.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://kemplast.in/blog/${post.slug}` },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://kemplast.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://kemplast.in/blog/${post.slug}` },
    ],
  }

  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <Link 
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <article className="glass rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          
          <header className="mb-10 text-center space-y-4">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </header>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <hr className="my-10 border-white/10" />
          
          <div className="bg-muted/30 rounded-2xl p-6 border border-white/5">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {post.faqSchema.map((faq, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-start gap-2">
                    <span className="text-primary font-bold">Q:</span>
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground pl-6">
                    <span className="text-primary/70 font-bold mr-2">A:</span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
