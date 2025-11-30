import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const database = new DatabaseSync(`${__dirname}/task.db`);

const initDatabase = `
CREATE TABLE IF NOT EXISTS tasks (
  task_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status enum('DONE', 'IN-PROGRESS', 'PENDING'),
  created_at TIMESTAMPS, 
  updated_at TIMESTAMPS
);
`;

database.exec(initDatabase);
export default database;