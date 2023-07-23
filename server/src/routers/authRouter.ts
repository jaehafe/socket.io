import { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';

import validateForm from '../controllers/validateForm';
import pool from '../../db';

const router = Router();

router.post('/login', (req, res) => {
  validateForm(req, res);
});

router.post('/signup', async (req, res) => {
  validateForm(req, res);

  const existingUser = await pool.query(
    'SELECT username from users WHERE username=$1',
    [req.body.username]
  );

  if (existingUser.rowCount === 0) {
    // register
  } else {
    res.json({ loggedIn: false, status: 'Username taken' });
  }
});

export default router;
