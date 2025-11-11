import  { Router, Request, Response } from "express";
const router = Router();
import boardsControllers from '../controllers/boards';
import taskControllers from '../controllers/tasks'
 
router.get('/', (req: Request, res: Response) => {
   res.send('test msg api - ok');
});

//boards
router.get('/boards', boardsControllers.getAllBoards);

router.post('/board', boardsControllers.createBoard);

router.delete('board/:boardId', boardsControllers.delBoard)

//tasks 
router.get('/tasks/:board_id', taskControllers.getAllTasks);


export default router;