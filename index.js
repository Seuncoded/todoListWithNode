const express = require('express')
const ejs = require('ejs')

const app = express()
app.use(express.urlencoded({ extends: true }))
app.set("view engine", "ejs")


let todoarry = []

app.get("/", (req, res) => {
    res.render('index', { todoarry: todoarry })
})


app.post("/addtodo", (req, res) => {
    console.log(req.body);
    todoarry.push(req.body)
    console.log(todoarry);
    res.redirect("/")
})

app.post("/deltodo/:index", (req, res) => {
    console.log(req.params.index);
    let index = req.params.index
    todoarry.splice(index, 1)
    res.redirect("/")
})

app.post("/editodo/:index", (req, res) => {
    let changing = prompt('Enter the New Value')
    todoarry.splice(index, 1, changing)
    res.redirect("/")
})




const port = 5090
app.listen(port, () => {
    console.log(`app start at port ${port}`);
})
