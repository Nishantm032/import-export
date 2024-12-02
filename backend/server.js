import express from 'express'
import cors  from 'cors'
import { connectDb } from './config/DB.js'


// app config
const app = express()
const port = 8080

//middleware

app.use(express.json())                                                   // help to parse req when it come from frontend to backend
app.use(cors())


//db connection
connectDb();

app.get("/", (req, res)=>{
    res.send("API is Working")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})


//mongodb+srv://NishantMishra:<db_password>@clusterimpexp.4d5qn.mongodb.net/?
