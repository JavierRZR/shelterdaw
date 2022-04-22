import express from 'express'

const app = express()
app.use(express.json())
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

const PORT = process.env.PORT || 3000

app.get('/', (_req, res) => {
    res.render('index.pug', {
        name: "Prueba",
        parrafo: "Esto e sun parrafo"
    })
})

app.get('/ping', (_req, res) => {
    console.log("Pinged : " + new Date().toLocaleDateString())
    res.send("pong: " + new Date().toLocaleDateString())
})

app.get('/protectora', (_req, res) => {
    res.render('protectora.pug', {
        content: 'protectoras.pug'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port aaaa ${PORT}`)
})