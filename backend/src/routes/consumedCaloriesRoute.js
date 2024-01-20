import express from 'express';
import {
  getConsumedCalories,
  getConsumedCaloriesOfUserByID,
  createConsumedCalories,
  deleteConsumedCaloriesByID,
} from '../controllers/consumedCaloriesController.js';

const router = express.Router();

// GET routes
router.get('/', async (req, res) => {
  try {
    const consumedCalories = await getConsumedCalories();
    res.json(consumedCalories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/user/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const consumedCaloriesOfUser = await getConsumedCaloriesOfUserByID(userId);
    res.json(consumedCaloriesOfUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// POST route
router.post('/', async (req, res) => {
  const { user_id, date, meal_description, calories } = req.body;
  try {
    const result = await createConsumedCalories(user_id, date, meal_description, calories);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE route
router.delete('/:id', async (req, res) => {
  const consumedCaloriesId = req.params.id;
  try {
    const result = await deleteConsumedCaloriesByID(consumedCaloriesId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
