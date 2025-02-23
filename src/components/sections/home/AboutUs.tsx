import ZigzagLines from "@/components/icons/ZigzagLines"
import { Image } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutUs(): React.ReactElement {
	const t = useTranslations("Pages.Home.aboutUs")
	return (
		<section className="grid w-screen grid-cols-12">
			<div className="relative col-span-5 row-span-9 hidden min-h-full grid-cols-5 flex-col overflow-hidden md:flex">
				<div className="absolute inset-0 -z-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700">
					<Image />
				</div>

				<div className="min-h-16 w-full border-b border-neutral-800 dark:border-neutral-200" />

				<div className="grid h-full grid-cols-5">
					<div className="col-span-1 h-auto border-b border-neutral-800 dark:border-neutral-200" />
					<div className="col-span-4 h-auto border-b border-l border-neutral-800 dark:border-neutral-200" />
				</div>

				<div className="grid grid-cols-5">
					<div className="col-span-1 row-span-1 h-16 border-b border-neutral-800 dark:border-neutral-200" />
					<div className="col-span-4 row-span-1 h-16 border-b border-l border-neutral-800 dark:border-neutral-200" />
				</div>
			</div>

			<div className="col-span-5 row-span-1 h-16 border-b border-neutral-800 dark:border-neutral-200 md:hidden" />
			<div className="col-span-7 row-span-1 h-16 border-b border-l border-neutral-800 dark:border-neutral-200" />

			<div className="col-span-1 row-span-7 min-h-full border-b border-neutral-800 dark:border-neutral-200 md:hidden" />
			<div className="col-span-10 row-span-7 mx-auto flex h-full min-h-[75dvh] w-full flex-col items-center justify-center border border-t-0 border-neutral-800 p-2 text-center dark:border-neutral-200 sm:p-8 md:col-span-6 md:items-start md:justify-end md:text-left">
				<h2 className="font-feature text-3xl font-bold sm:text-4xl lg:text-5xl">{t("title")}</h2>
				<p className="text-sm sm:text-base">
					{t.rich("description", {
						p: (children) => <p className="mt-2 sm:mt-4">{children}</p>,
						feature: (children) => (
							<span className="font-semibold underline decoration-wavy">{children}</span>
						),
					})}
				</p>
			</div>
			<div className="col-span-1 row-span-7 min-h-full border-b border-neutral-800 dark:border-neutral-200" />

			<div className="col-span-1 row-span-1 h-16 border-b border-neutral-800 dark:border-neutral-200 md:hidden" />
			<div className="col-span-10 row-span-1 h-16 border-x border-b border-neutral-800 dark:border-neutral-200 md:col-span-6" />
			<div className="relative col-span-1 row-span-1 h-16 overflow-hidden border-b border-neutral-800 dark:border-neutral-200">
				<ZigzagLines className="absolute -top-10 left-0 right-2 h-56 w-56 text-neutral-800 dark:text-neutral-200" />
			</div>
		</section>
	)
}
