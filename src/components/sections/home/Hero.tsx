"use client"

import { useTranslations } from "next-intl"
import { motion } from "motion/react"

import GridContainer from "@/components/shared/GridContainer"
import { Button } from "@/components/ui/button"

export default function HomeHero(): React.ReactElement {
	const t = useTranslations("Pages.Home")

	return (
		<GridContainer zigzagLinesLocation="left">
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="flex h-full w-full flex-col items-center justify-center text-center text-neutral-800 dark:text-neutral-200 sm:items-start sm:text-left md:justify-end"
			>
				<h1 className="mt-1 text-balance font-feature text-4xl font-bold sm:text-5xl lg:text-7xl xl:text-8xl">
					{t.rich("hero.title", {
						feature: (children) => (
							<div className="relative inline-block">
								<div
									aria-hidden={true}
									className="absolute -left-3 -right-3 h-12 rounded-[50%] border-2 border-neutral-800 opacity-70 dark:border-neutral-200 sm:h-14 lg:-left-5 lg:-right-5 lg:h-20 xl:h-28"
								></div>
								{children}
							</div>
						),
					})}
				</h1>

				<p className="mt-4 max-w-prose text-pretty text-sm font-light dark:text-white/70 md:mt-6 lg:text-base">
					{t("hero.description")}
				</p>

				<div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:justify-start md:mt-10">
					<Button
						size="lg"
						className="text-neutal-800 rounded-none border border-neutral-800 bg-transparent px-4 hover:bg-neutral-800 hover:text-white dark:border-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-800 lg:text-base xl:px-6"
					>
						{t("hero.cta")}
					</Button>

					<Button
						size="lg"
						className="text-neutal-800 rounded-none border border-neutral-800 bg-transparent px-4 hover:bg-neutral-800 hover:text-white dark:border-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-800 lg:text-base xl:px-6"
					>
						{t("hero.cta2")}
					</Button>
				</div>
			</motion.div>
		</GridContainer>
	)
}
