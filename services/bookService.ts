import { deleteBook, getAll, insertBook, updateBook } from "../models/bookModel"
import { bookType } from "../types/bookType.types"

export const getAllBook = async (): Promise<any> => {
  const { data, error } = await getAll()

  if(error){
    console.info("Error fetching books:", error)
    return
  }

  return data
}

export const insertBookService = async (book: bookType): Promise<any> => {
  const { data, error } = await insertBook(book)

  if(error){
    console.info("Error when insert a book:", error)
    return
  }

  return data
}

export const updateBookService = async (id: number | string, book: bookType): Promise<any> => {
  const { data, error } = await updateBook(id, book)

  if(error){
    console.info("Error when update a book:", error)
    return
  }

  return data
}

export const deleteBookService = async (id: number | string): Promise<any> => {
  const { data, error } = await deleteBook(id)

  if(error){
    console.info("Error when delete a book:", error)
    return
  }

  return data
}