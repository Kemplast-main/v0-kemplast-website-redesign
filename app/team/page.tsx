"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, User, CheckCircle2, ArrowRight } from "lucide-react"
import { JoinTeamForm } from "@/components/join-team-form"

const teamMembers = [
  {
    id: 1,
    position: "Founder",
    name: "Vikram",
    phone: "-",
    email: "-",
  },
  {
    id: 2,
    position: "M.D",
    name: "Guru. P",
    phone: "7674012423",
    email: "Sales@kemplast.in",
  },
  {
    id: 3,
    position: "Director",
    name: "Badri",
    phone: "9849424374",
    email: "kemplast_asbestos@yahoo.co.in",
  },
  {
    id: 4,
    position: "Manager",
    name: "Chaitanya Teja",
    phone: "9121003525",
    email: "chaitanya@kemplast.in",
  },
  {
    id: 5,
    position: "Sr. Sales Engineer",
    name: "Rangesh Kumar",
    phone: "7411754411",
    email: "blr@kemplast.in",
  },
  {
    id: 6,
    position: "Sr. Sales Engineer",
    name: "Arun Kumar",
    phone: "9121003532",
    email: "Arun@kemplast.in",
  },
  {
    id: 7,
    position: "Sr. Sales Engineer",
    name: "Lavanya",
    phone: "7674912103",
    email: "Hyd@kemplast.in",
  },
  {
    id: 8,
    position: "Sales Engineer",
    name: "Prajwal Deshpande",
    phone: "9121021325",
    email: "prajwal@kemplast.in",
  },
  {
    id: 9,
    position: "Associate Engineer",
    name: "Preetha",
    phone: "8977754031",
    email: "blr@kemplast.in",
  },
  {
    id: 10,
    position: "Sales Engineer",
    name: "Raghavendra. H",
    phone: "8977754032",
    email: "ops@kemplast.in",
  },
  {
    id: 11,
    position: "Service Engineer",
    name: "Vijay Vemula",
    phone: "7674912100",
    email: "Vijay@kemplast.in",
  },
  {
    id: 12,
    position: "Operations",
    name: "Mahesh",
    phone: "897754030",
    email: "ops@kemplast.in",
  },
  {
    id: 13,
    position: "Sales Associate Engineer",
    name: "Sandeep",
    phone: "8977754033",
    email: "ops@kemplast.in",
  },
  {
    id: 14,
    position: "-",
    name: "Raghu",
    phone: "8977754032",
    email: "support@kemplast.in",
  },
  {
    id: 15,
    position: "-",
    name: "Keerthi",
    phone: "8977644036",
    email: "support@kemplast.in",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xl font-bold tracking-widest uppercase shadow-[0_0_15px_-5px_hsl(var(--primary))] backdrop-blur-sm mb-4">
              OUR PEOPLE
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              The dedicated professionals behind Kemplast&apos;s success, committed to delivering excellence in every
              project.
            </p>
            <div className="flex justify-center">
              <Link
                href="#join-team"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full shadow-lg transition-transform hover:scale-105"
              >
                Want to join our team? <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Desktop Table View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl mb-24"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">ID</th>
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">Position</th>
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">Name</th>
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">Phone No</th>
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <motion.tr
                      key={member.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="border-b border-border/50 hover:bg-muted/50 transition-colors group"
                    >
                      <td className="p-6 text-muted-foreground font-mono">{member.id}</td>
                      <td className="p-6 font-medium text-foreground">{member.position}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <User className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-foreground">{member.name}</span>
                        </div>
                      </td>
                      <td className="p-6 text-muted-foreground">
                        {member.phone !== "-" ? (
                          <a
                            href={`tel:${member.phone}`}
                            className="flex items-center gap-2 hover:text-primary transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            {member.phone}
                          </a>
                        ) : (
                          <span className="opacity-50">-</span>
                        )}
                      </td>
                      <td className="p-6 text-muted-foreground">
                        {member.email !== "-" ? (
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-2 hover:text-primary transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            {member.email}
                          </a>
                        ) : (
                          <span className="opacity-50">-</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile Card View */}
          <div className="md:hidden grid gap-6 mb-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-card border border-border rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium text-sm">{member.position}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                    #{member.id}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  {member.phone !== "-" ? (
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground py-3 rounded-xl transition-colors font-medium text-sm"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      Call
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 bg-secondary/50 text-muted-foreground py-3 rounded-xl font-medium text-sm cursor-not-allowed opacity-70">
                      <Phone className="w-4 h-4" />
                      N/A
                    </div>
                  )}

                  {member.email !== "-" ? (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground py-3 rounded-xl transition-colors font-medium text-sm"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      Email
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 bg-secondary/50 text-muted-foreground py-3 rounded-xl font-medium text-sm cursor-not-allowed opacity-70">
                      <Mail className="w-4 h-4" />
                      N/A
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Team Section with Form */}
          <motion.div
            id="join-team"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 scroll-mt-24"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
                <div className="text-left space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Growing Team</h2>
                    <p className="text-muted-foreground text-lg">
                      We&apos;re always looking for talented individuals who share our passion for excellence and innovation.
                      If you want to be part of a dynamic team at Kemplast, apply now!
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Why Work With Us?</h3>
                    <ul className="space-y-4">
                      {[
                        "Opportunity to work on cutting-edge industrial solutions",
                        "Collaborative and inclusive work environment",
                        "Continuous learning and professional growth",
                        "Competitive compensation and benefits"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 min-w-[24px] min-h-[24px] rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-background/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-border/50 shadow-lg">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Application Form</h3>
                  <JoinTeamForm />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
