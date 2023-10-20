const express = require('express');
const model = require('./model/model.js');
const v1_router = require('./router/router.js');
const HOST = model.HOST
const PORT = model.PORT;

const main = express();
main.use(express.static('public'));

main.use('/v1', v1_router);
//main.use('/v1/comments', v1_router2);

main.listen(PORT, HOST, () => {

    console.log(`Server is started http://${HOST}:${PORT}`);
});

main.use((req, res) => {
    res.status(404).send('Page not found!');
});

main.use((err, req, res) => {
    res.status(500).send('Server error')
});