import { database as db } from '../models/task.model'

class Task {
	constructor (title, description, status = 'PENDING') {
		this.title = title;
		this.description = description;
		this.status = status
		this.created_at = new Date()
		this.updated_at = new Date()
	}

	static addTask(dto) {
		const stmt = db.prepare(`
			INSERT INTO tasks (title, description) VALUES(${dto.title}, ${dto.description})
		`);

		return stmt.run(dto.title, dto.description)
	}
}

export default Task;