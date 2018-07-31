const express = require('express')
const app = express()

app.use(express.static('dist'))
//set the public to dist/index.html

app.listen(3000, () => {
    console.log('server listening..')
})

app.get('/', (req, res) => {
    res.render('index.html')
})