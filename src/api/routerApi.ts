import express, { Router, Request, Response, Application } from "express";

const router = Router();
const app: Application = express();

router.get('/', (req: Request, res: Response) => {
   res.send('test msg api - ok');
});

router.get('/boards', (req: Request, res: Response) => {
   res.status(200).json({boards: ""});
});

export default router;