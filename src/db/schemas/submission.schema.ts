import { real, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { assignment } from "./assignment.schema"
import { user } from "./auth.schema"

export const submission = sqliteTable("submission", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	grade: real("grade").notNull(),
	feedBack: text("feedback"),

	submittedAt: text("submitted_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),

	userId: text("user_id")
		.notNull()
		.references(() => user.id),
	assignmentId: text("assignment_id")
		.notNull()
		.references(() => assignment.id),
})
