import express from 'express';

const app = express();
app.use(express.json());

let array = [{
    saludo: "hello",
    idioma: "english"
},
{
    saludo: "hallo",
    idioma: "german"
}];


app.get('/v1/get', (req, res) => {
    try {
        res.send(JSON.stringify(array));
    } catch (error) {
        console.log(error)
    }
});

app.post('/v1/post', (req, res) => {   
    try {
        const response = req.body;
        array.push(response); 
        res.send(JSON.stringify(array));
    } catch (error) {
        console.log(error)
    }
});

app.put('/v1/put/:id', (req, res) => {
    try {
        const id = req.params.id;
        const response = req.body;
        array[id] = response; 
        res.send(JSON.stringify(array));
    } catch (error) {
        console.log(error)
    }
});

app.listen(3000, () => {
   console.log('Servidor levantado en puerto 3000.')
});