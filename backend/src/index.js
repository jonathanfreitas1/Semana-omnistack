const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-ubolk.mongodb.net/teste?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true, 
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação..)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)


app.listen(3333);

