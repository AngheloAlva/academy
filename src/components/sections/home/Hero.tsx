import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export default function HomeHero(): React.ReactElement {
	const t = useTranslations("Pages.Home")

	return (
		<section className="flex h-[60dvh] w-full flex-col items-center justify-center text-center dark:text-white">
			<h1 className="text-3xl font-bold">{t("hero.title")}</h1>
			<p className="mt-4 text-sm font-light dark:text-white/70">{t("hero.description")}</p>

			<div className="mt-6 flex flex-wrap gap-4">
				<Button
					size="lg"
					className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-a-primary bg-a-secondary p-2 font-medium transition-all duration-100 [box-shadow:5px_5px_#004237] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_#004237] dark:text-white dark:hover:bg-a-secondary dark:hover:brightness-90"
				>
					{t("hero.cta")}
				</Button>

				<Button
					size="lg"
					className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-neutral-800 p-2 font-medium transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
				>
					{t("hero.cta2")}
				</Button>
			</div>
		</section>
	)
}
