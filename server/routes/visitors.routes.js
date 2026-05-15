import express from 'express' ;
import { registerVisitor } from '../controllers/visitors.controller.js';


const router = express.Router() ;


router.post('/visitors' , registerVisitor )

export default router