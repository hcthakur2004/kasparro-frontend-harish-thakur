import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export function formatScore(score: number): string {
    return `${score.toFixed(1)}/100`
}

export function getScoreColor(score: number): string {
    if (score >= 80) return 'text-green-600 dark:text-green-400'
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400'
    if (score >= 40) return 'text-orange-600 dark:text-orange-400'
    return 'text-red-600 dark:text-red-400'
}

export function getScoreBadgeVariant(score: number): 'default' | 'secondary' | 'destructive' {
    if (score >= 70) return 'default'
    if (score >= 40) return 'secondary'
    return 'destructive'
}
