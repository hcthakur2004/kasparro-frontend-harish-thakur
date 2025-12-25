"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Rocket, Heart } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero */}
                <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center space-y-6">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Building the Future of{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    AI-First SEO
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground md:text-xl">
                                We're on a mission to help brands thrive in the era of AI-generated answers
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <Card className="border-2 border-primary/20">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                                        <Target className="h-7 w-7 text-white" />
                                    </div>
                                    <CardTitle className="text-3xl">Our Mission</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-lg text-muted-foreground">
                                    <p>
                                        The way people search for information has fundamentally changed. Instead of clicking through
                                        search results, users now ask AI assistants like ChatGPT, Gemini, and Perplexity for direct answers.
                                    </p>
                                    <p>
                                        <strong className="text-foreground">This shift demands a new approach to SEO.</strong> Traditional
                                        optimization for search engine rankings is no longer enough. Brands need to optimize for being
                                        <em> cited, mentioned, and recommended</em> by AI models.
                                    </p>
                                    <p>
                                        Kasparro exists to bridge this gap. We provide the tools, insights, and strategies brands need
                                        to succeed in the AI-first search era.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Product Philosophy */}
                <section className="py-20 bg-muted/50">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Our Product Philosophy
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Principles that guide how we build Kasparro
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: Lightbulb,
                                    title: "AI-Native, Not Retrofitted",
                                    description: "We didn't adapt traditional SEO tools for AI. We built from the ground up for AI search platforms.",
                                    color: "from-yellow-600 to-orange-600"
                                },
                                {
                                    icon: Heart,
                                    title: "Clarity Over Complexity",
                                    description: "AI-SEO is complex, but our platform shouldn't be. We prioritize clear insights over overwhelming dashboards.",
                                    color: "from-pink-600 to-red-600"
                                },
                                {
                                    icon: Rocket,
                                    title: "Action-Oriented Insights",
                                    description: "Every metric leads to a recommendation. Every insight drives action. No vanity metrics.",
                                    color: "from-blue-600 to-cyan-600"
                                },
                                {
                                    icon: Target,
                                    title: "Precision Measurement",
                                    description: "We track what matters: brand mentions, citations, and presence in AI-generated answers.",
                                    color: "from-purple-600 to-pink-600"
                                }
                            ].map((principle, i) => (
                                <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${principle.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <principle.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <CardTitle className="text-xl">{principle.title}</CardTitle>
                                        <CardDescription className="text-base">{principle.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <Card className="bg-gradient-to-br from-purple-600 to-blue-600 border-0 text-white">
                                <CardHeader>
                                    <CardTitle className="text-3xl mb-4">Our Vision for AI-First Search</CardTitle>
                                    <div className="space-y-4 text-lg text-white/90">
                                        <p>
                                            We believe the future of search is conversational, contextual, and AI-powered. Within five years,
                                            the majority of information discovery will happen through AI assistants, not traditional search engines.
                                        </p>
                                        <p>
                                            In this future, <strong className="text-white">brand visibility isn't about ranking #1 on Google</strong>—it's
                                            about being the trusted source that AI models cite when answering questions in your domain.
                                        </p>
                                        <p>
                                            Kasparro is building the infrastructure to help brands navigate this transition. We're creating:
                                        </p>
                                        <ul className="space-y-2 ml-6">
                                            <li>• Real-time AI visibility tracking across all major platforms</li>
                                            <li>• Predictive analytics for AI search trends</li>
                                            <li>• Automated optimization recommendations</li>
                                            <li>• Industry benchmarks and competitive intelligence</li>
                                            <li>• Integration with content workflows and CMS platforms</li>
                                        </ul>
                                        <p className="pt-4">
                                            <strong className="text-white">We're not just adapting to the AI-first search era—we're helping define it.</strong>
                                        </p>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Founder Credibility */}
                <section className="py-20 bg-muted/50">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Built by Engineers Who Understand AI
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Kasparro was founded by a team of engineers and data scientists with deep expertise in
                                natural language processing, search algorithms, and AI model behavior. We've worked at
                                leading AI companies and understand how these systems work from the inside.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                This isn't marketing speculation—it's engineering precision applied to the future of search.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
