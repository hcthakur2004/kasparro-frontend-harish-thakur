import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-muted/50">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Kasparro
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            AI-native SEO & Brand Intelligence for the AI-first search era.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/platform" className="hover:text-foreground transition-colors">Platform</Link></li>
                            <li><Link href="/app/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                            <li><Link href="/app/audit" className="hover:text-foreground transition-colors">Audit Modules</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Support</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; 2024 Kasparro. Built for the AI-first search era.</p>
                </div>
            </div>
        </footer>
    )
}
