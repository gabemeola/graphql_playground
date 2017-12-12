import mysql from 'mysql'


let socket = null

function connect() {
    const connection = mysql.createConnection({
        host: 'mysqldb',
        database : 'test',
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    })

    connection.connect((err) => {
        if (err) throw err

        console.log("MySQL Connected!")
    })

    return connection;
}


export function query(...args) {
    return new Promise((resolve, reject) => {
        // Connect on first request
        if (socket === null) socket = connect()

        socket.query(...args, (err, res) => {
            if (err) return reject(err)

            resolve(res)
        })
    })
}