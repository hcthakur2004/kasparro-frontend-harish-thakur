// Core Data Types

export interface Brand {
    id: string
    name: string
    domain: string
    industry: string
    lastAuditDate: string
}

export interface AuditModule {
    moduleId: string
    moduleName: string
    description: string
    score: number
    lastUpdated: string
    insights: Insight[]
    issues: Issue[]
    recommendations: Recommendation[]
}

export interface Insight {
    id: string
    title: string
    description: string
    impact: 'high' | 'medium' | 'low'
    category: string
}

export interface Issue {
    id: string
    title: string
    description: string
    severity: 'critical' | 'high' | 'medium' | 'low'
    affectedArea: string
}

export interface Recommendation {
    id: string
    title: string
    description: string
    priority: 'high' | 'medium' | 'low'
    estimatedImpact: string
    actionItems: string[]
}

export interface SnapshotMetric {
    label: string
    value: string | number
    change?: number
    trend?: 'up' | 'down' | 'stable'
    description: string
}

export interface DashboardSnapshot {
    aiVisibilityScore: number
    eeatScore: number
    keywordCoverage: number
    lastAuditDate: string
    totalIssues: number
    criticalIssues: number
}

// Module IDs
export type ModuleId =
    | 'brand-visibility'
    | 'eeat-analysis'
    | 'keyword-coverage'
    | 'content-quality'
    | 'citation-analysis'
    | 'competitor-analysis'
    | 'recommendation-engine'

export const MODULE_METADATA: Record<ModuleId, { name: string; description: string; icon: string }> = {
    'brand-visibility': {
        name: 'Brand Visibility',
        description: 'Track how often your brand appears in AI-generated responses',
        icon: 'Eye'
    },
    'eeat-analysis': {
        name: 'E-E-A-T Analysis',
        description: 'Evaluate Experience, Expertise, Authoritativeness, and Trust signals',
        icon: 'Shield'
    },
    'keyword-coverage': {
        name: 'Keyword Coverage',
        description: 'Analyze non-branded keyword presence in AI search results',
        icon: 'Search'
    },
    'content-quality': {
        name: 'Content Quality',
        description: 'Assess content depth, accuracy, and AI-friendliness',
        icon: 'FileText'
    },
    'citation-analysis': {
        name: 'Citation Analysis',
        description: 'Monitor how and where your content is cited by AI models',
        icon: 'Quote'
    },
    'competitor-analysis': {
        name: 'Competitor Analysis',
        description: 'Compare your AI visibility against competitors',
        icon: 'TrendingUp'
    },
    'recommendation-engine': {
        name: 'Recommendation Engine',
        description: 'Get AI-powered optimization recommendations',
        icon: 'Lightbulb'
    }
}
