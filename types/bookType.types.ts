export type bookType = {
  isbn: string,
  title: string,
  author: string,
  publisher: string,
  publication_year: number,
  quantity: number,
  available_quantity: number,
  created_at?: Date,
  category_id: number
}