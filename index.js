import express from "express"
import axios from "axios"

const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', async (req, res) =>{

    try {
        const result = await axios.get("https://api.kanye.rest/")
        res.render("index.ejs", {ye: result.data.quote})
    } catch (error) {
        
    }
})

app.get('/newQuote', async (req,res) =>{

    try {
        const result = await axios.get("https://api.kanye.rest/")
        res.render("index.ejs", {ye: result.data.quote})
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})


app.listen(port,() =>{
    console.log(`Server is listening on port ${port}...`)
})