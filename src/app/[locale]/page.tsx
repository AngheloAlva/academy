import AboutUs from "@/components/sections/home/AboutUs"
import HomeFeatureCourses from "@/components/sections/home/FeatureCourses"
import HomeHero from "@/components/sections/home/Hero"
import PlansOverview from "@/components/sections/home/PlansOverview"

export default function HomePage() {
	return (
		<main>
			<HomeHero />
			<HomeFeatureCourses />
			<AboutUs />
			<PlansOverview />
		</main>
	)
}
