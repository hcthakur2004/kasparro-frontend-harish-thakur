"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LayoutDashboard, FileSearch, Network, Sparkles } from "lucide-react"

const navigation = [
    { name: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
    { name: "Audit", href: "/app/audit", icon: FileSearch },
    { name: "Architecture", href: "/app/architecture", icon: Network },
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-full w-64 flex-col border-r bg-muted/40">
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Kasparro
                    </span>
                </Link>
            </div>

            <nav className="flex-1 space-y-1 p-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            <div className="border-t p-4 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Theme</span>
                    <ThemeToggle />
                </div>
                <div className="rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 p-4 text-white text-sm">
                    <p className="font-semibold mb-1">Need help?</p>
                    <p className="text-white/90 text-xs">Check our documentation or contact support</p>
                </div>
            </div>
        </div>
    )
}
