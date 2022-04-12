import express from 'express'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

app.get('/ping', (_req, res) => {
    console.log("Pinged : " + new Date().toLocaleDateString())
    res.send("pong: " + new Date().toLocaleDateString())
})

app.listen(PORT, () => {
    console.log(`Server running on port aaaa ${PORT}`)
})
