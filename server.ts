import express from "express"
import bookRoutes from "./routes/bookRoute";

const app = express()
const port: number = 3000
app.use(express.json());
app.use("/api", bookRoutes)

app.listen(port, "localhost", (): void => {
  console.log(`server is running on http://localhost:${port}`)
})