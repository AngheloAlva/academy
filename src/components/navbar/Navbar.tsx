import { Link } from "@/i18n/routing"

import ThemeButton from "./ThemeButton"
import Logo from "./Logo"

export default function Navbar(): React.ReactElement {
	return (
		<header className="py2 fixed left-4 right-4 top-2 flex items-center justify-between gap-4 rounded-full px-4 backdrop-blur-xl dark:text-white">
			<Logo />

			<nav>
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
