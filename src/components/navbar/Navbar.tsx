import { Link } from "@/i18n/routing"

import LanguageButton from "./LanguageButton"
import AccountButton from "./AccountButton"
import ThemeButton from "./ThemeButton"
import Logo from "../icons/Logo"
import { useTranslations } from "next-intl"

export default function Navbar(): React.ReactElement {
	const t = useTranslations("Navbar")

	return (
		<header className="fixed left-0 right-0 top-0 z-50 mx-auto inline-flex max-w-screen-xl items-center justify-between gap-4 overflow-hidden border-b border-neutral-800 bg-transparent p-2 px-4 py-2 font-medium text-black shadow backdrop-blur-3xl transition-all duration-100 [box-shadow:5px_3px_rgb(82_82_82)] dark:border-neutral-200 dark:text-white dark:[box-shadow:5px_3px_#afafaf] md:left-4 md:right-4 md:top-2 md:rounded-md md:border">
			<div className="flex flex-1">
				<Logo className="h-11 w-fit justify-start text-black dark:text-white" />
			</div>

			<nav className="hidden justify-center md:flex">
				<ul className="flex items-center gap-4 font-medium lg:gap-8">
					<li>
						<Link href="/">{t("home")}</Link>
					</li>
					<li>
						<Link href="/">{t("courses")}</Link>
					</li>
					<li>
						<Link href="/">{t("about")}</Link>
					</li>
					<li>
						<Link href="/">{t("contact")}</Link>
					</li>
				</ul>
			</nav>

			<div className="flex flex-1 items-center justify-end gap-2">
				<LanguageButton />
				<AccountButton />
				<ThemeButton />
			</div>
		</header>
	)
}
