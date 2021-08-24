const express = require('express');
var cors = require('cors');
const app = express();

const authRouter = require('./src/routes/auth');
const pingRouter = require('./src/routes/ping');
const userRouter = require('./src/routes/users');
const estoRouter = require('./src/routes/estoque');
const vendRouter = require('./src/routes/vendas');
const logsRouter = require('./src/routes/logs');
const pdfsRouter = require('./src/routes/pdf');
const linkRouter = require('./src/routes/link');

app.use(cors());
app.options('*', cors());
app.use(express.json()); //tornar o corpo inteligivel para o javascript. Transforma a requisição em json

app.use('/', pingRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/estoque', estoRouter);
app.use('/vendas', vendRouter);
app.use('/logs', logsRouter);
app.use('/pdf', pdfsRouter);
app.use('/link', linkRouter);


app.listen(process.env.PORT || 3001, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

