"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ModuleLoadingSkeleton } from "@/components/ui/loading-skeleton"
import { cn, getScoreColor, getScoreBadgeVariant } from "@/lib/utils"
import { MODULE_METADATA, type ModuleId, type AuditModule } from "@/lib/types"
import { Eye, Shield, Search, FileText, Quote, TrendingUp, Lightbulb, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react"

const ICON_MAP = {
    Eye, Shield, Search, FileText, Quote, TrendingUp, Lightbulb
}

export default function AuditPage() {
    const [selectedModuleId, setSelectedModuleId] = useState<ModuleId>("brand-visibility")
    const [moduleData, setModuleData] = useState<AuditModule | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Load module data
        setLoading(true)
        import(`@/data/audit-data/${selectedModuleId}.json`)
            .then((data) => {
                setModuleData(data.default as AuditModule)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Failed to load module data:", err)
                setLoading(false)
            })
    }, [selectedModuleId])

    const modules: ModuleId[] = [
        "brand-visibility",
        "eeat-analysis",
        "keyword-coverage",
        "content-quality",
        "citation-analysis",
        "competitor-analysis",
        "recommendation-engine"
    ]

    return (
        <div className="flex h-full">
            {/* Left Sidebar - Module List */}
            <div className="w-80 border-r bg-muted/40 p-6 space-y-4 overflow-y-auto">
                <div>
                    <h2 className="text-lg font-semibold mb-1">Audit Modules</h2>
                    <p className="text-sm text-muted-foreground">Select a module to view details</p>
                </div>

                <div className="space-y-2">
                    {modules.map((moduleId) => {
                        const metadata = MODULE_METADATA[moduleId]
                        const Icon = ICON_MAP[metadata.icon as keyof typeof ICON_MAP]
                        const isSelected = selectedModuleId === moduleId

                        return (
                            <button
                                key={moduleId}
                                onClick={() => setSelectedModuleId(moduleId)}
                                className={cn(
                                    "w-full text-left p-4 rounded-lg border transition-all",
                                    isSelected
                                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                                        : "bg-background hover:bg-muted hover:border-primary/50"
                                )}
                            >
                                <div className="flex items-start gap-3">
                                    <Icon className={cn("h-5 w-5 mt-0.5", isSelected ? "text-primary-foreground" : "text-primary")} />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-sm">{metadata.name}</p>
                                        <p className={cn(
                                            "text-xs mt-1 line-clamp-2",
                                            isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                                        )}>
                                            {metadata.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Main Panel - Module Details */}
            <div className="flex-1 overflow-y-auto p-8">
                {loading ? (
                    <ModuleLoadingSkeleton />
                ) : moduleData ? (
                    <div className="max-w-5xl space-y-8">
                        {/* Module Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold">{moduleData.moduleName}</h1>
                                <Badge variant={getScoreBadgeVariant(moduleData.score)} className="text-lg px-3 py-1">
                                    {moduleData.score.toFixed(1)}/100
                                </Badge>
                            </div>
                            <p className="text-muted-foreground text-lg">{moduleData.description}</p>
                            <p className="text-sm text-muted-foreground mt-2">
                                Last updated: {new Date(moduleData.lastUpdated).toLocaleString()}
                            </p>
                        </div>

                        {/* Score Display */}
                        <Card className="border-2">
                            <CardHeader>
                                <CardTitle>Overall Score</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-6">
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
                                        className={cn("text-6xl font-bold", getScoreColor(moduleData.score))}
                                    >
                                        {moduleData.score.toFixed(1)}
                                    </motion.div>
                                    <div className="flex-1">
                                        <div className="h-4 bg-muted rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${moduleData.score}%` }}
                                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                                className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
                                            />
                                        </div>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-sm text-muted-foreground mt-2"
                                        >
                                            {moduleData.score >= 80 ? "Excellent performance" :
                                                moduleData.score >= 60 ? "Good performance with room for improvement" :
                                                    moduleData.score >= 40 ? "Needs attention" :
                                                        "Critical issues require immediate action"}
                                        </motion.p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Key Insights */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Key Insights</h2>
                            <div className="grid gap-4">
                                {moduleData.insights.map((insight) => (
                                    <Card key={insight.id} className="border-l-4 border-l-blue-600">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-start justify-between">
                                                <CardTitle className="text-lg">{insight.title}</CardTitle>
                                                <Badge variant={insight.impact === 'high' ? 'default' : 'secondary'}>
                                                    {insight.impact} impact
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{insight.description}</p>
                                            <p className="text-sm text-muted-foreground mt-2">Category: {insight.category}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Issues */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Issues Detected</h2>
                            <div className="grid gap-4">
                                {moduleData.issues.map((issue) => (
                                    <Card key={issue.id} className={cn(
                                        "border-l-4",
                                        issue.severity === 'critical' ? "border-l-red-600" :
                                            issue.severity === 'high' ? "border-l-orange-600" :
                                                issue.severity === 'medium' ? "border-l-yellow-600" :
                                                    "border-l-blue-600"
                                    )}>
                                        <CardHeader className="pb-3">
                                            <div className="flex items-start justify-between">
                                                <CardTitle className="text-lg flex items-center gap-2">
                                                    <AlertTriangle className={cn(
                                                        "h-5 w-5",
                                                        issue.severity === 'critical' ? "text-red-600" :
                                                            issue.severity === 'high' ? "text-orange-600" :
                                                                issue.severity === 'medium' ? "text-yellow-600" :
                                                                    "text-blue-600"
                                                    )} />
                                                    {issue.title}
                                                </CardTitle>
                                                <Badge variant={issue.severity === 'critical' || issue.severity === 'high' ? 'destructive' : 'secondary'}>
                                                    {issue.severity}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{issue.description}</p>
                                            <p className="text-sm text-muted-foreground mt-2">Affected area: {issue.affectedArea}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
                            <div className="grid gap-6">
                                {moduleData.recommendations.map((rec) => (
                                    <Card key={rec.id} className="border-2 border-primary/20">
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-2">
                                                <CardTitle className="text-xl">{rec.title}</CardTitle>
                                                <Badge variant={rec.priority === 'high' ? 'default' : 'secondary'}>
                                                    {rec.priority} priority
                                                </Badge>
                                            </div>
                                            <CardDescription className="text-base">{rec.description}</CardDescription>
                                            <div className="flex items-center gap-2 mt-3 text-sm">
                                                <TrendingUp className="h-4 w-4 text-green-600" />
                                                <span className="text-green-600 font-medium">Estimated impact: {rec.estimatedImpact}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                                Action Items:
                                            </h4>
                                            <ul className="space-y-2">
                                                {rec.actionItems.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-muted-foreground">Failed to load module data</p>
                    </div>
                )}
            </div>
        </div>
    )
}
