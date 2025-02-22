"use client"

import { createAuthClient } from "better-auth/react"
import { useTranslations } from "next-intl"

import { LogIn, LogOut, User, UserPen, UserPlus } from "lucide-react"
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "../ui/dropdown-menu"
import { Skeleton } from "../ui/skeleton"
import { Link } from "@/i18n/routing"

const { useSession } = createAuthClient()

export default function AccountButton(): React.ReactElement {
	const t = useTranslations("Navbar.account")

	const { data: session, isPending } = useSession()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="transtion-colors flex h-9 w-9 items-center justify-center rounded-none border border-neutral-800 p-2 shadow hover:bg-neutral-800 hover:text-white dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-800">
				<User />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="relative overflow-hidden rounded-md border border-neutral-800 [box-shadow:2px_2px_rgb(82_82_82)] hover:bg-white dark:border-neutral-200 dark:text-white dark:[box-shadow:2px_2px_#afafaf] dark:hover:bg-black">
				<DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{isPending ? (
					<div className="space-y-1">
						<Skeleton className="h-7 w-full" />
						<Skeleton className="h-7 w-full" />
					</div>
				) : session ? (
					<>
						<DropdownMenuItem>
							<UserPen />
							{t("profile")}
						</DropdownMenuItem>
						<DropdownMenuItem>
							<LogOut />
							{t("logout")}
						</DropdownMenuItem>
					</>
				) : (
					<>
						<Link href={"/auth/register"}>
							<DropdownMenuItem className="cursor-pointer">
								<UserPlus />
								{t("register")}
							</DropdownMenuItem>
						</Link>

						<Link href={"/auth/login"}>
							<DropdownMenuItem className="cursor-pointer">
								<LogIn />
								{t("login")}
							</DropdownMenuItem>
						</Link>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
