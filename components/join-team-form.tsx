"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { toast } from "sonner"

export function JoinTeamForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [resumeFile, setResumeFile] = useState<File | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            // Validate file size (5MB max)
            if (file.size > 3 * 1024 * 1024) {
                toast.error("File size must be under 3MB")
                e.target.value = ""
                return
            }
            setResumeFile(file)
        }
    }

    // Convert file to base64 for sending via API
    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                // Remove the data:application/pdf;base64, prefix
                const base64 = (reader.result as string).split(",")[1]
                resolve(base64)
            }
            reader.onerror = reject
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            let resumeBase64 = ""
            let resumeFileName = ""

            // Convert resume to base64 if attached
            if (resumeFile) {
                resumeBase64 = await fileToBase64(resumeFile)
                resumeFileName = resumeFile.name
            }

            // Send everything to the API in one request
            const response = await fetch("/api/send-application", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    resumeBase64,
                    resumeFileName,
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || "Failed to submit application")
            }

            toast.success("Application submitted successfully! Good luck!")

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                position: "",
                message: ""
            })
            setResumeFile(null)
            const fileInput = document.getElementById('resume') as HTMLInputElement
            if (fileInput) fileInput.value = ''

        } catch (error: any) {
            console.error("Error submitting application:", error)
            toast.error(error.message || "Failed to submit application.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="name"
                        required
                        placeholder="John Doe"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-medium text-foreground">
                        Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="position"
                        required
                        placeholder="e.g. Sales Engineer"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="resume" className="text-sm font-medium text-foreground">
                    Upload Resume (PDF only)
                </label>
                <div className="relative">
                    <Input
                        id="resume"
                        type="file"
                        accept=".pdf"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50 h-auto py-2"
                        onChange={handleFileChange}
                    />
                </div>
                <p className="text-xs text-muted-foreground">Max file size: 3MB</p>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Why do you want to join us?
                </label>
                <Textarea
                    id="message"
                    placeholder="Tell us about yourself and your experience..."
                    className="min-h-[100px] bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6" disabled={isSubmitting}>
                {isSubmitting ? (
                    "Submitting..."
                ) : (
                    <>
                        Submit Application <Send className="w-4 h-4 ml-2" />
                    </>
                )}
            </Button>
        </form>
    )
}
