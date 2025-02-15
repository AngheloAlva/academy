import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

export const plan = sqliteTable("plan", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	price: integer("price").notNull(),
	durationDays: integer("duration_days").notNull(),

	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
})
