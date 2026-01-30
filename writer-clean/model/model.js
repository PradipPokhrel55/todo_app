import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('todos.db');

db.transaction(tx => {
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            text TEXT,
            completed INTEGER,
            category TEXT
        );`
    );
});
