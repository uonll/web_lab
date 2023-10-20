const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const model = require('./model/model');
const v1_router = require('./router/router');
const HOST = model.HOST;
const PORT = model.PORT;

const main = express();
main.use(express.static('public'));

main.use(morgan('dev'));

main.use(helmet());

main.use('/v1', v1_router);


main.use((req, res) => {
    res.status(404).send('Данная страница не найдена!');
});

main.use((err, req, res) => {
    res.status(500).send('Ошибка сервера')
});

main.listen(PORT, HOST, () => {

    console.log(`Сервер запущен http://${HOST}:${PORT}`);
});