import express from 'express';
import controller from '../controllers/vimana.controller';
const virm_router = express.Router();

virm_router.get('/posts', controller.posts);

export = virm_router;