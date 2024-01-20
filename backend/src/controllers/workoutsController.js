import pool from "../database/database.js"

//GET

export async function getWorkouts() {
    const [result] = await pool.query("SELECT * FROM workouts")
    return [result]
}

export async function getWorkoutsOfUserByID(user_id) {
    const [result] = await pool.query("SELECT * FROM workouts WHERE workouts.user_id = ?", [user_id])
    return [result]
}

//POST

export async function createWorkout(user_id, date, duration_in_minutes, calories_burned) {
    const result = await pool.query("INSERT INTO workouts (user_id, date, duration_in_minutes, calories_burned) VALUES (?, ?, ?, ?)", [user_id, date, duration_in_minutes, calories_burned])
    return result
}

//DELETE

export async function deleteWorkoutByID(id) {
    const result = await pool.query("DELETE FROM workouts WHERE id = ?", [id])
    return result
}