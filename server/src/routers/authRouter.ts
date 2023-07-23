import { Request, Response, Router } from 'express';
import validateForm from '../controllers/validateForm';

const router = Router();

router.post('/login', (req, res) => {
  validateForm(req, res);
});

router.post('/signup', (req, res) => {
  validateForm(req, res);
});

export default router;
