const express = require('express')
const next = require('next')
const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/leaderboard', (req, res) => {
    return app.render(req, res, '/leaderboard', req.query)
  })

  server.get('/profile', (req, res) => {
    return app.render(req, res, '/profile', req.query)
  })

  server.get('/help', (req, res) => {
    return app.render(req, res, '/help', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    const date = new Date().toGMTString();
    if (err) throw err
    console.log(`> Ready on port: ${port} on ${date}`)
  })
})