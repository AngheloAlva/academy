"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

export default function Logo(): React.ReactElement {
	const { theme } = useTheme()

	return (
		<>
			{theme === "dark" ? (
				<Image src={"/simple-logo-white.png"} alt="Simple Logo" width={80} height={80} />
			) : (
				<Image src={"/simple-logo-black.png"} alt="Simple Logo" width={80} height={80} />
			)}
		</>
	)
}
