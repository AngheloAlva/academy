import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { user } from "./auth.schema"
import { plan } from "./plan.schema"

export const subscription = sqliteTable("subscription", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	status: text("status", { enum: ["active", "inactive"] }).notNull(),

	initialDate: text("initial_date")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	endDate: text("end_date").notNull(),

	userId: text("user_id")
		.references(() => user.id)
		.notNull(),
	planId: text("plan_id")
		.references(() => plan.id)
		.notNull(),
})
