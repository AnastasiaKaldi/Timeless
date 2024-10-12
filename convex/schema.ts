import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  sessions: defineTable({
    name: v.string(),
    created_at: v.number(),
  }),
  players: defineTable({
    session_id: v.id("sessions"),
    user_id: v.string(),
    score: v.number(),
  }),
  questions: defineTable({
    session_id: v.id("sessions"),
    question_text: v.string(),
    answer: v.string(),
  }),
});

export default schema;
