import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { course } from "./course.schema"

export const section = sqliteTable("section", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	order: integer("order").notNull(),
	fullDuration: integer("full_duration").notNull(),

	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),

	courseId: text("course_id")
		.references(() => course.id)
		.notNull(),
})
