import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import logger from 'morgan';
import mongoose from 'mongoose';

import apiRouter from './api/routerApi';

// Создаем приложение Express
const app: Application = express();
const port: number = 3000;

// Middleware для парсинга JSON-тел запросов
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(logger('dev'));
app.use(express.json());

// Главный маршрут (GET)
app.get('/', (req: Request, res: Response) => {
  res.send('test msg - ok');
});

app.use('/api', apiRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
res.status(404).json({
status: 'error',
code: 404,
message: 'Use api on routes: /api/tasks',
data: 'Not found',
});
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
console.log(err.stack);
res.status(500).json({
status: 'fail',
code: 500,
message: err.message,
data: 'Internal Server Error',
});
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
