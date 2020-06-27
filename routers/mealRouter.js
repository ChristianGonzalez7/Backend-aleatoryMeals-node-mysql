import Router from 'express';
import info from '../controllers/meal/detail.js';

const router = Router();

router.route('/:id')
    .get(info);

export default router;