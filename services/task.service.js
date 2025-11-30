import { database as db } from '../models/task.model.js'

class Task {
	constructor (title, description, status = 'PENDING') {
		this.title = title;
		this.description = description;
		this.status = status
		this.created_at = new Date()
		this.updated_at = new Date()
	}

	async addTask(dto) {
		try {
			const stmt = await db.prepare(`
				INSERT INTO tasks (title, description) VALUES(?, ?)
			`);

			return stmt.run(dto.title, dto.description)
		} catch(err) {
			throw Error(err)
		}
	}

	async updateTask(id, dto) {
		try {
			const stmt = await db.prepare(`
				UPDATE tasks SET 
					title = ?, 
					description = ?, 
					status = ?, 
					updated_at = CURRENT_TIMESTAMP 
				WHERE task_id = ?
			`);

			return stmt.run(dto.title, dto.description, dto.status, id)
		} catch(err) {
			throw Error(err)
		}
	}

	async findById(id) {
		try {
			const stmt = await db.prepare(`SELECT * FROM tasks WHERE task_id = ${id}`) 

			return stmt.all()
		} catch( err ) {
			throw Error(err)
		}
	}

	async deleteTaskById(id) {
		try {
			return db.prepare(`DELETE FROM tasks WHERE task_id = ?`).run(id)
		} catch (err) {
			throw Error(err)
		}
	}

	async findAll() {
		try {
			return db.prepare(`SELECT * FROM tasks`).all()
		} catch (err) {
			throw Error(err)
		}
	}
}

export {
	Task
};