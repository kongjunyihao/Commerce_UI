const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
    hoat: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sys'
});


// app.get("/insert", (req, res)=>{
//     con.query(`insert into usc_user (id, email, password) values("1","123@gmail.com","123456")`, function(err, result){
//         if(err){
//             console.log(err);
//         }else{
//             res.send(result);
//             console.log(JSON.parse(JSON.stringify(result)));
//         }
//     });
// })

app.get("/select", (req, res)=>{
    con.query(`select * from usc_user`, function(err, result){
        if(err){
            console.log(err);
        }else{
            res.send(result);
            // console.log(JSON.parse(JSON.stringify(result)));
        }
    });
})

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("on port 3000");
    }
})