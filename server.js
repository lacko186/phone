const express = require("express");
const cors = require("cors")
const app = express();
const port = 5000;


let TelekomPhones =
[
    {
        name: "Samsung galxy A55",
        price: 120000,
        storage: "128 GB",
        color: "black",
        support: 5
    },
    {
        name: "OnePlus 7 pro",
        price: 170000,
        storage: "128 GB",
        color: "black",
        support: 2
    },
    {
        name: "Iphone 14",
        price: 400000,
        storage: "64 GB",
        color: "white",
        support: 3
    },
    {
        name: "Xiaomi Redmi note 8",
        price: 120000,
        storage: "128 GB",
        color: "black",
        support: 5
    }

];

app.get("/phones", (req,res)=>{
try{
    res.json(TelekomPhone);
    res.status(200);
}catch(err){
    console.error("adatbetöltési hiba", err);
    res.status(400);
}
});

app.post('/phones', (req,res)=>{

    try{
        const newPhone = req.body;
        TelekomPhones.push(newPhone);
        res.status(200).json(newpPhone);
    }
    catch{
        console.error("hiba történt");
        res.status(500);
    }
});


app.listen(port, ()=>{
    console.log(`Szerver elindult, az adatok elérhetőek a http://localhost:${port}/phones`)
})