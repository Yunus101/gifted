const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('hi, Mr Client')
})

app.get('/2', (req, res) => {
    res.send('hi, Mr Client1')
})

app.listen(process.env.PORT || 3000)