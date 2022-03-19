import express from "express";
import {savePayment} from "../controllers/controllers.js";


const router = express.Router()

router.post('/save', savePayment)

export default router