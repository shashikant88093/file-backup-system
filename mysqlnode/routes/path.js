const express = require('express');
const fs = require("fs");

const Router = express.Router();


Router.post("/", (req, res,next) => {
    // req.header("Content-Type", "application/json");
    console.log(req.body.path)
    fs.readFile(req.body.path, 'utf8', (err, data) => {
        if (!err) {
        res.send(data)
            
        }else{
            console.error(err)

        }
    })

})




module.exports = Router;