import pool from "../database/database.js"

//GET

export async function getFriendConnections() {
    const [result] = await pool.query("SELECT * FROM friend_conections")
    return [result]
}

export async function getFriendsOfUserByID(user_id) {
    const [result] = await pool.query("SELECT * FROM users AS u JOIN friend_connections AS f_c ON u.id = f_c.user1_id OR u.id = f_c.user2_id WHERE f_c.user1_id = ? OR f_c.user2_id = ?", [user_id, user_id])
    return [result]
}

//POST

export async function createFriendConnection(user1_id, user2_id) {
    const result = await pool.query("INSERT INTO friend_connections (user1_id, user2_id) VALUES (?, ?)", [user1_id, user2_id])
    return result
}

//DELETE

export async function deleteFriendConnectionByIDs(user1_id, user2_id) {
    const result = await pool.query("DELETE FROM friend_connections WHERE (user1_id = ? AND user2_id = ?) OR (user1_id = ? AND user2_id = ?)", [user1_id, user2_id, user2_id ,user1_id])
    return result
}