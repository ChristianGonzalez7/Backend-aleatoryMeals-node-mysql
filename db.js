import mysql from 'mysql';

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'christian7',
    database: 'aleatory_meals'
});
connection.connect();

export default connection;