import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.send('Server is running...');
});
app.post('/sum', (req, res) => {
    return res.json({
        result: req.body.first + req.body.second
    })
})
app.listen(port, () => console.log('Server is running... localhost:' + port));