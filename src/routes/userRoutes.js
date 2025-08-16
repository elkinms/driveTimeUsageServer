import express from 'express';
import {
    changePassword,
    deleteUser,
    getUser,
    loginUser,
    registerUser,
    updateUser
} from "../controllers/userControllers.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:email', getUser);
router.patch('/:email', updateUser);
router.patch('/:email/password', changePassword);
router.delete('/:email', deleteUser);

export default router;
