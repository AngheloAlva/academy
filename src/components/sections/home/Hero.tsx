"use client"

import { useTranslations } from "next-intl"
import { motion } from "motion/react"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "@/components/ui/button"

export default function HomeHero(): React.ReactElement {
	const t = useTranslations("Pages.Home")

	return (
		<AuroraBackground className="h-[90dvh]">
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
				<section className="flex h-full w-full flex-col items-center justify-center text-center dark:text-white">
					<h1 className="text-4xl font-bold">{t("hero.title")}</h1>
					<p className="mt-4 text-xs font-light dark:text-white/70">{t("hero.description")}</p>

					<div className="mt-6 flex flex-wrap items-center justify-center gap-4">
						<Button
							size="lg"
							className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-a-secondary p-2 font-medium transition-all duration-100 [box-shadow:3px_3px_#004237] hover:bg-a-secondary hover:brightness-90 active:translate-x-[1px] active:translate-y-[1px] active:[box-shadow:0px_0px_#004237] dark:text-white dark:hover:bg-a-secondary dark:hover:brightness-90"
						>
							{t("hero.cta")}
						</Button>

						<Button
							size="lg"
							className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-neutral-800 p-2 font-medium transition-all duration-100 [box-shadow:3px_3px_rgb(82_82_82)] active:translate-x-[1px] active:translate-y-[1px] active:[box-shadow:0px_0px_rgb(82_82_82)] dark:[box-shadow:3px_3px_#afafaf] dark:active:[box-shadow:0px_0px_#afafaf]"
						>
							{t("hero.cta2")}
						</Button>
					</div>
				</section>
			</motion.div>
		</AuroraBackground>
	)
}
