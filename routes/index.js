import express from "express";
import { getMahasiswa,
        saveMahasiswa,
        updateMahasiswa,
        getMahasiswaId ,
        deletemahasiswa,
        } from "../controller/Mahasiswacontroller.js";

import { Register,
         login,
         loginRequired
         
            } from "../controller/Usercontroller.js";
const router = express.Router();

router.get('/',getMahasiswa);
router.get('/:id',getMahasiswaId);
router.post('/',saveMahasiswa);
router.patch('/:id',updateMahasiswa);
router.delete('/:id',deletemahasiswa);

//router user

router.post('/user/tambah',Register);
router.post('/user/login',login);
router.post('/user/loginreq',loginRequired);
export default router;