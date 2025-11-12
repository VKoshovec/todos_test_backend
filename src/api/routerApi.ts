import  { Router, Request, Response } from "express";
const router = Router();
import boardsControllers from '../controllers/boards';
import taskControllers from '../controllers/tasks';
import validators from '../validators/validator';
 
router.get('/', (req: Request, res: Response) => {
   res.send('test msg api - ok');
});

//boards
router.get('/boards', boardsControllers.getAllBoards);

router.post('/board', boardsControllers.createBoard);

router.delete('board/:boardId', validators.validateId, boardsControllers.delBoard);

router.delete('board/:boardId', validators.validateId, boardsControllers.updBoard);

//tasks 
router.get('/tasks/:board_id', validators.validateId, taskControllers.getAllTasks);

router.post('/tasks/:board_id', validators.validateId, taskControllers.createTask);

router.delete('/tasks/:taskId', validators.validateId, taskControllers.delTask);

router.put('/tasks/:taskId', validators.validateId, taskControllers.updTask);

export default router;