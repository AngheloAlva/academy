import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { user } from "./auth.schema"

export const instructorTranslation = sqliteTable("instructor_translation", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	language: text("language", { enum: ["es", "en"] }),

	about: text("about").notNull(),
	title: text("title").notNull(),
	workplace: text("workplace"),

	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),

	instructorId: text("instructor_id")
		.references(() => user.id)
		.notNull(),
})
