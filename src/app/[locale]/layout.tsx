import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"

import { ThemeProvider } from "@/components/providers/ThemeProvider"
import Navbar from "@/components/navbar/Navbar"

import "@fontsource-variable/recursive"

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
					{/* <div className="absolute -z-50 h-full min-h-screen w-screen overflow-hidden bg-a-background dark:bg-black">
						<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#3636362e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_34px] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]"></div>
						<div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#00423790,#fff)] dark:bg-[radial-gradient(circle_450px_at_50%_300px,#00423780,#000)]"></div>
					</div> */}

					<NextIntlClientProvider messages={messages}>
						<Navbar />
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
