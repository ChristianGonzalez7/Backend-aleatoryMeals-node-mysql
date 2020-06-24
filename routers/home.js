import Router from 'express';
import info from '../controllers/meals/info.js';

const router = Router();

router.route('/:id')
    .get(info);

export default router;