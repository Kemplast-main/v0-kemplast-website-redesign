"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { toast } from "sonner"

export function InquiryForm({ defaultSubject = "Product Inquiry" }: { defaultSubject?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      product: [],
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to send")

      toast.success("Inquiry sent successfully!", {
        description: "Our team will get back to you shortly.",
      })
      form.reset()
    } catch {
      toast.error("Failed to send inquiry. Please try again or email us at sales@kemplast.in")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-background/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <Input id="name" name="name" required placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" name="email" type="email" required placeholder="john@example.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
          <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">Company</label>
          <Input id="company" name="company" placeholder="Example Corp" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">Brand/Product Interest</label>
        <Input id="subject" name="subject" defaultValue={defaultSubject} required />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <Textarea id="message" name="message" required placeholder="Tell us about your requirements..." className="min-h-[120px]" />
      </div>
      <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
        <span className="relative z-10 flex items-center justify-center">
          {isSubmitting ? "Sending..." : "Request Quote"}
          <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </span>
        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity" />
      </Button>
    </form>
  )
}
