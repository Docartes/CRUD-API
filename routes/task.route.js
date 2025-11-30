import express from 'express';
import { TaskController } from '../controllers/task.controller.js';

const controller = new TaskController;

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.findAllTask);
router.get('/:id', controller.findTaskById);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteTask);

export {
	router
};