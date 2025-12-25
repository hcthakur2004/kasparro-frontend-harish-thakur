"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Database, Cpu, BarChart3, FileOutput, Zap } from "lucide-react"

export default function PlatformPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero */}
                <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center space-y-6">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                The Kasparro{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    AI-SEO Platform
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground md:text-xl">
                                A comprehensive audit pipeline that analyzes your brand's presence across the entire AI search ecosystem
                            </p>
                        </div>
                    </div>
                </section>

                {/* Audit Pipeline Flow */}
                <section className="py-20">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                How the Audit Pipeline Works
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                From data collection to actionable insights in four intelligent stages
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto space-y-8">
                            {[
                                {
                                    icon: Database,
                                    title: "1. Input Assembler",
                                    description: "Collects and aggregates data from multiple sources",
                                    details: [
                                        "Your website content and metadata",
                                        "Social media presence and mentions",
                                        "Backlink profile and domain authority",
                                        "Existing search engine rankings",
                                        "Competitor landscape data"
                                    ],
                                    color: "from-purple-600 to-blue-600"
                                },
                                {
                                    icon: Cpu,
                                    title: "2. Context Pack",
                                    description: "Processes and structures data for AI analysis",
                                    details: [
                                        "Natural language processing of content",
                                        "Entity extraction and relationship mapping",
                                        "Semantic analysis of brand positioning",
                                        "Historical trend identification",
                                        "Industry context enrichment"
                                    ],
                                    color: "from-blue-600 to-cyan-600"
                                },
                                {
                                    icon: BarChart3,
                                    title: "3. Audit Modules",
                                    description: "7 specialized modules analyze different dimensions",
                                    details: [
                                        "Brand Visibility - Track AI platform mentions",
                                        "E-E-A-T Analysis - Measure trust signals",
                                        "Keyword Coverage - Non-branded presence",
                                        "Content Quality - AI-friendliness score",
                                        "Citation Analysis - Reference tracking",
                                        "Competitor Analysis - Market positioning",
                                        "Recommendation Engine - Optimization tips"
                                    ],
                                    color: "from-cyan-600 to-teal-600"
                                },
                                {
                                    icon: FileOutput,
                                    title: "4. Output Surfaces",
                                    description: "Delivers insights through intuitive interfaces",
                                    details: [
                                        "Executive dashboard with key metrics",
                                        "Detailed module-specific reports",
                                        "Prioritized recommendation lists",
                                        "Trend visualizations and forecasts",
                                        "Exportable data and API access"
                                    ],
                                    color: "from-teal-600 to-green-600"
                                }
                            ].map((stage, i) => (
                                <Card key={i} className="overflow-hidden">
                                    <div className={`h-2 bg-gradient-to-r ${stage.color}`} />
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center flex-shrink-0`}>
                                                <stage.icon className="h-7 w-7 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <CardTitle className="text-2xl mb-2">{stage.title}</CardTitle>
                                                <CardDescription className="text-base">{stage.description}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {stage.details.map((detail, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm">
                                                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What Makes Us Different */}
                <section className="py-20 bg-muted/50">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Beyond Traditional SEO Tools
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Kasparro is purpose-built for the AI-first search era
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-red-600">Traditional SEO Tools</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-muted-foreground">
                                    <p>✗ Focus on Google rankings only</p>
                                    <p>✗ Track clicks and traffic</p>
                                    <p>✗ Optimize for search results pages</p>
                                    <p>✗ Keyword density and backlinks</p>
                                    <p>✗ Reactive to algorithm changes</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-primary shadow-lg shadow-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-primary flex items-center gap-2">
                                        <Zap className="h-5 w-5" />
                                        Kasparro AI-SEO Platform
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm">
                                    <p>✓ Track ChatGPT, Gemini, Perplexity</p>
                                    <p>✓ Measure brand mentions in answers</p>
                                    <p>✓ Optimize for AI-generated responses</p>
                                    <p>✓ E-E-A-T and citation analysis</p>
                                    <p>✓ Proactive AI-first strategy</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Data Consumption */}
                <section className="py-20">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                What Data Kasparro Consumes
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Comprehensive data sources for complete AI visibility analysis
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Your Content", items: ["Website pages", "Blog articles", "Documentation", "Product descriptions", "Meta information"] },
                                { title: "External Signals", items: ["Backlink profile", "Social mentions", "Press coverage", "Industry citations", "Review platforms"] },
                                { title: "AI Platforms", items: ["ChatGPT responses", "Gemini answers", "Perplexity citations", "Claude outputs", "Search AI results"] }
                            ].map((category, i) => (
                                <Card key={i}>
                                    <CardHeader>
                                        <CardTitle>{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            {category.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2">
                                                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
