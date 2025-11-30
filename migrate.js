import { database as db } from './models/task.model'

const initDatabase = `
CREATE TABLE IF NOT EXISTS tasks (
  task_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT CHECK( status IN ('DONE', 'IN-PROGRESS', 'PENDING')),
  created_at TEXT CURRENT_TIMESTAMP, 
  updated_at TEXT CURRENT_TIMESTAMP
);
`;

db.exec(initDatabase);

console.log('DB Initialized');