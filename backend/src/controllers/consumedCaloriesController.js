import pool from "../database/database.js";

// GET

export async function getConsumedCalories() {
    const [result] = await pool.query("SELECT * FROM consumed_calories");
    return [result];
}

export async function getConsumedCaloriesOfUserByID(user_id) {
    const [result] = await pool.query("SELECT * FROM consumed_calories WHERE user_id = ?", [user_id]);
    return [result];
}

// POST

export async function createConsumedCalories(user_id, date, meal_description, calories) {
    const result = await pool.query(
        "INSERT INTO consumed_calories (user_id, date, meal_description, calories) VALUES (?, ?, ?, ?)",
        [user_id, date, meal_description, calories]
    );
    return result;
}

// DELETE

export async function deleteConsumedCaloriesByID(id) {
    const result = await pool.query("DELETE FROM consumed_calories WHERE id = ?", [id]);
    return result;
}