import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { course } from "./course.schema"
import { user } from "./auth.schema"

export const enrollment = sqliteTable("enrollment", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),

	enrolledAt: text("enrolled_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	completedAt: text("completed_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),

	userId: text("instructor_id")
		.references(() => user.id)
		.notNull(),
	courseId: text("course_id")
		.references(() => course.id)
		.notNull(),
})
