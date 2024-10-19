import { getAll } from "../models/bookModel"

export const getAllBook = async (): Promise<any> => {
  const { data, error } = await getAll()

  if(error){
    console.info("Error fetching books:", error)
    return error
  }

  return data
}