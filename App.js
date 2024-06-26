import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js"
import CourseRoutes from './Kanbas/Database/courses/routes.js';
import ModuleRoutes from './Kanbas/Database/modules/routes.js';
import AssignmentRoutes from './Kanbas/Database/assignments/routes.js';
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json());

AssignmentRoutes(app)
ModuleRoutes(app)
CourseRoutes(app);
Lab5(app);
Hello(app)

app.listen(process.env.PORT || 4000)
