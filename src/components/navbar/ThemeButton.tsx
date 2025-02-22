"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

export default function ThemeButton(): React.ReactElement {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		<Button
			onClick={toggleTheme}
			className="flex h-9 w-9 items-center justify-center rounded-none border border-neutral-800 bg-transparent text-black hover:bg-neutral-800 hover:text-white dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-800"
		>
			{theme === "light" ? <Sun /> : <Moon />}
		</Button>
	)
}
