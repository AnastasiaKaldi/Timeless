import { mutation, query } from "../_generated/server";
import { Id } from "../_generated/dataModel";
import { api } from "../_generated/api";


// Query to get session details
export const getSessionDetails = query(async ({ db }, { sessionId }: { sessionId: Id<"sessions"> }) => {
  return await db.get(sessionId);
});

// Mutation to create a new session
export const createSession = mutation(async ({ db }, { name }: { name: string }) => {
  const sessionId = await db.insert("sessions", {
    name,
    created_at: Date.now(),
  });
  return sessionId;
});

// Mutation to add a player to a session
export const addPlayerToSession = mutation(async ({ db }, { sessionId, userId }: { sessionId: Id<"sessions">, userId: string }) => {
  return await db.insert("players", {
    session_id: sessionId,
    user_id: userId,
    score: 0,
  });
});

// Mutation to update player's score
export const updatePlayerScore = mutation(async ({ db }, { playerId, newScore }: { playerId: Id<"players">, newScore: number }) => {
  return await db.patch(playerId, {
    score: newScore,
  });
});

// Query to get all players in a session
export const getPlayersInSession = query(async ({ db }, { sessionId }: { sessionId: Id<"sessions"> }) => {
    return await db.query("players").filter(q => q.eq(q.field("session_id"), sessionId)).collect();
  });

// import { mutation, query } from "../_generated/server";
// import { Id } from "../_generated/dataModel";
// import { api } from "../_generated/api";


// // Query to get session details
// export const getSessionDetails = query(async ({ db }, { sessionId }: { sessionId: Id<"sessions"> }) => {
//   return await db.get(sessionId);
// });

// // Mutation to create a new session
// export const createSession = mutation(async ({ db }, { name }) => {
//   const session = {
//     name,
//     created_at: Date.now(),
//   };
//   const sessionId = await db.insert("sessions", session);
//   return { _id: sessionId };
// });

// // Mutation to add a player to a session
// export const addPlayerToSession = mutation(async ({ db }, { sessionId, userName }) => {
//   // Create a new player object
//   const player = {
//     session_id: sessionId,
//     user_name: userName,
//     score: 0,
//   };
//   await db.insert("players", player);
// });

// // Mutation to update player's score
// export const updatePlayerScore = mutation(async ({ db }, { playerId, newScore }: { playerId: Id<"players">, newScore: number }) => {
//   return await db.patch(playerId, {
//     score: newScore,
//   });
// });

// // Query to get all players in a session
// export const getPlayersInSession = query(async ({ db }, { sessionId }) => {
//   const players = await db
//     .table("players")
//     .filter(q => q.eq(q.field("session_id"), sessionId))
//     .collect();
//   return players;
// });
