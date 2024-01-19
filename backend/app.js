import express from "express";
import usersRoute from "./src/routes/usersRoute.js"
import friendConnectionsRoute from "./src/routes/friendConnetionsRoute.js"
import workoutsRoute from "./src/routes/workoutsRoute.js"
import exercisesRoute from "./src/routes/exercisesRoute.js"
import consumedCaloriesRoute from "./src/routes/consumedCaloriesRoute.js"

const port = 5000
const app = express()

app.use(express.json())
app.use("/users", usersRoute)
app.use("/friend_connections", friendConnectionsRoute)
app.use("/workouts", workoutsRoute)
app.use("/exercises", exercisesRoute)
app.use("/consumed_calories", consumedCaloriesRoute)

app.listen(port, () => {
    console.log(`Server Working on Port:${port}...`)
})