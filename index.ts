import express from "express"
import { supabase } from "./db"

const app = express()
const port: number = 3000
app.use(express.json());

app.get("/", (req, res): void => {
  res.send("Hello world duarr!")
})

app.post("/abdu", async (req, res): Promise<any> => {
  const { data, error } = await supabase
  .from("testing")
  .insert({ nama: req.body.name, umur: req.body.umur })
  .select()

  if (error){
    return res.json({
      status: "error",
      msg: error
    })
  }

  res.json({
    data: data
  })
})

app.listen(port, "localhost", (): void => {
  console.log(`server is running on http://localhost:${port}`)
})