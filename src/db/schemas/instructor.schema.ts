import { sqliteTable, text, real } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { user } from "./auth.schema"

export const instructor = sqliteTable("instructor", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	rating: real("rating"),
	reviewsQuantity: text("reviews_quantity"),
	coursesQuantity: text("courses_quantity"),
	rrss: text("rrss", { mode: "json" }).$type<
		Array<{
			icon: "facebook" | "instagram" | "twitter" | "linkedin" | "youtube" | "tiktok" | "web"
			label: "facebook" | "instagram" | "twitter" | "linkedin" | "youtube" | "tiktok" | "web"
			link: string
		}>
	>(),

	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),

	userId: text("user_id")
		.references(() => user.id)
		.notNull(),
})
