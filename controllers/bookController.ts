import { NextFunction, Request, Response } from "express"
import { getAllBook } from "../services/bookService"

export const getAllBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await getAllBook()

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