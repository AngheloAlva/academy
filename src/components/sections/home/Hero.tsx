"use client"

import { useTranslations } from "next-intl"
import { motion } from "motion/react"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "@/components/ui/button"

export default function HomeHero(): React.ReactElement {
	const t = useTranslations("Pages.Home")

	return (
		<AuroraBackground className="h-[95dvh]">
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="relative flex flex-col items-center justify-center gap-4 px-4"
			>
				<section className="mx-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center text-center dark:text-white">
					<span className="text-xs dark:text-white/70 md:text-sm">{t("hero.topHeader")}</span>

					<h1 className="mt-1 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
						{t.rich("hero.title", {
							feature: (children) => (
								<span className="bg-gradient-to-r from-a-secondary to-a-feature bg-clip-text text-transparent">
									{children}
								</span>
							),
						})}
					</h1>
					<p className="mt-4 max-w-prose text-pretty text-sm font-light dark:text-white/70 md:mt-6 lg:text-base">
						{t("hero.description")}
					</p>

					<div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-10">
						<Button
							size="lg"
							className="group relative inline-flex h-fit items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-a-secondary p-2 font-medium tracking-wide transition-all duration-100 [box-shadow:3px_3px_#004237] hover:bg-a-secondary hover:brightness-90 active:translate-x-[1px] active:translate-y-[1px] active:[box-shadow:0px_0px_#004237] dark:text-white dark:hover:bg-a-secondary dark:hover:brightness-90 lg:px-4 lg:py-2.5 lg:text-base"
						>
							{t("hero.cta")}
						</Button>

						<Button
							size="lg"
							className="group relative inline-flex h-fit items-center justify-center overflow-hidden rounded-md border border-neutral-800 p-2 font-medium tracking-wide transition-all duration-100 [box-shadow:3px_3px_rgb(82_82_82)] active:translate-x-[1px] active:translate-y-[1px] active:[box-shadow:0px_0px_rgb(82_82_82)] dark:[box-shadow:3px_3px_#afafaf] dark:active:[box-shadow:0px_0px_#afafaf] lg:px-4 lg:py-2.5 lg:text-base"
						>
							{t("hero.cta2")}
						</Button>
					</div>
				</section>
			</motion.div>
		</AuroraBackground>
	)
}
