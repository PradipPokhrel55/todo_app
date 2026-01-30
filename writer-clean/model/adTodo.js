const addTodo = () => {
    if(!text.trim()) return;

    const today = new Date().toISOString().split('T')[0];

    db.transaction(tx => {
        tx.executeSql(
            `INSERR INTO todos (date,text,completed,category) VALUES (?,?,?,?);`,
            [today, text, 0, 'personal'],
            (_, result) => {
                console.log("Inserted ID:", result.insertId);
                setText('');
            },
            (_, error) => {
                console.log("Inser error:", error);
            }
        );
    });
};
export default addTodo;