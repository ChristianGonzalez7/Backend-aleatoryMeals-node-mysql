import mysql from 'mysql';

let connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bc2259851e7a0a',
    password: '271c0020',
    database: 'heroku_b0eac2baed98b33'
});
connection.connect();

export default connection;