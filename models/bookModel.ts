import { supabase } from "../db"

export const getAll = async (): Promise<{ data: any[] | null, error: any | null }> => {
  const { data, error } = await supabase
  .from("book")
  .select("*")
  
  if(error){
    console.info("Error fetching supabase: ", error)
    return { data: null, error }
  }

  return { data, error: null }
}