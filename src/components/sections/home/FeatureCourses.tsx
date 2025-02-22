import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

import GridContainer from "@/components/shared/GridContainer"
import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"
import { Link } from "@/i18n/routing"

const courses = [
	{
		title: "Power BI desde Cero: Convierte Datos en Decisiones",
		description:
			"Aprende a transformar datos en informes interactivos y dashboards impactantes con Power BI. Ideal para quienes buscan mejorar la toma de decisiones con visualizaciones efectivas.",
	},
	{
		title: "Excel Avanzado: Domina Tablas Dinámicas y Macros",
		description:
			"Lleva tu conocimiento de Excel al siguiente nivel con funciones avanzadas, automatización con macros y análisis de datos en profundidad. Perfecto para profesionales que quieren optimizar su productividad.",
	},
	{
		title: "Automatización Empresarial con Power Automate",
		description:
			"Descubre cómo crear flujos de trabajo automatizados para reducir tareas repetitivas y mejorar la eficiencia operativa en tu empresa usando Power Automate.",
	},
	{
		title: "Fundamentos de SQL para Analistas de Datos",
		description:
			"Aprende a manejar bases de datos con SQL, realizar consultas avanzadas y extraer información clave para la toma de decisiones en el mundo empresarial.",
	},
	{
		title: "Power Apps: Crea Aplicaciones sin Programar",
		description:
			"Diseña y desarrolla aplicaciones personalizadas sin necesidad de codificación compleja, optimizando procesos internos y mejorando la experiencia digital en tu empresa.",
	},
	{
		title: "Bienestar en el Trabajo: Ergonomía y Hábitos Saludables",
		description:
			"Mejora tu calidad de vida laboral con estrategias de ergonomía, pausas activas y ejercicios diseñados para prevenir fatiga y mejorar la productividad.",
	},
]

export default function HomeFeatureCourses(): React.ReactElement {
	const t = useTranslations("Pages.Home.featureCourses")

	return (
		<GridContainer
			zigzagLinesLocation="right"
			className="p-0 sm:p-0"
			fullWidth
			cta={
				<Link href="/courses">
					<Button
						className="rounded-none border border-neutral-800 bg-transparent text-base text-neutral-800 hover:bg-neutral-800 hover:text-white dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-800"
						size={"lg"}
					>
						{t("cta")}
					</Button>
				</Link>
			}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{courses.map((_, index) => (
					<CoursesCard key={index} index={index} />
				))}
			</div>
		</GridContainer>
	)
}

function CoursesCard({ index }: { index: number }): React.ReactElement {
	return (
		<div
			className={cn(
				"flex h-full flex-col items-center justify-center border-neutral-800 dark:border-neutral-200",
				getBorderClasses(index)
			)}
		>
			<div className="flex aspect-square h-auto w-full items-center justify-center bg-neutral-100 dark:bg-neutral-700">
				<Image />
			</div>

			<div className="flex h-full flex-col items-center justify-center p-4">
				<h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
					{courses[index].title}
				</h3>

				<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
					{courses[index].description}
				</p>
			</div>
		</div>
	)
}
function getBorderClasses(index: number): string {
	const isLastRow = index >= 4
	const isLastRowInLg = index >= 3
	const isLastColumn = (index + 1) % 2 === 0
	const isLastColumnInLg = (index + 1) % 3 === 0

	return cn(
		index !== 5 ? "border-b" : "",
		isLastColumn ? "md:border-r-0 " : "md:border-r",
		isLastRow ? "md:border-b-0" : "md:border-b",
		isLastRowInLg ? "lg:border-b-0" : "lg:border-b",
		isLastColumnInLg ? "lg:border-r-0" : "lg:border-r"
	)
}
