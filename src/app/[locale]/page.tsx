import HomeFeatureCourses from "@/components/sections/home/FeatureCourses"
import HomeHero from "@/components/sections/home/Hero"

export default function HomePage() {
	return (
		<main className="grid w-screen grid-cols-12">
			<HomeHero />

			<HomeFeatureCourses />
		</main>
	)
}
