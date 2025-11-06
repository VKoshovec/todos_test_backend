import express, { Request, Response, Application } from 'express';

// Создаем приложение Express
const app: Application = express();
const port: number = 3000;

// Middleware для парсинга JSON-тел запросов
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Главный маршрут (GET)
app.get('/', (req: Request, res: Response) => {
  res.send('Привет, мир! Это твой Express.js + TypeScript сервер.');
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});