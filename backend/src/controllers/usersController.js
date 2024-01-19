import pool from "../database/database.js"


//GET
export async function getUsers() {
    const [result] = await pool.query("SELECT * FROM users")
    return [result]
}

export async function getUserByID(id) {
    const result = await pool.query("SELECT * FROM users WHERE id = ?", id)
    return result
}

export async function getUserByEmail(email) {
    const result = await pool.query("SELECT * FROM users WHERE email = ?", email)
    return result
}

export async function getUserPasswordByEmail(email) {
    const result = await getUserByEmail(email)
    return result.password
}

//POST
export async function createUser(first_name, last_name, email, password, age, gender, weight, objective) {
    const result = await pool.query("INSERT INTO users (first_name, last_name, email, password, age, gender, weight, objective) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                                    [first_name, last_name, email, password, age, gender, weight, objective])
    return result
}

//PUT

export async function updateUserWeightByID(id, weight) {
    const result = await pool.query("UPDATE users SET weight = ? WHERE id = ?", [weight, id])
    return result
}

export async function updateUserAgeByID(id, age) {
    const result = await pool.query("UPDATE users SET age = ? WHERE id = ?", [age, id])
    return result
}

//DELETE

export async function deleteUserByID(id) {
    const result = await pool.query("DELETE FROM users WHERE id = ?", [id])
    return result;
}