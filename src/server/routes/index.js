import { Router } from 'express';
import home from '../controllers/home';

const router = Router({});

router.get('/', home);

export default router;
