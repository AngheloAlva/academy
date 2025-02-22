import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

import LanguageButton from "./LanguageButton"
import AccountButton from "./AccountButton"
import ThemeButton from "./ThemeButton"
import Logo from "../icons/Logo"

export default function Navbar(): React.ReactElement {
	const t = useTranslations("Navbar")

	return (
		<header className="col-span-12 grid grid-cols-12 overflow-hidden border-y border-neutral-800 bg-transparent font-medium text-black dark:border-neutral-200">
			<div className="col-span-1" />

			<div className="col-span-4 flex w-full items-center justify-between border-l border-neutral-800 px-6 py-2 dark:border-neutral-200 md:col-span-6 md:border-x">
				<div className="flex">
					<Logo className="h-11 w-fit justify-start text-neutral-800 dark:text-neutral-200" />
				</div>

				<nav className="hidden justify-center lg:flex">
					<ul className="flex items-center gap-4 font-medium text-neutral-800 dark:text-neutral-200 xl:gap-8">
						<li>
							<Link
								className="group relative px-1 py-1.5 hover:text-neutral-200 dark:hover:text-neutral-800"
								href="/"
							>
								{t("home")}
								<div className="absolute bottom-0 -z-10 h-0.5 w-full bg-neutral-800 transition-all duration-300 group-hover:h-full dark:bg-neutral-200"></div>
							</Link>
						</li>
						<li>
							<Link
								className="group relative px-1 py-1.5 hover:text-neutral-200 dark:hover:text-neutral-800"
								href="/"
							>
								{t("courses")}
								<div className="absolute bottom-0 -z-10 h-0.5 w-full bg-neutral-800 transition-all duration-300 group-hover:h-full dark:bg-neutral-200"></div>
							</Link>
						</li>
						<li>
							<Link
								className="group relative px-1 py-1.5 hover:text-neutral-200 dark:hover:text-neutral-800"
								href="/"
							>
								{t("about")}
								<div className="absolute bottom-0 -z-10 h-0.5 w-full bg-neutral-800 transition-all duration-300 group-hover:h-full dark:bg-neutral-200"></div>
							</Link>
						</li>
						<li>
							<Link
								className="group relative px-1 py-1.5 hover:text-neutral-200 dark:hover:text-neutral-800"
								href="/"
							>
								{t("contact")}
								<div className="absolute bottom-0 -z-10 h-0.5 w-full bg-neutral-800 transition-all duration-300 group-hover:h-full dark:bg-neutral-200"></div>
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div className="col-span-6 flex flex-1 items-center justify-end gap-2 border-r border-neutral-800 px-6 dark:border-neutral-200 md:col-span-4">
				<LanguageButton />
				<AccountButton />
				<ThemeButton />
			</div>

			<div className="col-span-1" />
		</header>
	)
}
