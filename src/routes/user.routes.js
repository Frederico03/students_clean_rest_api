import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos usuários -> GET
store/create -> cria um novo usuário -> POST
delte -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário ->PATCH OU PUT
*/
