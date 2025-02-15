import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { lesson } from "./lesson.schema"

export const lessonTranslation = sqliteTable("lesson_translation", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	language: text("language", { enum: ["es", "en"] }).notNull(),

	title: text("title").notNull(),
	description: text("description").notNull(),

	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),

	lessonId: text("lesson_id")
		.references(() => lesson.id)
		.notNull(),
})
