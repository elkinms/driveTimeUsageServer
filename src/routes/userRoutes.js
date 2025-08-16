import express from 'express';
import {registerUser} from "../controllers/userControllers.js";

const router = express.Router();

router.post('/register', registerUser);
// TODO add routes

export default router;
