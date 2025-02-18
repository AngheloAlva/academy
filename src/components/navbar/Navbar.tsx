import { Link } from "@/i18n/routing"

import ThemeButton from "./ThemeButton"
import Logo from "../icons/Logo"

export default function Navbar(): React.ReactElement {
	return (
		<header className="fixed left-4 right-4 top-2 z-[100] flex items-center justify-between gap-4 rounded-full px-4 py-2 shadow backdrop-blur-2xl dark:text-white">
			<Logo className="h-11 w-fit text-black dark:text-white" />

			<nav className="hidden md:flex">
				<ul className="flex items-center gap-4 font-medium">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/">About</Link>
					</li>
					<li>
						<Link href="/">Services</Link>
					</li>
					<li>
						<Link href="/">Contact</Link>
					</li>
				</ul>
			</nav>

			<div>
				<ThemeButton />
			</div>
		</header>
	)
}
