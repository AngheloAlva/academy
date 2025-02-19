import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"

import { ThemeProvider } from "@/components/providers/ThemeProvider"
import Navbar from "@/components/navbar/Navbar"

import "@fontsource/cormorant-garamond"
import "@fontsource-variable/work-sans"

import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
	title: "Academia",
	description: "Academia is a platform for students to learn and teachers to teach.",
}

export default async function RootLayout({
	params,
	children,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params

	if (!routing.locales.includes(locale as never)) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className="relative overflow-x-hidden font-general antialiased selection:bg-a-secondary selection:text-white">
				<ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
					<NextIntlClientProvider messages={messages}>
						<Navbar />
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
