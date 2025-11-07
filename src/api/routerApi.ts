import express, { Router, Request, Response, Application } from "express";
import { getAllBoards } from "../controllers/boards"
const router = Router();
const app: Application = express();

router.get('/', (req: Request, res: Response) => {
   res.send('test msg api - ok');
});

//boards
router.get('/boards', (req: Request, res: Response) => {

    const boardList = async() => await getAllBoards();

    res.status(200).json({
    status: 'success',
    code: 200,
    data: {...boardList},
})
});

router.get('/board:id', (req: Request, res: Response) => {
   const { id: number } = req.params;
   res.status(200).json({
    status: 'success',
    code: 200,
    data: {},
})
});

router.get('/tasks:boardid', (req: Request, res: Response) => {
   const { boardid: number } = req.params;
   res.status(200).json({
    status: 'success',
    code: 200,
    data: {},
})
});


export default router;