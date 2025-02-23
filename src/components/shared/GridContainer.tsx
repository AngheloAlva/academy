import { cn } from "@/lib/utils"
import ZigzagLines from "../icons/ZigzagLines"

interface GridContainerProps {
	className?: string
	fullWidth?: boolean
	cta?: React.ReactElement
	children: React.ReactNode
	zigzagLinesLocation?: "left" | "right"
}

export default function GridContainer({
	cta,
	children,
	className,
	fullWidth,
	zigzagLinesLocation,
}: GridContainerProps): React.ReactElement {
	return (
		<section className="grid w-screen grid-cols-12">
			<div className="col-span-1 row-span-7 min-h-full border-b border-neutral-800 dark:border-neutral-200" />

			<div
				className={cn(
					"col-span-10 row-span-7 mx-auto h-full min-h-[75dvh] w-full border border-t-0 border-neutral-800 p-2 dark:border-neutral-200 sm:p-8 md:col-span-6",
					{ "md:col-span-10": fullWidth },
					className
				)}
			>
				{children}
			</div>

			<div
				className={cn(
					"row-span-7 hidden min-h-full border-b border-r border-neutral-800 dark:border-neutral-200 md:col-span-4 md:block",
					{
						"md:hidden": fullWidth,
					}
				)}
			/>
			<div className="col-span-1 row-span-7 min-h-full border-b border-neutral-800 dark:border-neutral-200" />

			<div className="relative col-span-1 row-span-1 h-16 overflow-hidden border-b border-neutral-800 dark:border-neutral-200">
				{zigzagLinesLocation === "left" && (
					<ZigzagLines className="absolute -left-2 -top-10 right-0 h-56 w-56 text-neutral-800 dark:text-neutral-200" />
				)}
			</div>
			<div
				className={cn(
					"col-span-10 row-span-1 h-16 border-x border-b border-neutral-800 dark:border-neutral-200 md:col-span-6",
					{
						"flex items-center justify-center md:col-span-10": fullWidth,
					}
				)}
			>
				{cta}
			</div>
			<div
				className={cn(
					"row-span-1 hidden h-16 border-b border-r border-neutral-800 dark:border-neutral-200 md:col-span-4 md:block",
					{
						"md:hidden": fullWidth,
					}
				)}
			/>
			<div className="relative col-span-1 row-span-1 h-16 overflow-hidden border-b border-neutral-800 dark:border-neutral-200">
				{zigzagLinesLocation === "right" && (
					<ZigzagLines className="absolute -top-10 left-0 right-2 h-56 w-56 text-neutral-800 dark:text-neutral-200" />
				)}
			</div>
		</section>
	)
}
