const mongooes = require('mongoose')

const mongo_url = process.env.MONGO_CONN;

mongooes.connect(mongo_url)
    .then(()=>{
        console.log('MongoDB Connected...');
    }).catch((err) =>{
        console.log('MongoDB Connection Error: ', err);
    })