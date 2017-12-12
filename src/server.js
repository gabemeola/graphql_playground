import http from 'http';
import Api from './Api';


export default function startServer(PORT) {
    const { app } = new Api();

    // Spin up Server
    http.createServer(app)
        .listen(PORT, (err) => {
            if (err) throw err

            console.log(`Server is Listening on Port: ${PORT}`)
        })
}