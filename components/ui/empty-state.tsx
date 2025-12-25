import { FileQuestion } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
    title: string
    description: string
    actionLabel?: string
    onAction?: () => void
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
    return (
        <Card className="border-dashed">
            <CardHeader className="text-center pb-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <FileQuestion className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            {actionLabel && onAction && (
                <CardContent className="text-center">
                    <Button onClick={onAction} variant="outline">
                        {actionLabel}
                    </Button>
                </CardContent>
            )}
        </Card>
    )
}
