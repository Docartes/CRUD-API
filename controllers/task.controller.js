import { updateDTO } from '../dtos/update.dto.js'
import { createDTO } from '../dtos/create.dto.js'
import { Task } from '../services/task.service.js'

const taskModel = new Task()

class TaskController {
	async create(req, res, next) {
		try {
			const dto = new createDTO(req.body)
			const result = await taskModel.addTask(dto)


			res.json({
				'status': 'ok',
				'code': 201,
				'message': 'task sucessfully create',
				'data': result
			})
		} catch(err) {
			next(err)
		}
	}

	async findTaskById(req, res, next) {
		try {
			const result = await taskModel.findById(req.params.id)

			 res.json({
				'status': 'ok',
				'code': 200,
				'data': result
			})
		} catch (err) {
			next(err)
		}
	}

	async update(req, res, next) {
		try {
			const dto = new updateDTO(req.body)
			const result = await taskModel.updateTask(Number(req.params.id), dto)

			res.json({
				'status': 'ok',
				'code': 200,
				'message': 'task sucessfully update',
				'data': result
			})
		} catch (err) {
			next(err)
		}
	}

	async deleteTask(req, res, next) {
		try {
			const { id } = req.params
			const result = await taskModel.deleteTaskById(Number(id))

			res.json({
				'status': 'ok',
				'code': 200,
				'message': 'task sucessfully delete'
			})
		} catch (err) {
			next(err)
		}
	}

	async findAllTask(req, res, next) {
		try {
			const result = await taskModel.findAll()
			res.json({
				"status": "ok",
				"code": 200,
				"data": result
			})
		} catch(err) {
			next(err)
		}
	}
}

export {
	TaskController
}