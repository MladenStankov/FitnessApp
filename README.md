# Потребителски профил и Личен Дневник - Спецификация и Описание на Функционалността

## User Story 1: Създаване на Потребителски Профил

**Функционалност:** Потребителите могат да създадат свой профил, въвеждайки лични данни като възраст, пол, тегло и цел за фитнес.

## User Story 2: Личен Дневник

**Функционалност:** Потребителите имат достъп до личен дневник, където могат да въвеждат информация за тренировки, консумирани калории и напредъка към целите си.

## User Story 3: Присъединяване или Създаване на Група

**Функционалност:** Потребителите могат да присъединяват или създават групи с приятели или хора със сходни фитнес интереси.

## User Story 4: Виждане на Тренировки и Постижения на Общността

**Функционалност:** Потребителите могат да виждат тренировките и постиженията на членовете на своята общност, за да се мотивират и подкрепят другите.



# Consumed Calories API

## GET /consumed_calories

**Purpose:** Retrieve all records of consumed calories.

**Controller:** getConsumedCalories

**Response:** Returns an array of consumed calories records.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## GET /consumed_calories/user/:user_id

**Purpose:** Retrieve consumed calories records for a specific user.

**Controller:** getConsumedCaloriesOfUserByID

**Request Parameter:** user_id in the URL path.

**Response:** Returns an array of consumed calories records for the specified user.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## POST /consumed_calories

**Purpose:** Create a new record of consumed calories.

**Controller:** createConsumedCalories

**Request Body:**
- user_id: User identification number associated with the consumed calories record.
- date: Date of the consumed meal.
- meal_description: Description of the consumed meal.
- calories: Number of calories consumed.

**Response:** Returns the result of the creation process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the creation process.

## DELETE /consumed_calories/:id

**Purpose:** Delete a consumed calories record by identifier.

**Controller:** deleteConsumedCaloriesByID

**Request Parameter:** id in the URL path, representing the identifier of the consumed calories record to be deleted.

**Response:** Returns the result of the deletion process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the deletion process.


# Exercises API

## GET /exercises

**Purpose:** Retrieve all exercises.

**Controller:** getExercises

**Response:** Returns an array of exercise records.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## GET /exercises/workout/:workout_id

**Purpose:** Retrieve exercises for a specific workout.

**Controller:** getExercisesOfWorkoutByID

**Request Parameter:** workout_id in the URL path.

**Response:** Returns an array of exercise records for the specified workout.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## POST /exercises

**Purpose:** Create a new exercise record.

**Controller:** createExercise

**Request Body:**
- workout_id: Workout identification number associated with the exercise record.
- exercise_name: Name of the exercise.
- sets: Number of sets.
- reps: Number of repetitions.
- weight_in_kgs: Weight used in kilograms.

**Response:** Returns the result of the creation process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the creation process.


# Friend Connections API

## GET /friend_connections

**Purpose:** Retrieve all friend connections.

**Controller:** getFriendConnections

**Response:** Returns an array of friend connection records.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## GET /friend_connections/friends/:user_id

**Purpose:** Retrieve friends of a specific user.

**Controller:** getFriendsOfUserByID

**Request Parameter:** user_id in the URL path.

**Response:** Returns an array of friend records for the specified user.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## POST /friend_connections

**Purpose:** Create a new friend connection.

**Controller:** createFriendConnection

**Request Body:**
- user1_id: User identification number for the first user in the friend connection.
- user2_id: User identification number for the second user in the friend connection.

**Response:** Returns the result of the creation process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the creation process.

## DELETE /friend_connections/:user1_id/:user2_id

**Purpose:** Delete a friend connection by user IDs.

**Controller:** deleteFriendConnectionByIDs

**Request Parameters:**
- user1_id: User identification number for the first user.
- user2_id: User identification number for the second user.

**Response:** Returns the result of the deletion process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the deletion process.


# Users API

## GET /users

**Purpose:** Retrieve all users.

**Controller:** getUsers

**Response:** Returns an array of user records.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## GET /users/:id

**Purpose:** Retrieve a user by ID.

**Controller:** getUserByID

**Request Parameter:** id in the URL path.

**Response:** Returns the user record for the specified ID.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## GET /users/email/:email

**Purpose:** Retrieve a user by email.

**Controller:** getUserByEmail

**Request Parameter:** email in the URL path.

**Response:** Returns the user record for the specified email.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## GET /users/password/:email

**Purpose:** Retrieve the password for a user by email.

**Controller:** getUserPasswordByEmail

**Request Parameter:** email in the URL path.

**Response:** Returns the password for the user with the specified email.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## POST /users

**Purpose:** Create a new user.

**Controller:** createUser

**Request Body:**
- first_name: User's first name.
- last_name: User's last name.
- email: User's email.
- password: User's password.
- age: User's age.
- gender: User's gender.
- weight: User's weight.
- objective: User's fitness objective.

**Response:** Returns the result of the creation process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the creation process.

## PUT /users/weight/:id

**Purpose:** Update a user's weight by ID.

**Controller:** updateUserWeightByID

**Request Parameter:** id in the URL path.

**Request Body:**
- weight: New weight value.

**Response:** Returns the result of the update process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the update process.

## PUT /users/age/:id

**Purpose:** Update a user's age by ID.

**Controller:** updateUserAgeByID

**Request Parameter:** id in the URL path.

**Request Body:**
- age: New age value.

**Response:** Returns the result of the update process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the update process.

## DELETE /users/:id

**Purpose:** Delete a user by ID.

**Controller:** deleteUserByID

**Request Parameter:** id in the URL path.

**Response:** Returns the result of the deletion process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the deletion process.


# Workouts API

## GET /workouts

**Purpose:** Retrieve all workouts.

**Controller:** getWorkouts

**Response:** Returns an array of workout records.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## GET /workouts/user/:user_id

**Purpose:** Retrieve workouts for a specific user.

**Controller:** getWorkoutsOfUserByID

**Request Parameter:** user_id in the URL path.

**Response:** Returns an array of workout records for the specified user.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the retrieval process.

## POST /workouts

**Purpose:** Create a new workout record.

**Controller:** createWorkout

**Request Body:**
- user_id: User identification number associated with the workout record.
- date: Date of the workout.
- duration_in_minutes: Duration of the workout in minutes.
- calories_burned: Number of calories burned during the workout.

**Response:** Returns the result of the creation process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the creation process.

## DELETE /workouts/:id

**Purpose:** Delete a workout record by ID.

**Controller:** deleteWorkoutByID

**Request Parameter:** id in the URL path, representing the identifier of the workout record to be deleted.

**Response:** Returns the result of the deletion process.

**Error Handling:** Sends a 500 Internal Server Error if an error occurs during the deletion process.
