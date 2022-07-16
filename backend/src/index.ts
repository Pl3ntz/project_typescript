import express from 'express';

const app = express();


app.get('/', (req, res) => {
    return res.send("Hello again using typescript");
})

app.listen(3333);