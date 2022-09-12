import express from 'express';

const app = express()

app.get('/ads', (req, res) => {
    res.json([
        { id: 1, nome: 'Ad 1' },
        { id: 2, nome: 'Ad 3' },
        { id: 3, nome: 'Ad 3' },
        { id: 4, nome: 'Ad 4' },
        { id: 5, nome: 'Ad 5' },
    ])
})

app.listen(3333, () => {
    console.log("Server started!")
})