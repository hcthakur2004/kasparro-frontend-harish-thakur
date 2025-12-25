import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "@/components/error-boundary";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kasparro - AI-Native SEO & Brand Intelligence Platform",
    description: "AI-first SEO platform for the era of ChatGPT, Gemini, and Perplexity. Track your brand visibility, optimize for AI search, and dominate the AI-first search landscape.",
    keywords: ["AI SEO", "Brand Intelligence", "AI Search Optimization", "ChatGPT SEO", "Perplexity SEO"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </ThemeProvider>
            </body>
        </html>
    );
}
