import { Router } from "express"
import { deleteBookController, getAllBooks, insertBookController, updateBookController } from "../controllers/bookController"

const bookRoutes = Router()

bookRoutes.get("/books", getAllBooks)
bookRoutes.post("/books", insertBookController)
bookRoutes.patch("/books/:id", updateBookController)
bookRoutes.delete("/books/:id", deleteBookController)

export default bookRoutes