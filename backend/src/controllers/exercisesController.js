import pool from "../database/database.js"

//GET

export async function getExercises() {
    const [result] = await pool.query("SELECT * FROM exercises")
    return [result]
}

export async function getExercisesOfWorkoutByID(workout_id) {
    const [result] = await pool.query("SELECT * FROM exercises WHERE workout_id = ?", [workout_id])
    return [result]
}

//POST

export async function createExercise(workout_id, exercise_name, sets, reps, weight_in_kgs) {
    const result = await pool.query("INSERT INTO exercises (workout_id, exercise_name, sets, reps, weight_in_kgs) VALUES (?, ?, ?, ?, ?)",
        [workout_id, exercise_name, sets, reps, weight_in_kgs])
    return result
}