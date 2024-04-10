import express from 'express';
import mongoose from "mongoose"
import "dotenv/config"
import session from "express-session"
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js"
import CourseRoutes from './Kanbas/Database/courses/routes.js';
import ModuleRoutes from './Kanbas/Database/modules/routes.js';
import UserRoutes from "./Kanbas/Database/users/routes.js";
import AssignmentRoutes from './Kanbas/Database/assignments/routes.js';
import cors from "cors"

mongoose.connect("mongodb://127.0.0.1:27017/kanbas")

const app = express()
app.use(cors({
	credentials: true,
	origin: process.env.FRONTEND_URL
}))

const sessionOptions = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== "development") {
	console.log('NODE_ENV not being correctly set to "development"')
	sessionOptions.proxy = true;
	sessionOptions.cookie = {
		sameSite: "none",
		secure: true,
		domain: process.env.HTTP_SERVER_DOMAIN
	}
}

app.use(session(sessionOptions))

app.use(express.json());

UserRoutes(app)
AssignmentRoutes(app)
ModuleRoutes(app)
CourseRoutes(app);
Lab5(app);
Hello(app)

app.listen(process.env.PORT || 4000)
