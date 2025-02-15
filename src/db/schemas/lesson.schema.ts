import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { section } from "./section.schema"
import { course } from "./course.schema"

export const lesson = sqliteTable("lesson", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	order: integer("order").notNull(),
	duration: integer("duration").notNull(),
	isAssignment: integer("is_assignment", { mode: "boolean" }).notNull(),

	//TODO: Add video relationed fields

	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),

	courseId: text("course_id")
		.references(() => course.id)
		.notNull(),
	sectionId: text("section_id")
		.references(() => section.id)
		.notNull(),
})
