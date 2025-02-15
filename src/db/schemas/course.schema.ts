import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { instructor } from "./instructor.schema"
import { user } from "./auth.schema"

export const course = sqliteTable("course", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),

	image: text("image").notNull(),
	price: integer("price").notNull(),
	duration: integer("duration"),
	sectionsQuantity: integer("sections_quantity"),
	lessonsQuantity: integer("lessons_quantity"),

	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),

	instructorId: text("instructor_id")
		.references(() => instructor.id)
		.notNull(),
	userId: text("user_id")
		.references(() => user.id)
		.notNull(),
})
