import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { v4 as uuidv4 } from "uuid"
import { sql } from "drizzle-orm"

import { course } from "./course.schema"

export const courseTranslation = sqliteTable("course_translation", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	language: text("language", { enum: ["es", "en"] }).notNull(),

	name: text("name").notNull(),
	description: text("description").notNull(),
	whatYouWillLearn: text("what_you_will_learn", { mode: "json" }).$type<string[]>().notNull(),
	whatsIncluded: text("whats_included", { mode: "json" })
		.$type<{
			title: string
			iconName: string
		}>()
		.notNull(),
	content: text("content", { mode: "json" })
		.$type<{
			title: string
			content: string
		}>()
		.notNull(),
	requirements: text("requirements", { mode: "json" }).$type<string[]>().notNull(),
	fullDescription: text("full_description").notNull(),
	whoIsFor: text("who_is_for", { mode: "json" }).$type<string[]>().notNull(),

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
