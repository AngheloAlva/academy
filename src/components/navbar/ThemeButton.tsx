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
			className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-transparent p-2 font-medium text-black transition-all duration-100 [box-shadow:2px_2px_rgb(82_82_82)] hover:bg-white active:translate-x-[1px] active:translate-y-[1px] active:[box-shadow:0px_0px_rgb(82_82_82)] dark:border-neutral-200 dark:text-white dark:[box-shadow:2px_2px_#afafaf] dark:hover:bg-black dark:active:[box-shadow:0px_0px_#afafaf]"
		>
			{theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
		</Button>
	)
}
