import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { section } from "./section.schema"

export const sectionTranslation = sqliteTable("section_translation", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	language: text("language", { enum: ["es", "en"] }).notNull(),

	title: text("title").notNull(),
	lessonsQuantity: integer("lessons_quantity").notNull(),

	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),

	sectionId: text("section_id")
		.references(() => section.id)
		.notNull(),
})
