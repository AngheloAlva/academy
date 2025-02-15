import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

export const planTranslation = sqliteTable("plan_translation", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	language: text("language", { enum: ["es", "en"] }).notNull(),

	name: text("name").notNull(),
	description: text("description").notNull(),
	whatYouGet: text("what_you_get", { mode: "json" }).$type<Array<string>>().notNull(),
	whatsIncluded: text("whats_included", { mode: "json" }).$type<Array<boolean>>().notNull(),

	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
})
