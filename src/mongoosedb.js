const mongoose = require("mongoose");

const user = "admin";
const pass = "1oIJwHUYk6IUD7GE";
const database = "todo_sample";
const serverName = "cluster0.vabvwsb.mongodb.net";

module.exports ={
    init: () => {
        mongoose.connect(`mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`)
        .then(() => console.log('Connected!'))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
}