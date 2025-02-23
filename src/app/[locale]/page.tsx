import AboutUs from "@/components/sections/home/AboutUs"
import HomeFeatureCourses from "@/components/sections/home/FeatureCourses"
import HomeHero from "@/components/sections/home/Hero"

export default function HomePage() {
	return (
		<main>
			<HomeHero />
			<HomeFeatureCourses />
			<AboutUs />
		</main>
	)
}
