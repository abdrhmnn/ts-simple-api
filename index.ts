import express from "express"

const app = express()

app.get("/", (req, res): void => {
  res.send("Hello world duarr!")
})

app.listen(3000, "localhost", (): void => {
  console.log("server is running")
})