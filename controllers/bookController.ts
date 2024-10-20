import { NextFunction, Request, Response } from "express"
import { deleteBookService, getAllBook, insertBookService, updateBookService } from "../services/bookService"
import { bookType } from "../types/bookType.types"

export const getAllBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data: Promise<any> = await getAllBook()

    if(!data){
      res.status(500).json({ message: "Error fetching books" })
    }

    res.status(200).json({ 
      message: "Success",
      data
    })
  } catch (error) {
    res.status(500).json({ message: "Unexpected fetching books", error })
  }
}

export const insertBookController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const book: bookType = {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    publication_year: req.body.publication_year,
    quantity: req.body.quantity,
    available_quantity: req.body.available_quantity,
    category_id: req.body.category_id
  }

  try {
    const data: Promise<any> = await insertBookService(book)

    if(!data){
      res.status(500).json({ message: "Error when insert book" })
    }

    res.status(200).json({ 
      message: "Success",
      data
    })
  } catch (error) {
    res.status(500).json({ message: "Unexpected inserting a book", error })
  }
}

export const updateBookController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id: number | string = req.params.id
  
  const book: bookType = {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    publication_year: req.body.publication_year,
    quantity: req.body.quantity,
    available_quantity: req.body.available_quantity,
    category_id: req.body.category_id
  }

  try {
    const data: Promise<any> = await updateBookService(id, book)

    if(!data){
      res.status(500).json({ message: "Error when update book" })
    }

    res.status(200).json({ 
      message: "Success",
      data
    })
  } catch (error) {
    res.status(500).json({ message: "Unexpected updating a book", error })
  }
}

export const deleteBookController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id: number | string = req.params.id
  
  try {
    const data: Promise<any> = await deleteBookService(id)

    if(!data){
      res.status(500).json({ message: "Error when delete book" })
    }

    res.status(200).json({ 
      message: "Success",
      data
    })
  } catch (error) {
    res.status(500).json({ message: "Unexpected deleting a book", error })
  }
}