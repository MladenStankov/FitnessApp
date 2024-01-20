import express from 'express';
import {
  getFriendConnections,
  getFriendsOfUserByID,
  createFriendConnection,
  deleteFriendConnectionByIDs,
} from "../controllers/friendConnectionsController.js";

const router = express.Router();

// GET routes
router.get('/', async (req, res) => {
  try {
    const friendConnections = await getFriendConnections();
    res.json(friendConnections);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/friends/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const friends = await getFriendsOfUserByID(userId);
    res.json(friends);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// POST route
router.post('/', async (req, res) => {
  const { user1_id, user2_id } = req.body;
  try {
    const result = await createFriendConnection(user1_id, user2_id);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE route
router.delete('/:user1_id/:user2_id', async (req, res) => {
  const user1_id = req.params.user1_id;
  const user2_id = req.params.user2_id;
  try {
    const result = await deleteFriendConnectionByIDs(user1_id, user2_id);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;