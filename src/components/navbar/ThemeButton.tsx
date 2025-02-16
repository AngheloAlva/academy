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
			className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-transparent p-2 font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:bg-white active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)] dark:border-neutral-200 dark:text-white dark:hover:bg-black"
		>
			{theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
		</Button>
	)
}
