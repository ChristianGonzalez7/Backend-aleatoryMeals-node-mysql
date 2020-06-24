import Router from 'express';

const router = Router();

router.route('/:id')
    .get(detail)