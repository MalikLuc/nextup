import './globals.css'
import type { Metadata } from 'next'
import Navigation from '../components/Navigation'

export const metadata: Metadata = {
    title: 'My Personal Website',
    description: 'Welcome to my personal website',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Navigation />
        <main>{children}</main>
        </body>
        </html>
    )
}