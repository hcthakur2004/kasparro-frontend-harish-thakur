"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAppStore } from "@/lib/store"
import { Eye, Shield, Search, Clock, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react"
import brandsData from "@/data/brands.json"
import type { Brand } from "@/lib/types"

export default function DashboardPage() {
    const { selectedBrand, setSelectedBrand, brands, setBrands } = useAppStore()

    useEffect(() => {
        // Load brands on mount
        setBrands(brandsData as Brand[])
        if (brandsData.length > 0 && !selectedBrand) {
            setSelectedBrand(brandsData[0] as Brand)
        }
    }, [setBrands, setSelectedBrand, selectedBrand])

    if (!selectedBrand) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Loading...</p>
            </div>
        )
    }

    // Mock snapshot data
    const snapshot = {
        aiVisibilityScore: 72.5,
        eeatScore: 68.3,
        keywordCoverage: 58.7,
        lastAuditDate: selectedBrand.lastAuditDate,
        totalIssues: 12,
        criticalIssues: 3
    }

    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground mt-2">
                    AI-SEO performance overview for {selectedBrand.name}
                </p>
            </div>

            {/* Brand Selector */}
            <Card>
                <CardHeader>
                    <CardTitle>Selected Brand</CardTitle>
                    <CardDescription>Viewing data for</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between p-4 rounded-lg border bg-muted/50">
                        <div>
                            <p className="font-semibold text-lg">{selectedBrand.name}</p>
                            <p className="text-sm text-muted-foreground">{selectedBrand.domain}</p>
                            <Badge variant="secondary" className="mt-2">{selectedBrand.industry}</Badge>
                        </div>
                        <select
                            value={selectedBrand.id}
                            onChange={(e) => {
                                const brand = brands.find(b => b.id === e.target.value)
                                if (brand) setSelectedBrand(brand)
                            }}
                            className="px-4 py-2 rounded-md border bg-background"
                        >
                            {brands.map((brand) => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Snapshot Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* AI Visibility Score */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                AI Visibility Score
                            </CardTitle>
                            <Eye className="h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{snapshot.aiVisibilityScore}</div>
                        <div className="flex items-center gap-2 mt-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-600">+5.2% from last month</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Overall brand presence in AI responses
                        </p>
                    </CardContent>
                </Card>

                {/* E-E-A-T Score */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                E-E-A-T Score
                            </CardTitle>
                            <Shield className="h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{snapshot.eeatScore}</div>
                        <div className="flex items-center gap-2 mt-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-600">+2.1% from last month</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Expertise, authority, and trust signals
                        </p>
                    </CardContent>
                </Card>

                {/* Keyword Coverage */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Keyword Coverage
                            </CardTitle>
                            <Search className="h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{snapshot.keywordCoverage}%</div>
                        <div className="flex items-center gap-2 mt-2">
                            <TrendingDown className="h-4 w-4 text-orange-600" />
                            <span className="text-sm text-orange-600">-1.3% from last month</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Non-branded keyword presence
                        </p>
                    </CardContent>
                </Card>

                {/* Last Audit */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Last Audit
                            </CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-lg font-semibold">
                            {new Date(snapshot.lastAuditDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <AlertTriangle className="h-4 w-4 text-yellow-600" />
                            <span className="text-sm text-yellow-600">{snapshot.totalIssues} issues found</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            {snapshot.criticalIssues} critical issues require attention
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common tasks and next steps</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <a
                            href="/app/audit"
                            className="p-4 rounded-lg border hover:border-primary hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                            <h3 className="font-semibold mb-1">View Full Audit</h3>
                            <p className="text-sm text-muted-foreground">
                                Explore detailed insights across all 7 modules
                            </p>
                        </a>
                        <div className="p-4 rounded-lg border hover:border-primary hover:bg-muted/50 transition-colors cursor-pointer">
                            <h3 className="font-semibold mb-1">Address Critical Issues</h3>
                            <p className="text-sm text-muted-foreground">
                                Fix {snapshot.criticalIssues} high-priority problems
                            </p>
                        </div>
                        <div className="p-4 rounded-lg border hover:border-primary hover:bg-muted/50 transition-colors cursor-pointer">
                            <h3 className="font-semibold mb-1">Run New Audit</h3>
                            <p className="text-sm text-muted-foreground">
                                Refresh data and get latest insights
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
