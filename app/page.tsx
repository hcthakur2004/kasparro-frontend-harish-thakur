"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, Sparkles, Eye, Shield, Search, FileText, Quote, TrendingUp, Lightbulb, Zap, Target, BarChart3 } from "lucide-react"

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20" />
                    <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />

                    <div className="container relative">
                        <div className="mx-auto max-w-4xl text-center space-y-8">
                            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-white/50 dark:bg-black/50 backdrop-blur">
                                <Sparkles className="mr-2 h-4 w-4 text-purple-600" />
                                AI-Native SEO Platform
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                                Dominate{" "}
                                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                                    AI-First Search
                                </span>
                            </h1>

                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                                Track your brand visibility across ChatGPT, Gemini, and Perplexity.
                                Optimize for AI search engines. Win the AI-first search era.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/app/dashboard">
                                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8">
                                        Run Free AI-SEO Audit
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/platform">
                                    <Button size="lg" variant="outline" className="text-lg px-8">
                                        See How It Works
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-8">
                                <div className="flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-yellow-600" />
                                    <span>Real-time AI tracking</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Target className="h-4 w-4 text-green-600" />
                                    <span>7 audit modules</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="h-4 w-4 text-blue-600" />
                                    <span>Actionable insights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why AI-SEO Section */}
                <section className="py-20 bg-muted/50">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Why AI-SEO is Different
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Traditional SEO optimizes for search engines. AI-SEO optimizes for AI models that generate answers.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <Card className="border-2 hover:border-purple-600/50 transition-colors">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                                        <Search className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Traditional SEO</CardTitle>
                                    <CardDescription>
                                        Optimizes for ranking in search results. Users click and visit your site.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="border-2 border-purple-600/50 shadow-lg shadow-purple-600/20">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                                        <Sparkles className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>AI-First SEO</CardTitle>
                                    <CardDescription>
                                        Optimizes for being cited in AI-generated answers. Your brand becomes the answer.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="border-2 hover:border-purple-600/50 transition-colors">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                                        <TrendingUp className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>The Future</CardTitle>
                                    <CardDescription>
                                        60% of searches now happen in AI chat interfaces. Be visible where your audience is.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* 7 Modules Overview */}
                <section className="py-20">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                7 Powerful Audit Modules
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Comprehensive AI-SEO analysis across every dimension of your brand's AI visibility
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { icon: Eye, title: "Brand Visibility", desc: "Track brand mentions across AI platforms", color: "from-purple-600 to-blue-600" },
                                { icon: Shield, title: "E-E-A-T Analysis", desc: "Measure expertise and trust signals", color: "from-blue-600 to-cyan-600" },
                                { icon: Search, title: "Keyword Coverage", desc: "Non-branded keyword presence", color: "from-cyan-600 to-teal-600" },
                                { icon: FileText, title: "Content Quality", desc: "AI-friendliness assessment", color: "from-teal-600 to-green-600" },
                                { icon: Quote, title: "Citation Analysis", desc: "Monitor content citations", color: "from-green-600 to-yellow-600" },
                                { icon: TrendingUp, title: "Competitor Analysis", desc: "Compare against competitors", color: "from-yellow-600 to-orange-600" },
                                { icon: Lightbulb, title: "Recommendations", desc: "AI-powered optimization tips", color: "from-orange-600 to-red-600" },
                            ].map((module, i) => (
                                <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardHeader>
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <module.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <CardTitle className="text-lg">{module.title}</CardTitle>
                                        <CardDescription>{module.desc}</CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 bg-muted/50">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                How Kasparro Works
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Our AI-powered pipeline analyzes your brand's presence across the AI search ecosystem
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-4 gap-4">
                                {[
                                    { step: "1", title: "Input", desc: "Enter your brand domain" },
                                    { step: "2", title: "Scan", desc: "AI models analyze your presence" },
                                    { step: "3", title: "Audit", desc: "7 modules process data" },
                                    { step: "4", title: "Optimize", desc: "Get actionable recommendations" },
                                ].map((item, i) => (
                                    <div key={i} className="relative">
                                        <Card className="text-center">
                                            <CardHeader>
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                                                    {item.step}
                                                </div>
                                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                                <CardDescription>{item.desc}</CardDescription>
                                            </CardHeader>
                                        </Card>
                                        {i < 3 && (
                                            <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2">
                                                <ArrowRight className="h-6 w-6 text-muted-foreground" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container">
                        <Card className="bg-gradient-to-br from-purple-600 to-blue-600 border-0 text-white">
                            <CardHeader className="text-center space-y-4 py-12">
                                <CardTitle className="text-3xl sm:text-4xl">
                                    Ready to Win AI-First Search?
                                </CardTitle>
                                <CardDescription className="text-white/90 text-lg max-w-2xl mx-auto">
                                    Get your free AI-SEO audit and discover how your brand performs across ChatGPT, Gemini, and Perplexity
                                </CardDescription>
                                <div className="pt-4">
                                    <Link href="/app/dashboard">
                                        <Button size="lg" variant="secondary" className="text-lg px-8">
                                            Run Free Audit Now
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
