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
			<DropdownMenuContent className="relative overflow-hidden rounded-none border border-neutral-800 hover:bg-white dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800">
				<DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>{t("english")}</DropdownMenuItem>
				<DropdownMenuItem>{t("spanish")}</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
