import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function ModuleLoadingSkeleton() {
    return (
        <div className="max-w-5xl space-y-8 animate-pulse">
            {/* Header Skeleton */}
            <div>
                <div className="h-10 bg-muted rounded w-1/3 mb-2"></div>
                <div className="h-6 bg-muted rounded w-2/3"></div>
            </div>

            {/* Score Card Skeleton */}
            <Card className="border-2">
                <CardHeader>
                    <div className="h-6 bg-muted rounded w-1/4"></div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-6">
                        <div className="h-20 w-20 bg-muted rounded"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-4 bg-muted rounded"></div>
                            <div className="h-4 bg-muted rounded w-3/4"></div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Insights Skeleton */}
            <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-1/4"></div>
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardHeader>
                            <div className="h-6 bg-muted rounded w-2/3"></div>
                        </CardHeader>
                        <CardContent>
                            <div className="h-4 bg-muted rounded"></div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
