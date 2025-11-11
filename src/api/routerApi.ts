import  { Router, Request, Response } from "express";
const router = Router();
import boardsControllers from '../controllers/boards';
 
router.get('/', (req: Request, res: Response) => {
   res.send('test msg api - ok');
});

//boards
router.get('/boards', boardsControllers.getAllBoards);

router.post('/board', boardsControllers.createBoard);

//tasks 
router.get('/tasks:boardid', (req: Request, res: Response) => {
   const { boardid: number } = req.params;
   res.status(200).json({
    status: 'success',
    code: 200,
    data: {},
})
});


export default router;