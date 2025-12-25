"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Cpu, BarChart3, FileOutput, ArrowRight, Zap } from "lucide-react"

export default function ArchitecturePage() {
    return (
        <div className="p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">System Architecture</h1>
                <p className="text-muted-foreground mt-2">
                    Understanding how Kasparro processes and analyzes your AI-SEO data
                </p>
            </div>

            {/* Architecture Diagram */}
            <div className="relative">
                <div className="grid md:grid-cols-4 gap-6">
                    {/* Input Assembler */}
                    <Card className="relative">
                        <div className="absolute -top-3 left-4 px-2 py-1 bg-purple-600 text-white text-xs font-semibold rounded">
                            Stage 1
                        </div>
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-3">
                                <Database className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle>Input Assembler</CardTitle>
                            <CardDescription>Data collection layer</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Website crawling</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Content extraction</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Metadata parsing</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>External signals</span>
                            </div>
                        </CardContent>
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="h-6 w-6 text-primary" />
                        </div>
                    </Card>

                    {/* Context Pack */}
                    <Card className="relative">
                        <div className="absolute -top-3 left-4 px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
                            Stage 2
                        </div>
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-3">
                                <Cpu className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle>Context Pack</CardTitle>
                            <CardDescription>Data processing layer</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>NLP analysis</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Entity extraction</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Semantic mapping</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Context enrichment</span>
                            </div>
                        </CardContent>
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="h-6 w-6 text-primary" />
                        </div>
                    </Card>

                    {/* Audit Modules */}
                    <Card className="relative">
                        <div className="absolute -top-3 left-4 px-2 py-1 bg-cyan-600 text-white text-xs font-semibold rounded">
                            Stage 3
                        </div>
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center mb-3">
                                <BarChart3 className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle>Audit Modules</CardTitle>
                            <CardDescription>Analysis layer</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>7 specialized modules</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Parallel processing</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Score calculation</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Issue detection</span>
                            </div>
                        </CardContent>
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="h-6 w-6 text-primary" />
                        </div>
                    </Card>

                    {/* Output Surfaces */}
                    <Card className="relative">
                        <div className="absolute -top-3 left-4 px-2 py-1 bg-teal-600 text-white text-xs font-semibold rounded">
                            Stage 4
                        </div>
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-600 to-green-600 flex items-center justify-center mb-3">
                                <FileOutput className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle>Output Surfaces</CardTitle>
                            <CardDescription>Presentation layer</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Dashboard views</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Module reports</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>Recommendations</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>API endpoints</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Data Flow</CardTitle>
                        <CardDescription>How information moves through the system</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">1. Collection Phase</h4>
                            <p className="text-muted-foreground">
                                Input Assembler gathers data from your website, social media, backlinks, and AI platform responses.
                                All data is normalized and validated before processing.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">2. Processing Phase</h4>
                            <p className="text-muted-foreground">
                                Context Pack applies NLP, entity extraction, and semantic analysis to understand your content's
                                meaning and context within your industry.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">3. Analysis Phase</h4>
                            <p className="text-muted-foreground">
                                Seven specialized modules run in parallel, each analyzing a specific dimension of your AI-SEO
                                performance and generating scores, insights, and recommendations.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">4. Presentation Phase</h4>
                            <p className="text-muted-foreground">
                                Results are aggregated and presented through intuitive dashboards, detailed reports, and
                                actionable recommendation lists.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Module Architecture</CardTitle>
                        <CardDescription>How the 7 audit modules work</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Parallel Processing</h4>
                            <p className="text-muted-foreground">
                                All 7 modules run simultaneously on the processed data, ensuring fast audit completion
                                while maintaining comprehensive analysis.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Specialized Analysis</h4>
                            <p className="text-muted-foreground">
                                Each module focuses on a specific aspect: Brand Visibility tracks mentions, E-E-A-T measures
                                trust signals, Keyword Coverage analyzes presence, etc.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Scoring Algorithm</h4>
                            <p className="text-muted-foreground">
                                Modules use weighted scoring based on multiple factors, comparing your performance against
                                industry benchmarks and best practices.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Recommendation Engine</h4>
                            <p className="text-muted-foreground">
                                The final module synthesizes findings from all other modules to generate prioritized,
                                actionable recommendations with estimated impact.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Technology Stack */}
            <Card>
                <CardHeader>
                    <CardTitle>Technology Stack</CardTitle>
                    <CardDescription>Core technologies powering Kasparro</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold mb-3">Data Collection</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Distributed web crawlers</li>
                                <li>• API integrations (OpenAI, Google, etc.)</li>
                                <li>• Real-time monitoring systems</li>
                                <li>• Data validation pipelines</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">Processing & Analysis</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Natural Language Processing</li>
                                <li>• Machine Learning models</li>
                                <li>• Semantic analysis engines</li>
                                <li>• Statistical scoring algorithms</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">Frontend & API</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Next.js + TypeScript</li>
                                <li>• RESTful API endpoints</li>
                                <li>• Real-time data streaming</li>
                                <li>• Responsive dashboard UI</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
