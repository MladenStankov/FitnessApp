import express from 'express';
import {
  getUsers,
  getUserByID,
  getUserByEmail,
  getUserPasswordByEmail,
  createUser,
  updateUserWeightByID,
  updateUserAgeByID,
  deleteUserByID,
} from "../controllers/usersController.js";

const router = express.Router();

// GET routes

router.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUserByID(userId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/email/:email', async (req, res) => {
  const userEmail = req.params.email;
  try {
    const user = await getUserByEmail(userEmail);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/password/:email', async (req, res) => {
  const userEmail = req.params.email;
  try {
    const password = await getUserPasswordByEmail(userEmail);
    res.json({ password });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// POST route

router.post('/', async (req, res) => {
  const { first_name, last_name, email, password, age, gender, weight, objective } = req.body;
  try {
    const result = await createUser(first_name, last_name, email, password, age, gender, weight, objective);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// PUT routes

router.put('/weight/:id', async (req, res) => {
  const userId = req.params.id;
  const { weight } = req.body;
  try {
    const result = await updateUserWeightByID(userId, weight);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/age/:id', async (req, res) => {
  const userId = req.params.id;
  const { age } = req.body;
  try {
    const result = await updateUserAgeByID(userId, age);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE route

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await deleteUserByID(userId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;