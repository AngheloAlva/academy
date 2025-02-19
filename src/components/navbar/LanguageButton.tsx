"use client"

import { useTranslations } from "next-intl"

import { Languages } from "lucide-react"
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "../ui/dropdown-menu"

export default function LanguageButton(): React.ReactElement {
	const t = useTranslations("Navbar.language")

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-transparent p-2 font-medium text-black transition-all duration-100 [box-shadow:2px_2px_rgb(82_82_82)] hover:bg-white active:translate-x-[1px] active:translate-y-[1px] active:ring-0 active:[box-shadow:0px_0px_rgb(82_82_82)] dark:border-neutral-200 dark:text-white dark:[box-shadow:2px_2px_#afafaf] dark:hover:bg-black dark:active:[box-shadow:0px_0px_#afafaf]">
				<Languages />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="relative overflow-hidden rounded-md border border-neutral-800 [box-shadow:2px_2px_rgb(82_82_82)] hover:bg-white dark:border-neutral-200 dark:text-white dark:[box-shadow:2px_2px_#afafaf] dark:hover:bg-black">
				<DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>{t("english")}</DropdownMenuItem>
				<DropdownMenuItem>{t("spanish")}</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
