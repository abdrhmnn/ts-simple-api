import { createClient } from "@supabase/supabase-js";
import "dotenv/config"

const url: string = process.env.SUPABASE_URL as string
const key: string = process.env.SUPABASE_KEY as string

export const supabase = createClient(url, key)