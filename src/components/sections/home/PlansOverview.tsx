import { useTranslations } from "next-intl"

import { SquareCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PlansOverview(): React.ReactElement {
	const t = useTranslations("Pages.Home.plansOverview")

	const ProfesionalBenefitsKeys = ["0", "1", "2", "3", "4"]
	const BasicBenefitsKeys = ["0", "1", "2", "3"]
	const CompanyBenefitsKeys = ["0", "1", "2", "3", "4"]

	return (
		<section className="grid w-screen grid-cols-12">
			<div className="col-span-12 row-span-1 flex items-center justify-center border-neutral-800 py-12 text-center dark:border-neutral-200">
				<h2 className="font-feature text-3xl font-bold sm:text-4xl lg:text-5xl">{t("title")}</h2>
			</div>

			<div className="col-span-1 row-auto min-h-full border-y border-neutral-800 dark:border-neutral-200" />

			<div className="col-span-10 row-auto grid w-full grid-cols-10 border border-neutral-800 text-center dark:border-neutral-200 md:flex-row">
				<div className="col-span-10 hidden h-full w-full flex-col items-start justify-center border-b border-neutral-800 text-left dark:border-neutral-200 md:col-span-3 md:justify-start md:border-none lg:flex">
					<div className="hidden h-16 w-full border-b border-neutral-800 dark:border-neutral-200 md:block" />

					<div className="flex flex-col px-4 py-6 sm:px-6">
						<h3 className="font-feature text-3xl font-bold">{t("basic.name")}</h3>
						<p className="mt-2 text-sm">{t("basic.description")}</p>

						<span className="mt-4 text-3xl font-medium">
							$9.990
							<span className="text-lg font-normal text-neutral-800 dark:text-neutral-200">
								/mes
							</span>
						</span>

						<ul className="mt-8 flex flex-col gap-2 text-sm">
							{BasicBenefitsKeys.map((key) => (
								<li className="flex items-start gap-2" key={key}>
									<div>
										<SquareCheck className="mt-1 h-4 w-4 text-neutral-800 dark:text-neutral-200" />
									</div>
									{t(`basic.benefits.${key}`)}
								</li>
							))}
						</ul>

						<Button className="mt-8 rounded-none border border-neutral-800 bg-transparent text-neutral-800 hover:bg-neutral-800 hover:text-white dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-black">
							{t("profesional.subscribe")}
						</Button>
					</div>
				</div>

				<div className="col-span-10 flex h-full flex-col items-start justify-center border-b border-neutral-800 bg-neutral-800 px-4 py-6 text-left text-white dark:border-neutral-200 dark:bg-neutral-200 dark:text-black sm:px-6 md:justify-start lg:col-span-4 lg:border-x lg:border-b-0">
					<h3 className="font-feature text-3xl font-bold">{t("profesional.name")}</h3>
					<p className="mt-2 text-sm">{t("profesional.description")}</p>

					<span className="mt-4 text-3xl font-medium">
						$19.990
						<span className="text-lg font-normal text-neutral-200 dark:text-neutral-800">/mes</span>
					</span>

					<ul className="mt-8 flex flex-col gap-2 text-sm">
						{ProfesionalBenefitsKeys.map((key) => (
							<li className="flex items-start gap-2" key={key}>
								<div>
									<SquareCheck className="mt-1 h-4 w-4 text-neutral-200 dark:text-neutral-800" />
								</div>
								{t(`profesional.benefits.${key}`)}
							</li>
						))}
					</ul>

					<Button className="mt-auto w-full rounded-none border border-neutral-200 bg-transparent text-neutral-200 hover:bg-neutral-200 hover:text-black dark:border-neutral-800 dark:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-white">
						{t("profesional.subscribe")}
					</Button>
				</div>

				<div className="col-span-10 flex h-full w-full flex-col items-start justify-center border-b border-neutral-800 text-left dark:border-neutral-200 md:col-span-5 md:justify-start md:border-b-0 md:border-r lg:col-span-3 lg:hidden">
					<div className="hidden h-16 w-full border-b border-neutral-800 dark:border-neutral-200 lg:block" />

					<div className="flex flex-col px-4 py-6 sm:px-6">
						<h3 className="font-feature text-3xl font-bold">{t("basic.name")}</h3>
						<p className="mt-2 text-sm">{t("basic.description")}</p>

						<span className="mt-4 text-3xl font-medium">
							$9.990
							<span className="text-lg font-normal text-neutral-800 dark:text-neutral-200">
								/mes
							</span>
						</span>

						<ul className="mt-8 flex flex-col gap-2 text-sm">
							{BasicBenefitsKeys.map((key) => (
								<li className="flex items-start gap-2" key={key}>
									<div>
										<SquareCheck className="mt-1 h-4 w-4 text-neutral-800 dark:text-neutral-200" />
									</div>
									{t(`basic.benefits.${key}`)}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="col-span-10 flex h-full w-full flex-col items-start justify-center border-neutral-800 text-left dark:border-neutral-200 md:col-span-5 md:justify-start md:border-none lg:col-span-3">
					<div className="hidden h-16 w-full border-b border-neutral-800 dark:border-neutral-200 lg:block" />

					<div className="flex flex-col px-4 py-6 sm:px-6">
						<h3 className="font-feature text-3xl font-bold">{t("company.name")}</h3>
						<p className="mt-2 text-sm">{t("company.description")}</p>

						<ul className="mt-8 flex flex-col gap-2 text-sm">
							{CompanyBenefitsKeys.map((key) => (
								<li className="flex items-start gap-2" key={key}>
									<div>
										<SquareCheck className="mt-1 h-4 w-4 text-neutral-800 dark:text-neutral-200" />
									</div>
									{t(`company.benefits.${key}`)}
								</li>
							))}
						</ul>

						<Button className="mt-8 rounded-none border border-neutral-800 bg-transparent text-neutral-800 hover:bg-neutral-800 hover:text-white dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-black">
							{t("company.contact")}
						</Button>
					</div>
				</div>
			</div>
			<div className="col-span-1 row-auto min-h-full border-y border-neutral-800 dark:border-neutral-200" />

			<div className="col-span-1 row-span-1 h-16 border-b border-neutral-800 dark:border-neutral-200" />
			<div className="col-span-6 row-span-1 h-16 border-x border-b border-neutral-800 dark:border-neutral-200" />
			<div className="col-span-4 row-span-1 h-16 border-b border-r border-neutral-800 dark:border-neutral-200" />
			<div className="relative col-span-1 row-span-1 h-16 overflow-hidden border-b border-neutral-800 dark:border-neutral-200">
				{/* <ZigzagLines className="absolute -top-10 left-0 right-2 h-56 w-56 text-neutral-800 dark:text-neutral-200" /> */}
			</div>
		</section>
	)
}
