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
			<DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center rounded-none border border-neutral-800 p-2 shadow transition-colors hover:bg-neutral-800 hover:text-white dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-800">
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
