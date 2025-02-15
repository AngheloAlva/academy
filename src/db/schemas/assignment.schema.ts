import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { section } from "./section.schema"
import { course } from "./course.schema"
import { lesson } from "./lesson.schema"

export const assignment = sqliteTable("assignment", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),

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
	lessonId: text("lesson_id")
		.references(() => lesson.id)
		.notNull(),
})
