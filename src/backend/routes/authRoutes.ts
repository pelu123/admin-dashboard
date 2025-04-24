import express from 'express';
import { register, login } from '../controllers/authController';

const router = express.Router();

router.post('/register', (req, res, next) => {
    Promise.resolve(register(req, res)).catch(next);
  });
router.post('/login', (req, res, next) => {
    Promise.resolve(login(req, res)).catch(next);
  });

export default router;