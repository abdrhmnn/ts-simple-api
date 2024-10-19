import { Router } from "express"
import { getAllBooks } from "../controllers/bookController"

const bookRoutes = Router()

bookRoutes.get("/books", getAllBooks)

export default bookRoutes