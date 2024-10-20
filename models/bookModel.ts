import { supabase } from "../db"
import { bookType } from "../types/bookType.types"

export const getAll = async (): Promise<{ data: any[] | null, error: any | null }> => {
  const { data, error } = await supabase
  .from("books")
  .select("*")
  
  if(error){
    console.info("Error fetching supabase: ", error)
    return { data: null, error }
  }

  return { data, error: null }
}

export const insertBook = async (book: bookType): Promise<{ data: any[] | null, error: any | null }> => {
  const { data, error } = await supabase
  .from("books")
  .insert(book)
  .select()
  
  if(error){
    console.info("Error fetching supabase: ", error)
    return { data: null, error }
  }

  return { data, error: null }
}

export const updateBook = async (id: number | string, book: bookType): Promise<{ data: any[] | null, error: any | null }> => {
  const { data, error } = await supabase
  .from("books")
  .update(book)
  .eq("id", id)
  .select()
  
  if(error){
    console.info("Error fetching supabase: ", error)
    return { data: null, error }
  }

  return { data, error: null }
}

export const deleteBook = async (id: number | string): Promise<{ data: any[] | null, error: any | null }> => {
  const { data, error } = await supabase
  .from("books")
  .delete()
  .eq("id", id)
  .select()
  
  if(error){
    console.info("Error fetching supabase: ", error)
    return { data: null, error }
  }

  return { data, error: null }
}