const express = require("express");
const cors =require("cors");


const app = express();
app.use(cors());

const recipeData = require("./Data/recipes.json");


const PORT = 8080;

const users = [
    {
        "name": "Jack",
        "age": "32",
        "gender": "male"


    },
    {
        "name": "Conner",
        "age": "22",
        "gender": "male"


    },
    {
        "name": "Sydney",
        "age": "12",
        "gender": "female"


    },
    {
        "name": "Lauren",
        "age": "45",
        "gender": "female"


    },
    {
        "name": "Tristelle",
        "age": "20",
        "gender": "female"


    },
    {
        "name": "Jill",
        "age": "57",
        "gender": "female"


    },
    {
        "name": "Luke",
        "age": "34",
        "gender": "male"


    },
    {
        "name": "Nick",
        "age": "37",
        "gender": "male"


    },
    {
        "name": "Brian",
        "age": "50",
        "gender": "male"


    },
    {
        "name": "Cayden",
        "age": "",
        "gender": "male"


    }
]

app.get("/", (req, res)=> {
    res.send({
        name: "Conner",
        age: 22,
        gender: "male"
    });
});

app.get("/users", (req, res)=>{
    res.send(users);
})

app.get("/recipes", (req, res)=>{
    res.send(recipeData)
})

app.get("/recipes/:id", (req, res)=>{
    const id = req.params.id

    for(let i = 0; i < recipeData.length;i++){
        if(recipeData[i].id === id){
            res.send(recipeData[i])
        }
    }
    res.send("Data not found!")
})

app.listen(8080, ()=>{
    console.log("Your API is running on PORT: " +PORT)
});