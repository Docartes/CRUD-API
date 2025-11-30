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
			const fields = []
			const values = []

			if ( dto.title !== undefined ) {
				fields.push(`title = ?`)
				values.push(dto.title)
			}

			if ( dto.description !== undefined ) {
				fields.push(`description = ?`)
				values.push(dto.description)
			}

			if ( dto.status !== undefined ) {
				fields.push(`status = ?`)
				values.push(dto.status)
			}

			fields.push(`updated_at = CURRENT_TIMESTAMP`)


			const stmt = await db.prepare(`
				UPDATE tasks SET 
					${fields.join(', ')}
				WHERE task_id = ?
			`);
			values.push(id)

			return stmt.run(...values)
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