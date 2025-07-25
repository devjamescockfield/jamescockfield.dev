import express from 'express'
import next from 'next'

const app = next({ dev: true })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('/api/ping', (_, res) => {
        res.json({ message: 'Pong from Express!' })
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, () => {
        console.log('🚀 Server running at http://localhost:3000')
    })
})